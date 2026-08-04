import hookListener from 'kschema-ui-hook-add-listeners';
import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, toPath, inFolderName }) => {
    await executeGenerationTask({
        panel,
        actionLabel: "Add Table Name",
        tableName,
        toPath,
        generateFunc: hookListener,
        inFolderName
    });
};

export default startFunc;
