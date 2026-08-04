import fs from "fs";
import path from "path";

import alterConfig from 'kschema-fs-ui-alter-config';

import endPointsJson from './endPoints.json' with {type: 'json'};

const startFunc = ({ inTableName, toPath,
    inCreateEndPoint, inReadEndPoint, inUpdateEndPoint, inDeleteEndPoint,
    schemasPath, inTargetPath }) => {

    const configPath = path.join(inTargetPath, schemasPath, `${inTableName}.json`);
    const data = fs.readFileSync(configPath);

    endPointsJson.create = inCreateEndPoint;
    endPointsJson.read = inReadEndPoint;
    endPointsJson.update = inUpdateEndPoint;
    endPointsJson.delete = inDeleteEndPoint;

    const fromAlter = alterConfig({
        toPath, endPointsJson,
        sacredWisdom: JSON.parse(data),
        inAction: "Crud"
    });

    return fromAlter;
};

export default startFunc;
