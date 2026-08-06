import * as vscode from 'vscode';

export default async function openFile({ message }) {
    if (message.filePath) {
        try {
            const document = await vscode.workspace.openTextDocument(
                vscode.Uri.file(message.filePath)
            );
            await vscode.window.showTextDocument(document);
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to open file: ${error.message}`);
        }
    }
}
