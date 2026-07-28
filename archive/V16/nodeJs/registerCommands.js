import * as vscode from 'vscode';

import routesJs from './routesJs/backend/readHtml.js';
import appJs from './appJs/backend/readHtml.js';
// import endPointsJs from './endPointsJs/methods/postMethod/v1/backend/readHtml.js';
import endPointsJs from './endPointsJs/registerCommands.js';

const routesJsCommands = (context) => {
    // 2. Register new Webview command (AddTableNameHtml)
    const commandHtml = 'extension.editor.title.routesjs.addTableNameHtml';
    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => routesJs(context, uri));
    context.subscriptions.push(showHtml);
};

const appJsCommands = (context) => {
    const commandHtml = "extension.editor.title.backend.appjs.start";
    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => appJs(context, uri));
    context.subscriptions.push(showHtml);
};

const endPointsJsCommands = (context) => {
    const commandHtml = "extension.editor.title.backend.endpointsjs.methods.post";
    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => endPointsJs(context, uri));
    context.subscriptions.push(showHtml);
};

const registerAllCommands = (context) => {
    routesJsCommands(context);
    appJsCommands(context);
    endPointsJs(context);
};

export default registerAllCommands;
