const vscode = acquireVsCodeApi();

function sendAction(action, data = {}) {
    vscode.postMessage({ action, ...data });
}
