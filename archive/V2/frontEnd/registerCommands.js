import * as vscode from 'vscode';

import readHtml from './addListeners/backend/readHtml.js';

const registerAllCommands = (context) => {
    // 2. Register new Webview command (AddTableNameHtml)
    const commandHtml = "extension.editor.title.frontend.addListeners.addHtmlId";


    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => readHtml(context, uri));
    
    context.subscriptions.push(showHtml);
};

export default registerAllCommands;
