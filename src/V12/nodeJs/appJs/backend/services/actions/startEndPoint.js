import { runSync } from 'kschema-api-gen-appjs';
import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, toPath, inFolderName }) => {
    await executeGenerationTask({
        panel,
        actionLabel: `Add ${inFolderName}`,
        inFolderName,
        toPath,
        generateFunc: runSync
    });
};

export default startFunc;
