import showAllJsonAction from "./actions/showAllJson.js";

import { getSchemaFiles } from "./schemaService.js";
import getEndPoints from "./endPointsService.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath, inTargetPath }) {

    switch (message.action) {
        case "loadSchemas":

            const schemas = getSchemaFiles(inTargetPath);

            panel.webview.postMessage({
                type: "schemas",
                schemas
            });
            break;

        case "loadEndPoints":

            const endPoints = getEndPoints({ inTargetPath });

            panel.webview.postMessage({
                type: "endPoints",
                endPoints
            });
            break;
            
        case "showAllJson":

            const fromShowAllJsonAction = showAllJsonAction({
                inTableName: message.tableName,
                inEndPoint: message.endPoint,
                toPath, schemasPath, inTargetPath
            });

            break;
        // case "insertGenPk":
        //     await insertGenPkAction({
        //         panel,
        //         tableName: message.tableName,
        //         toPath,
        //         schemasPath,
        //         inFolderName: message.inFolderName,
        //         inTargetPath,
        //         inPort: port
        //     });
        //     break;

    }
};
