import { Project } from 'ts-morph';

const project = new Project({
});

project.addSourceFileAtPath('src/**/*.ts');
project.addSourceFileAtPath('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layersArr = ['0_app', '2_widgets', '3_features', '4_entities', '5_shared'];
    return layersArr.some((item) => value.startsWith(item));
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
