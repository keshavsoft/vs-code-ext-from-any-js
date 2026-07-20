import fs from 'fs';
import path from 'path';

const startFunc = (inRootPath) => {
    let currentDir = path.join(inRootPath, "Config", "Schemas");

    const jsonFiles = fs.readdirSync(currentDir)
        .filter(file => path.extname(file).toLowerCase() === ".json");

    return jsonFiles;
};

export default startFunc;

