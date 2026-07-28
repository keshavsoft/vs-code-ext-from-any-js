import findAction from "./actions/find.js";
import insertGenPkAction from "./actions/insertGenPk.js";
import filterQueryAction from "./actions/filterQuery.js";
import groupByAction from "./actions/groupBy.js";
import insertWithMetaAction from "./actions/insertWithMeta.js";

import { getSchemaFiles } from "./schemaService.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath,
    port, inTargetPath }) {
    switch (message.action) {
        case "loadSchemas":

            const schemas = getSchemaFiles(inTargetPath);

            panel.webview.postMessage({
                type: "schemas",
                schemas
            });
            break;

        case "insertGenPk":
            await insertGenPkAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath,
                inFolderName: message.inFolderName,
                inTargetPath,
                inPort: port
            });
            break;

        case "filter":
            await findAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath,
                inFolderName: message.inFolderName
            });
            break;

        case "filterQuery":
            await filterQueryAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath,
                inFolderName: message.inFolderName
            });
            break;

        case "groupBy":
            await groupByAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath,
                inFolderName: message.inFolderName,
                inTargetPath,
                inPort: port
            });
            break;

        case "insertWithMeta":
            await insertWithMetaAction({
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
};
