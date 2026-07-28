import * as vscode from 'vscode';

export async function executeGenerationTask({
    panel,
    actionLabel,
    tableName,
    toPath,
    configPath,
    generateFunc,
    inFolderName,
    inTargetPath,
    inPort
}) {
    panel.webview.postMessage({
        type: "status",
        text: "⏳ Generating CRUD..."
    });

    try {
        await generateFunc({
            showLog: true,
            isAnnounce: true,
            toPath,
            tableName,
            toConfigPath: configPath,
            inGenerateRest: true,
            inTargetPath,
            inFolderName: inFolderName || "",
            inPort
        });

        panel.webview.postMessage({
            type: "complete",
            html: `
                <div class="font-semibold mb-2">
                    ✅ Generation Complete
                </div>
                <div><b>Action:</b> ${actionLabel}</div>
                ${tableName ? `<div><b>Table:</b> ${tableName}</div>` : ""}
                <div><b>Output:</b> ${toPath}</div>
            `
        });
    } catch (error) {
        panel.webview.postMessage({
            type: "status",
            text: `❌ Generation failed: ${error.message}`
        });
    }
}
