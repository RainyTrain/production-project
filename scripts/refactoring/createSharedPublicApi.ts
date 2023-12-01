import { Project } from "ts-morph";
import path from "path";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const sourceFiles = project.getSourceFiles();

const sharedUiDirectory = project.getDirectory(
  path.resolve(__dirname, "..", "..", "src", "shared", "ui")
);

const componentsDirectory = sharedUiDirectory?.getDirectories();

componentsDirectory?.forEach(async (element) => {
  const indexPath = element.getPath();
  const indexFilePattern = `${indexPath}/index.ts`;
  const indexFiles = element.getSourceFile(indexFilePattern);

  if (!indexFiles) {
    const newFile = element.createSourceFile(
      indexFilePattern,
      `export * from "./${element.getBaseName()};"\n`,
      { overwrite: true }
    );

    await newFile.save();
  }
  console.log(indexFiles?.getBaseName());
});

sourceFiles.forEach((element) => {
  const importDeclaration = element.getImportDeclarations();
  importDeclaration.forEach((importdeclaration) => {
    const value = importdeclaration.getModuleSpecifierValue();
    const segments = value.split("/");
    if (segments[0] === "shared" && segments[1] === "ui") {
      const newValue = segments.slice(0, 3).join("/");
      importdeclaration.setModuleSpecifier(newValue);
    }
  });
});

project.save();
