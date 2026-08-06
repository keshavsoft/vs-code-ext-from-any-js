import * as vscode from 'vscode';

import appJs from './appJs/backend/readHtml.js';
import endPointsJs from './endPointsJs/registerCommands.js';
import routesJsCommands from './routesJs/registerCommands.js';

const appJsCommands = (context) => {
    const commandHtml = "extension.editor.title.backend.appjs.start";
    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => appJs(context, uri));
    context.subscriptions.push(showHtml);
};

const registerAllCommands = (context) => {
    routesJsCommands(context);
    appJsCommands(context);
    endPointsJs(context);
};

export default registerAllCommands;
