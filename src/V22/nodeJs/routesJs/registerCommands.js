import * as vscode from 'vscode';

import addTableName from './addTableName/backend/readHtml.js';
import addSubRoute from './addSubRoute/backend/readHtml.js';

const addTableNameCommand = (context) => {
    const commandHtml = 'extension.editor.title.routesjs.addTableNameHtml';
    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => addTableName(context, uri));
    context.subscriptions.push(showHtml);
};

const addSubRouteCommand = (context) => {
    const commandHtml = 'extension.editor.title.routesjs.addSubRoute';
    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => addSubRoute(context, uri));
    context.subscriptions.push(showHtml);
};

const registerAllCommands = (context) => {
    addTableNameCommand(context);
    addSubRouteCommand(context);
};

export default registerAllCommands;
