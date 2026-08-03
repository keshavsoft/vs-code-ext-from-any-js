import * as vscode from 'vscode';

import addTableName from './addTableName/backend/readHtml.js';

const routesJsCommands = (context) => {
    const commandHtml = 'extension.editor.title.routesjs.addTableNameHtml';
    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => addTableName(context, uri));
    context.subscriptions.push(showHtml);
};

const registerAllCommands = (context) => {
    routesJsCommands(context);
};

export default registerAllCommands;
