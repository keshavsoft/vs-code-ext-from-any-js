import * as vscode from 'vscode';

import fromHtml from './fromHtml/backend/readHtml.js';
import fromHeaderJson from './fromHeaderJson/backend/readHtml.js';

const fromHtmlCommands = (context) => {
    const commandHtml = "extension.editor.title.frontend.addListeners.addHtmlId";

    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => fromHtml(context, uri));

    context.subscriptions.push(showHtml);
};

const fromHeaderJsonCommands = (context) => {
    const commandHtml = "extension.editor.title.frontend.addListeners.headerItem";

    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => fromHeaderJson(context, uri));

    context.subscriptions.push(showHtml);
};

const registerAllCommands = (context) => {
    fromHtmlCommands(context);
    fromHeaderJsonCommands(context);
};

export default registerAllCommands;
