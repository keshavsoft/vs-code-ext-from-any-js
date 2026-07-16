import * as vscode from 'vscode';
import { registerAllCommands as ForEditorTitle } from './ForEditorTitle/registerCommands.js';
import nodeJs from './nodeJs/registerCommands.js';
import frontEnd from './frontEnd/registerCommands.js';

export function registerAllCommands(context) {
    // 1. Register old InputBox command (AddTableName)
    ForEditorTitle(context);

    nodeJs(context);
    frontEnd(context);
};
