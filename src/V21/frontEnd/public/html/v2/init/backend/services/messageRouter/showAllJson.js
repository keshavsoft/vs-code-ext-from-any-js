import generate from "./showAllJson/generate.js";
import formatHtml from "./showAllJson/formatHtml.js";

export default function showAllJson({ message, panel, toPath, schemasPath, inTargetPath }) {
    panel.webview.postMessage({
        type: "status",
        text: "⏳ Generating showAll.json configurations..."
    });

    try {
        const fromShowAllJsonAction = generate({
            message,
            toPath,
            schemasPath,
            inTargetPath
        });

        const html = formatHtml({
            message,
            fromShowAllJsonAction
        });

        panel.webview.postMessage({
            type: "complete",
            html
        });
    } catch (error) {
        panel.webview.postMessage({
            type: "status",
            text: `❌ Generation failed: ${error.message}`
        });
    }
}
