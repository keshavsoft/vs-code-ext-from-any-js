import * as vscode from 'vscode';

export async function executeGenerationTask({
    panel,
    actionLabel,
    tableName,
    toPath,
    generateFunc,
    inFolderName
}) {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const postLog = (text, type = "info") => {
        panel.webview.postMessage({
            type: "log",
            text,
            logType: type
        });
    };

    try {
        panel.webview.postMessage({ type: "startGeneration" });

        postLog("🌌 Initializing the Endpoint Forge...", "info");
        await sleep(300);

        postLog(`📜 Reading the blueprint schema for: "${tableName}"`, "info");
        await sleep(250);

        postLog("🛡️ Validating routing pathways and target directories...", "info");
        await sleep(200);

        postLog("🔥 Igniting the endpoint generator template engine...", "warning");
        await sleep(200);

        postLog("⚙️ Generating HTTP handlers (GET, POST, PUT, DELETE)...", "info");
        const funcToRun = await generateFunc();

        await funcToRun({
            showLog: true,
            isAnnounce: true,
            folderName: inFolderName || "",
            toPath,
            tableName
        });
        await sleep(350);

        postLog("🧪 Integrating routes.js imports and configurations...", "info");
        await sleep(300);

        postLog("✨ Polishing generated code and formatting files...", "info");
        await sleep(250);

        postLog("💖 Endpoint successfully materialized!", "success");
        await sleep(200);

        panel.webview.postMessage({
            type: "complete",
            html: `
                <div class="space-y-3">
                    <div class="flex items-center gap-2 text-green-400 font-semibold text-lg">
                        <span class="animate-bounce">✨</span>
                        <span>Endpoint Forged Successfully!</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-sm bg-slate-900/60 p-3 rounded-lg border border-slate-700 font-mono">
                        <div class="text-gray-400">Blueprint:</div>
                        <div class="text-indigo-300 font-medium truncate">${tableName}</div>
                        <div class="text-gray-400">Target Folder:</div>
                        <div class="text-indigo-300 font-medium truncate">${inFolderName}</div>
                        <div class="text-gray-400">Destination Path:</div>
                        <div class="text-indigo-300 font-medium truncate" title="${toPath}">${toPath}</div>
                    </div>
                </div>
            `
        });
    } catch (error) {
        postLog(`🚨 Forge failed: ${error.message}`, "error");
        panel.webview.postMessage({
            type: "status",
            text: `❌ Generation failed: ${error.message}`
        });
    }
}
