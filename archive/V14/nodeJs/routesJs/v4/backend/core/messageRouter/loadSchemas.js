import { getSchemaFiles } from "../../forge/schemaScanner.js";
import getFolders from "../../forge/routeScanner.js";

export default function loadSchemas({ panel, schemasPath, toPath }) {
    const schemas = getSchemaFiles(schemasPath);
    const foldersAlreadyPresent = getFolders(toPath);

    panel.webview.postMessage({
        type: "showFolders",
        foldersAlreadyPresent,
        schemas
    });
}
