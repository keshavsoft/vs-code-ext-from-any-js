import fs from "fs";
import path from "path";

import alterConfig from 'kschema-fs-ui-alter-config';

import endPointsJson from './endPoints.json' with {type: 'json'};

// import { withHeader } from "json-crud-ui-table";
// import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ inTableName, toPath,
    inEndPoint, schemasPath, inTargetPath }) => {

    const configPath = path.join(inTargetPath, schemasPath, `${inTableName}.json`);
    const data = fs.readFileSync(configPath);

    endPointsJson.read = inEndPoint;

    alterConfig({
        toPath, endPointsJson,
        sacredWisdom: JSON.parse(data),
        inAction: "Crud"
    });
};

export default startFunc;
