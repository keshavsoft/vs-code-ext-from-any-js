import runSync from 'template-provider';

// import addTableName from 'kschema-api-gen-endpointsjs';

import { executeGenerationTask } from "../forgeEngine.js";

const startFunc = async ({ panel, tableName, toPath, inFolderName }) => {
    await executeGenerationTask({
        panel,
        actionLabel: `Add Table Name`,
        inFolderName,
        toPath,
        generateFunc: runSync,
        tableName
    });

    // await executeGenerationTask({
    //     panel,
    //     actionLabel: "Add Table Name",
    //     tableName,
    //     toPath,
    //     generateFunc: addTableName,
    //     inFolderName
    // });
};

export default startFunc;
