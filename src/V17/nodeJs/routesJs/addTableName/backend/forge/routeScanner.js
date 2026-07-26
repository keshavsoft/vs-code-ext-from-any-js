import fs from 'fs';
import path from 'path';

// import getFolders from 'pattern-collector-routesjs-import-extract';

import extractRegex from './extractRegex.js';

import pullAllLines from 'pattern-collector-anyjs';

const getFoldersFromImport = (toPath) => {


    const fileContent = fs.readFileSync(path.join(toPath, "routes.js"), 'utf8');

    const fromPullLines = pullAllLines({ fileContent, extractRegex });

    return fromPullLines.importLines;

    // return fromPullLines.importLines.map(element => {
    //     return element.raka;
    // });

    //  fileContent,
    // consumptionRegex: extractRegex.consumptionRegex,
    // importRegex: extractRegex.importRegex,
    // exportRegex: extractRegex.exportRegex,
    // importNpmRegex: extractRegex?.importNpmRegex,

    // return getFolders({ filePath: toPath });
};

export default getFoldersFromImport;
