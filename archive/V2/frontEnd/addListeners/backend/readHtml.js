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

const findIndexHtmlFolder = (startDir) => {
    let currentDir = path.resolve(startDir);
    while (currentDir) {
        const indexPath = path.join(currentDir, 'index.html');
        if (fs.existsSync(indexPath)) {
            return currentDir;
        }
        const parentDir = path.dirname(currentDir);
        if (parentDir === currentDir) {
            break;
        }
        currentDir = parentDir;
    }
    return null;
};

const extractIdsFromIndexHtml = (startDir) => {
    const htmlDir = findIndexHtmlFolder(startDir);
    if (!htmlDir) {
        return [];
    }
    const indexPath = path.join(htmlDir, 'index.html');
    try {
        const htmlContent = fs.readFileSync(indexPath, "utf8");
        const idRegex = /id\s*=\s*["']([^"']+)["']/gi;
        const ids = [];
        let match;
        while ((match = idRegex.exec(htmlContent)) !== null) {
            ids.push(match[1]);
        }
        return Array.from(new Set(ids));
    } catch (error) {
        return [];
    }
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
        const resolvedPath = findIndexHtmlFolder(folderPath);
        const ids = extractIdsFromIndexHtml(folderPath);

        await handleWebviewMessage({
            message,
            panel,
            toPath: resolvedPath,
            schemasPath,
            port,
            inTargetPath: userRootFolder,
            ids
        });
    });
};

export default activateHtml;

