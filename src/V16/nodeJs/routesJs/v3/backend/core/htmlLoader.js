import * as vscode from 'vscode';
import fs from 'fs';
import path from 'path';

export function getHtmlWithScripts(webview) {
    const frontendDir = path.join(import.meta.dirname, "..", "..", "frontend");
    let html = fs.readFileSync(path.join(frontendDir, "index.html"), "utf8");

    // Convert the local JS folder to a webview URI
    const jsDirUri = webview.asWebviewUri(vscode.Uri.file(path.join(frontendDir, "js")));
    
    // Define the entry point module path
    const mainUri = `${jsDirUri}/forgeController.js`;

    const scriptTag = `<script type="module" src="${mainUri}"></script>`;

    if (html.includes("<!-- SCRIPTS -->")) {
        html = html.replace("<!-- SCRIPTS -->", scriptTag);
    } else {
        html = html.replace("</body>", `${scriptTag}\n</body>`);
    }

    return html;
}
