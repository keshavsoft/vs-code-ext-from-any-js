import * as vscode from 'vscode';

import postMethod from './methods/postMethod/v2/backend/readHtml.js';
import getMethod from './methods/getMethod/v2/backend/readHtml.js';

const postMethodCommands = (context) => {
    const commandHtml = "extension.editor.title.backend.endpointsjs.methods.post";

    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => postMethod(context, uri));
    context.subscriptions.push(showHtml);
};

const getMethodCommands = (context) => {
    const commandHtml = "extension.editor.title.backend.endpointsjs.methods.get";
    // "command": "extension.editor.title.backend.endpointsjs.methods.get",

    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => getMethod(context, uri));

    context.subscriptions.push(showHtml);
};

const registerAllCommands = (context) => {
    postMethodCommands(context);
    getMethodCommands(context);
};

export default registerAllCommands;
