import { fromScriptJs } from 'json-crud-ui-init';
import { executeGenerationTask } from "../generatorService.js";

const startFunc = ({ panel, toPath, inFolderName }) => {
    executeGenerationTask({
        panel,
        actionLabel: "Add Crud boilerPlate",
        toPath,
        generateFunc: fromScriptJs.crud,
        inFolderName
    });
};

export default startFunc;
