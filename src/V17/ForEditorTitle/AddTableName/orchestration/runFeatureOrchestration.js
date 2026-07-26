import fs from 'fs';
import path from 'path';

import * as vscode from 'vscode';

import addTableName from "kschema-api-gen-endpointsjs";

import { fileURLToPath } from 'url';

async function getFolderAndTable() {
    const input = await vscode.window.showInputBox({
        prompt: "Enter FolderName and TableName",
        placeHolder: "Users Tasks"
    });

    if (!input) return null;

    const clean = input.trim();

    const separators = [' ', '.', ':'];

    let folderName = null;
    let tableName = null;

    for (const sep of separators) {
        if (clean.includes(sep)) {
            const parts = clean.split(sep).map(p => p.trim()).filter(Boolean);

            if (parts.length >= 2) {
                folderName = parts[0];
                tableName = parts[1];
                break;
            }
        }
    }

    // 👉 If only one value → use same for both
    if (!folderName) {
        folderName = clean;
        tableName = clean;
    }

    // sanitize
    folderName = folderName.replace(/[^a-zA-Z0-9_]/g, '');
    tableName = tableName.replace(/[^a-zA-Z0-9_]/g, '');

    return {
        folderName,
        tableName
    };
};

export async function runFeatureOrchestration({ context }) {
    const { folderName, tableName } = await getFolderAndTable();
    // const endpoint = await getEndpoint();

    // fix inside localContext
    const localContext = {
        ...context,
        endpointFolder: path.join(context.targetPath, folderName),
        routeFilePath: path.join(context.targetPath, folderName),
        templatePath: fileURLToPath(new URL('../templates/Base', import.meta.url))
    };

    const funcToRun = await addTableName();

    await funcToRun({
        showLog: true,
        isAnnounce: true,
        folderName,
        toPath: localContext.targetPath,
        tableName
    });

    return { folderName };
}
// update only this
async function getEndpoint() {
    const value = await vscode.window.showInputBox({ prompt: 'Enter endpoint name (e.g. users)' });
    if (!value) return null;

    const clean = value.trim().replace(/[^a-zA-Z0-9-_]/g, '');
    if (!clean) return null;

    return clean;
};