export async function executeGenerationTask({
    panel,
    actionLabel,
    tableName,
    toPath,
    generateFunc,
    inFolderName
}) {
    panel.webview.postMessage({
        type: "status",
        text: "⏳ Generating Endpoints..."
    });

    try {
        const funcToRun = generateFunc({
            showLog: true,
            isAnnounce: true,
            folderName: inFolderName || "",
            toPath
        });

        // await funcToRun({
        //     showLog: true,
        //     isAnnounce: true,
        //     folderName: inFolderName || "",
        //     toPath
        // });

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
