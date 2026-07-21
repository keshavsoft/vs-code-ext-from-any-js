import { insertAsIs } from 'kschema-fs-api-gen-post-actions';

// import { withHeader } from "json-crud-ui-table";
import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, toPath, schemasPath, inFolderName }) => {
    await executeGenerationTask({
        panel,
        actionLabel: "With Header",
        tableName,
        toPath,
        configPath: schemasPath,
        generateFunc: insertAsIs,
        inFolderName
    });
};

export default startFunc;
