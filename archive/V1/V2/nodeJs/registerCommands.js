import * as vscode from 'vscode';

import routesJs from './routesJs/backend/readHtml.js';
import appJs from './appJs/backend/readHtml.js';

const routesJsCommands = (context) => {
    // 2. Register new Webview command (AddTableNameHtml)
    const commandHtml = 'extension.editor.title.routesjs.addTableNameHtml';
    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => routesJs(context, uri));
    context.subscriptions.push(showHtml);
};

const appJsCommands = (context) => {
    // 2. Register new Webview command (AddTableNameHtml)
    const commandHtml = 'extension.editor.title.routesjs.addTableNameHtml';
    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => appJs(context, uri));
    context.subscriptions.push(showHtml);
};

const registerAllCommands = (context) => {
    routesJsCommands(context);
    appJsCommands(context);
};

export default registerAllCommands;
