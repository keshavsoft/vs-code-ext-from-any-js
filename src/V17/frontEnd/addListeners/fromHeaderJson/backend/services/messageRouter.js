import addTableNameAction from "./actions/addTableName.js";

export async function handleWebviewMessage({ message, panel, toPath,
    port, inTargetPath, ids = [] }) {

    switch (message.action) {
        case "loadSchemas":
            panel.webview.postMessage({
                type: "schemas",
                ids
            });

            break;

        case "addHtmlId":
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
