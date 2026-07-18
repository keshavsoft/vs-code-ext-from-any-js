import * as vscode from 'vscode';

import { getHtmlWithScripts } from "./utils/htmlLoader.js";
import { handleWebviewMessage } from "./services/messageRouter.js";
import { getWorkspaceContext } from "./utils/workspaceHelper.js";

const activateHtml = (context, uri) => {
    const panel = vscode.window.createWebviewPanel(
        "showHtml",
        "Show Html",
        vscode.ViewColumn.One,
        { enableScripts: true }
    );

    panel.webview.html = getHtmlWithScripts();

    panel.webview.onDidReceiveMessage(async (message) => {
        const { userRootFolder, folderPath } = getWorkspaceContext(uri);

        await handleWebviewMessage({
            message,
            panel,
            toPath: folderPath
        });
    });
};

export default activateHtml;
