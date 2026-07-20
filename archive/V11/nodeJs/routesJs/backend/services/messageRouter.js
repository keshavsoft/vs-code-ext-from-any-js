import addTableNameAction from "./actions/addTableName.js";
import { getSchemaFiles } from "./schemaService.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath,
    port, inTargetPath }) {
    switch (message.action) {
        case "loadSchemas":
            const schemas = getSchemaFiles(schemasPath);
            panel.webview.postMessage({
                type: "schemas",
                schemas
            });
            break;

        case "addTableName":
            await addTableNameAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath,
                inFolderName: message.inFolderName,
                inTargetPath,
                inPort: port
            });
            break;
    }
}
