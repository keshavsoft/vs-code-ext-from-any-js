import { groupBy } from 'kschema-fs-api-gen-post-actions';

import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, toPath, schemasPath, inFolderName,
    inTargetPath, inPort
}) => {
    await executeGenerationTask({
        panel,
        actionLabel: "With Header",
        tableName,
        toPath,
        configPath: schemasPath,
        generateFunc: groupBy,
        inFolderName, inTargetPath, inPort
    });
};

export default startFunc;
