import getFolders from 'pattern-collector-routesjs-import-extract';

const getSchemaFiles = (toPath) => {
    const apisPresent = getFolders({ filePath: toPath });

    return apisPresent;
    // return getTableNames(inTargetPath);
};

export default getSchemaFiles;
