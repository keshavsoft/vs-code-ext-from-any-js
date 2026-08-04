import addTableNameAction from "./actions/addTableName.js";

export async function handleWebviewMessage({ message, panel, toPath,
    port, inTargetPath, ids = [] }) {
    switch (message.action) {
        case "loadSchemas":
            const schemas = ids.map(id => ({
                tableName: id,
                name: id
            }));
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
            
                inFolderName: message.inFolderName,
                inTargetPath,
                inPort: port
            });
            break;
    }
}
