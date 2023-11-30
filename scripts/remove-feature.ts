import { JsxAttribute, Node, Project, SyntaxKind } from "ts-morph";

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removedFeatureName) {
  throw new Error("Put the feature flag name");
}

if (!featureState) {
  throw new Error("Put the feature flag state");
}

const toggleFunctionName = "toogleFeature";
const toggleComponentName = "ToggleFeatures";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/ArticlesDetailsPage.tsx");

const sourceFiles = project.getSourceFiles();

const isToggleFunction = (node: Node) => {
  let isToggleFeature = false;

  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === toggleFunctionName
    ) {
      isToggleFeature = true;
    }
  });

  return isToggleFeature;
};

const isToggleComponent = (node: Node) =>
  node.getFirstDescendantByKind(SyntaxKind.Identifier)?.getText() ===
  toggleComponentName;

const replaceToggleFunction = (node: Node) => {
  const objectOptions = node.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression
  );
  if (!objectOptions) return;

  const on = objectOptions.getProperty("on");
  const off = objectOptions.getProperty("off");
  const name = objectOptions.getProperty("name");

  const onFunction = on?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
  const offFunction = off?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);

  const featureName = name
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);

  // eslint-disable-next-line no-useless-return
  if (featureName !== removedFeatureName) return;

  if (featureState === "on") {
    node.replaceWithText(onFunction?.getBody().getText() ?? "");
  }

  if (featureState === "off") {
    node.replaceWithText(offFunction?.getBody().getText() ?? "");
  }
};

const getAttributeNodeByName = (jsxAttributes: JsxAttribute[], name: string) =>
  jsxAttributes.find((node) => node.getName() === name);

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith("(")) {
    return value.slice(1, -1);
  }

  return value;
};

const replaceComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeNodeByName(attributes, "on");
  const offAttribute = getAttributeNodeByName(attributes, "off");
  const featureNameAttribute = getAttributeNodeByName(attributes, "feature");

  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    ?.slice(1, -1);

  if (featureName !== removedFeatureName) return;

  const offValue = getReplacedComponent(offAttribute);
  const onValue = getReplacedComponent(onAttribute);

  if (featureState === "on" && onValue) {
    node.replaceWithText(onValue);
  }

  if (featureState === "off" && offValue) {
    node.replaceWithText(offValue);
  }
};

sourceFiles.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      replaceToggleFunction(node);
    }

    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    ) {
      replaceComponent(node);
    }
  });
});
project.save();
