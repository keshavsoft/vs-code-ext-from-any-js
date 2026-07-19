import startEndPointAction from "./actions/startEndPoint.js";
import getApisFromNpm from "./getApisFromNpm.js";

export async function handleWebviewMessage({ message, panel, toPath,
    activeEditorContect
}) {

    switch (message.action) {
        case "loadApis":

            const apisPresent = getApisFromNpm(activeEditorContect);
            // const schemas = getSchemaFiles(activeEditorContect);

            panel.webview.postMessage({
                type: "apis",
                apisPresent
            });
            break;

        case "startEndPoint":
            await startEndPointAction({
                panel,
                toPath,
                inFolderName: message.inFolderName
            });
            break;
    }
}
