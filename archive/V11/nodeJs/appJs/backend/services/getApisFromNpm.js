import extractApis from 'pattern-collector-appjs-use-extract';

const getSchemaFiles = (activeEditorContect) => {
    const apisPresent = extractApis({ fileContent: activeEditorContect });

    return apisPresent;
    // return getTableNames(inTargetPath);
};

export default getSchemaFiles;
