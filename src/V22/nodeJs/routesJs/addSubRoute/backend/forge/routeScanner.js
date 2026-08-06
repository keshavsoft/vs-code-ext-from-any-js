import fs from 'fs';
import path from 'path';

import pullAllLines from 'pattern-collector-anyjs-story';

const getFoldersFromImport = (toPath) => {
    const fileContent = fs.readFileSync(path.join(toPath, "routes.js"), 'utf8');

    const fromPullLines = pullAllLines({ fileContent, fileType: "fromRoutesJsEnd" });
    const folderNames = fromPullLines?.linesStory?.importLines?.map(element => {
        return element?.part1;
    });

    return folderNames;
};

export default getFoldersFromImport;
