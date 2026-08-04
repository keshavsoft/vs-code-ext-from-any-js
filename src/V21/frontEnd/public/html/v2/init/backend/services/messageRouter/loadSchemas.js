import { getSchemaFiles } from "../schemaService.js";

export default function loadSchemas({ panel, inTargetPath }) {
    const schemas = getSchemaFiles(inTargetPath);

    panel.webview.postMessage({
        type: "schemas",
        schemas
    });
}
