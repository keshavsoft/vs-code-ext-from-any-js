import fs from "fs";

import * as vscode from 'vscode';
import path from 'path';

export function getWorkspaceContext(uri) {
    const userRootFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    const folderPath = path.dirname(uri.fsPath);

    const activeEditorContect = fs.readFileSync(uri.fsPath, "utf8");

    return {
        userRootFolder,
        folderPath,
        activeEditorContect
    };
}
