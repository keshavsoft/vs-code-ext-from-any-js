import * as vscode from 'vscode';

import readHtml from './routesJs/backend/readHtml.js';

const registerAllCommands = (context) => {
    // 2. Register new Webview command (AddTableNameHtml)
    const commandHtml = 'extension.editor.title.routesjs.addTableNameHtml';
    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => readHtml(context, uri));
    context.subscriptions.push(showHtml);
};

export default registerAllCommands;
