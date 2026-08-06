import runSync from 'template-provider';

import { executeGenerationTask } from "../forgeSubRoute.js";

const startFunc = async ({ panel, tableName, toPath, inFolderName }) => {
    await executeGenerationTask({
        panel,
        actionLabel: `Add Table Name`,
        inFolderName,
        toPath,
        generateFunc: runSync,
        tableName
    });
};

export default startFunc;
