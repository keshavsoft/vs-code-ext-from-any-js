import fs from "fs";
import path from "path";

import alterConfig from 'kschema-fs-ui-alter-config';

import endPointsJson from './endPoints.json' with {type: 'json'};

const startFunc = ({ inTableName, toPath,
    inEndPoint, schemasPath, inTargetPath }) => {

    const configPath = path.join(inTargetPath, schemasPath, `${inTableName}.json`);
    const data = fs.readFileSync(configPath);

    endPointsJson.read = inEndPoint;

    const fromAlter = alterConfig({
        toPath, endPointsJson,
        sacredWisdom: JSON.parse(data),
        inAction: "Crud"
    });

    return fromAlter;
};

export default startFunc;
