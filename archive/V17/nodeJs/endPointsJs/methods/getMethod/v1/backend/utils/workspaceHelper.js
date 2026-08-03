import * as vscode from 'vscode';
import path from 'path';

import { getPort, getSchemasPath } from 'kschema-fs-read-config';

export function getWorkspaceContext(uri) {
    const userRootFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    const schemasPath = getSchemasPath(userRootFolder);
    const folderPath = path.dirname(uri.fsPath);
    // const port = getPortFromEnv(userRootFolder);
    const port = getPort(userRootFolder);

    return {
        userRootFolder,
        schemasPath,
        folderPath,
        port
    };
}
