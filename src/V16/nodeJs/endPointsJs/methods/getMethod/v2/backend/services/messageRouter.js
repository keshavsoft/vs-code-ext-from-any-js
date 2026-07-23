import * as apiActions from "kschema-fs-api-gen-get-actions";
import { executeGenerationTask } from "./generatorService.js";

export async function handleWebviewMessage({
    message,
    panel,
    toPath,
    inTargetPath,
    inPort
}) {
    const { action } = message;
    const generateFunc = apiActions[action];

    if (typeof generateFunc !== "function") {
        panel.webview.postMessage({
            command: "error",
            message: `Unknown action: ${action}`
        });

        return;
    };

    await executeGenerationTask({
        panel,
        actionLabel: "With Header",
        tableName: message.tableName,
        toPath,
        inTargetPath,
        generateFunc,
        inPort,
        inFolderName: message.newFolderName,
        actionName: action
    });
}