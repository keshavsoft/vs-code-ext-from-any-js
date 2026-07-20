import fs from "fs";
import path from "path";

import alterConfig from 'kschema-fs-ui-alter-config';

// import { withHeader } from "json-crud-ui-table";
// import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ inTableName, toPath, schemasPath, inTargetPath }) => {
    const configPath = path.join(inTargetPath, schemasPath, `${inTableName}.json`);
    const data = fs.readFileSync(configPath);

    alterConfig({
        toPath,
        sacredWisdom: JSON.parse(data),
        inAction: "Crud"
    });
};

export default startFunc;
