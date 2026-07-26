import { insertGenPk } from 'kschema-fs-api-gen-post-actions';

// import { withHeader } from "json-crud-ui-table";
import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, toPath, schemasPath, inTargetPath,
    inPort, inFolderName }) => {
    await executeGenerationTask({
        panel,
        actionLabel: "With Header",
        tableName,
        toPath,
        configPath: schemasPath,
        inTargetPath,
        generateFunc: insertGenPk,
        inPort, inFolderName
    });
};

export default startFunc;
