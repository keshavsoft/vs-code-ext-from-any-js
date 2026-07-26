const vscode = acquireVsCodeApi();

export function sendAction(action, data = {}) {
    vscode.postMessage({ action, ...data });
}
