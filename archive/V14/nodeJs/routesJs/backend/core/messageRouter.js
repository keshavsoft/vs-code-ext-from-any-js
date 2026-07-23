import loadSchemasAction from "./messageRouter/loadSchemas.js";
import addTableNameAction from "./messageRouter/addTableName.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath,
    port, inTargetPath }) {

    switch (message.action) {
        case "loadSchemas":
            loadSchemasAction({ panel, schemasPath, toPath });
            break;

        case "addTableName":
            await addTableNameAction({ message, panel, toPath, schemasPath, inTargetPath, port });
            break;
    }
}
