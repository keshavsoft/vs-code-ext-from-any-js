import getFolders from 'pattern-collector-routesjs-import-extract';

const getFoldersFromImport = (toPath) => {
    return getFolders({ filePath: toPath });
};

export default getFoldersFromImport;
