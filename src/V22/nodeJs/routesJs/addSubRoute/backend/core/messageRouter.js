import loadSchemasAction from "./messageRouter/loadSchemas.js";
import addSubRoute from "./messageRouter/addSubRoute.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath,
    port, inTargetPath }) {

    switch (message.action) {
        case "loadSchemas":
            loadSchemasAction({ panel, schemasPath, toPath });
            break;

        case "addTableName":
            await addSubRoute({ message, panel, toPath, schemasPath, inTargetPath, port });
            break;
    }
}
