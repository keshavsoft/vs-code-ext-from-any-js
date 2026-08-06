import loadSchemas from "./messageRouter/loadSchemas.js";
import loadEndPoints from "./messageRouter/loadEndPoints.js";
import showAllJson from "./messageRouter/showAllJson.js";
import openFile from "./messageRouter/openFile.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath, inTargetPath }) {
    switch (message.action) {
        case "loadSchemas":
            loadSchemas({ panel, inTargetPath });
            break;

        case "loadEndPoints":
            loadEndPoints({ panel, inTargetPath });
            break;

        case "showAllJson":
            showAllJson({ message, panel, toPath, schemasPath, inTargetPath });
            break;

        case "openFile":
            await openFile({ message });
            break;
    }
}
