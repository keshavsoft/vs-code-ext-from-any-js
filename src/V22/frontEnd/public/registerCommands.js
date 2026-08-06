import * as vscode from 'vscode';

// import fromHtml from './html/init/backend/readHtml.js';

import htmlCommands from './html/registerCommands.js';

const fromHtmlCommands = (context) => {
    const commandHtml = "extension.editor.title.frontend.public.html.init";

    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => fromHtml(context, uri));

    context.subscriptions.push(showHtml);
};

const registerAllCommands = (context) => {
    htmlCommands(context);
};

export default registerAllCommands;
