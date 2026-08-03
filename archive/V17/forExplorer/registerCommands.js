import * as vscode from 'vscode';

import right from './right/public/init/backend/readHtml.js';

const rightCommands = (context) => {
    const commandHtml = "extension.explorer.right.public.init";

    const rightCommands = vscode.commands.registerCommand(commandHtml, (uri) => right(context, uri));
    context.subscriptions.push(rightCommands);
};

const registerAllCommands = (context) => {
    rightCommands(context);
};

export default registerAllCommands;
