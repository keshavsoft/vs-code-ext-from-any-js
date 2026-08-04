import forgeEndpointAction from "../forge/actions/forgeEndpoint.js";
import { getSchemaFiles } from "../forge/schemaScanner.js";
import getFolders from "../forge/routeScanner.js";

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
            await forgeEndpointAction({
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
