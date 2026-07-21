import addTableNameAction from "./actions/addTableName.js";
import { getSchemaFiles } from "./schemaService.js";
import getFolders from "./getFoldersFromImport.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath,
    port, inTargetPath }) {

    switch (message.action) {
        case "loadSchemas":

            const schemas = getSchemaFiles(schemasPath);
            const foldersAlreadyPresent = getFolders(toPath);

            panel.webview.postMessage({
                type: "showFolders",
                foldersAlreadyPresent,
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
