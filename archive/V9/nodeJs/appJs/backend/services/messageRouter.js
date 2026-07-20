import startEndPointAction from "./actions/startEndPoint.js";

export async function handleWebviewMessage({ message, panel, toPath }) {

    switch (message.action) {
        case "startEndPoint":
            await startEndPointAction({
                panel,
                toPath,
                inFolderName: message.inFolderName
            });
            break;
    }
}
