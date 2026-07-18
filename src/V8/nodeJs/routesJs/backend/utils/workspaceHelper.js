import * as vscode from 'vscode';
import path from 'path';
import fs from 'fs';

export function getPortFromEnv(userRootFolder) {
    if (!userRootFolder) return undefined;
    const envPath = path.join(userRootFolder, ".env");
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, "utf8");
        const match = envContent.match(/^PORT\s*=\s*(.+)$/m);
        if (match) {
            return match[1].trim();
        }
    }
    return undefined;
}

export function getWorkspaceContext(uri) {
    const userRootFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    const schemasPath = userRootFolder ? path.join(userRootFolder, "Config", "Schemas") : undefined;
    const folderPath = path.dirname(uri.fsPath);
    const port = getPortFromEnv(userRootFolder);

    return {
        userRootFolder,
        schemasPath,
        folderPath,
        port
    };
}
