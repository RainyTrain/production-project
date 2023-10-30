import { Project, SyntaxKind } from "ts-morph";

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removedFeatureName) {
  throw new Error("Put the feature flag name");
}

if (!featureState) {
  throw new Error("Put the feature flag state");
}

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const sourceFiles = project.getSourceFiles();

sourceFiles.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression)) {
      node.forEachChild((child) => {
        if (
          child.isKind(SyntaxKind.Identifier) &&
          child.getText() === "toggleFeature"
        ) {
          const objectOptions = node.getFirstDescendantByKind(
            SyntaxKind.ObjectLiteralExpression
          );
          if (!objectOptions) return;

          const on = objectOptions.getProperty("on");
          const off = objectOptions.getProperty("off");
          const name = objectOptions.getProperty("name");

          const onFunction = on?.getFirstDescendantByKind(
            SyntaxKind.ArrowFunction
          );
          const offFunction = off?.getFirstDescendantByKind(
            SyntaxKind.ArrowFunction
          );

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
        }
      });
    }
  });
});
project.save();
