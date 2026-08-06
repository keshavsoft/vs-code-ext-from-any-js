import runSync from 'template-provider';
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
