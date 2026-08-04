import * as vscode from 'vscode';

import { getHtmlWithScripts } from "./core/htmlLoader.js";
import { handleWebviewMessage } from "./core/messageRouter.js";
import { getWorkspaceContext } from "./core/workspaceHelper.js";

const activateHtml = (context, uri) => {
    const panel = vscode.window.createWebviewPanel(
        "showHtml",
        "Show Html",
        vscode.ViewColumn.One,
        { enableScripts: true }
    );

    panel.webview.html = getHtmlWithScripts(panel.webview);

    panel.webview.onDidReceiveMessage(async (message) => {
        const { userRootFolder, schemasPath, folderPath, port } = getWorkspaceContext(uri);

        await handleWebviewMessage({
            message,
            panel,
            toPath: folderPath,
            schemasPath,
            port,
            inTargetPath: userRootFolder
        });
    });
};

export default activateHtml;
