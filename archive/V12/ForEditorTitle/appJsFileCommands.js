import * as vscode from 'vscode';

import addTableNameCommand from './AddTableName/start.js';

export function registerAllCommands(context) {
    const command = 'extension.editor.title.routesjs.addTableName';

    const CreateEndpoint = vscode.commands.registerCommand(command, addTableNameCommand(context));

    context.subscriptions.push(CreateEndpoint);
};