import * as vscode from 'vscode';
import fs from 'fs';
import path from 'path';

import { getHtmlWithScripts } from "./utils/htmlLoader.js";
import { handleWebviewMessage } from "./services/messageRouter.js";
import { getWorkspaceContext } from "./utils/workspaceHelper.js";

const findHtmlFolder = (startDir) => {
    let currentDir = path.resolve(startDir);
    while (currentDir) {
        const indexPath = path.join(currentDir, 'index.html');
        if (fs.existsSync(indexPath)) {
            return currentDir;
        }
        try {
            const files = fs.readdirSync(currentDir);
            const hasHtml = files.some(file => file.toLowerCase().endsWith('.html'));
            if (hasHtml) {
                return currentDir;
            }
        } catch (error) {
            // Ignore directory read errors
        }
        const parentDir = path.dirname(currentDir);
        if (parentDir === currentDir) {
            break;
        }
        currentDir = parentDir;
    }
    return null;
};

const findHeadersJsonPath = (startDir) => {
    let currentDir = path.resolve(startDir);

    while (currentDir) {
        const headersJsonPath = path.join(currentDir, 'headers.json');
        if (fs.existsSync(headersJsonPath)) {
            return currentDir;
        }
        const parentDir = path.dirname(currentDir);
        if (parentDir === currentDir) {
            break;
        }
        currentDir = parentDir;
    };

    return null;
};

const extractIdsFromJson = (inJsonPath) => {
    const headersJsonPath = path.join(inJsonPath, 'headers.json');

    try {
        const rawData = fs.readFileSync(headersJsonPath, 'utf8');
        const jsonData = JSON.parse(rawData);

        const idArray = jsonData.items.map(element => {
            return element.id;
        });

        return idArray;
    } catch (error) {
        console.error('Error:', error);
    };
};

const activateHtml = (context, uri) => {
    const panel = vscode.window.createWebviewPanel(
        "showHtml",
        "Show Html",
        vscode.ViewColumn.One,
        { enableScripts: true }
    );

    panel.webview.html = getHtmlWithScripts();

    panel.webview.onDidReceiveMessage(async (message) => {
        const { userRootFolder, schemasPath, folderPath, port } = getWorkspaceContext(uri);
        const headersJsonPath = findHeadersJsonPath(folderPath);
        const ids = extractIdsFromJson(headersJsonPath);

        await handleWebviewMessage({
            message,
            panel,
            toPath: folderPath,
            port,
            inTargetPath: userRootFolder,
            ids
        });
    });
};

export default activateHtml;

