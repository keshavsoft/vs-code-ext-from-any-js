export async function executeGenerationTask({
    panel,
    actionLabel,
    tableName,
    toPath,
    inTargetPath,
    generateFunc,
    inPort = 4000, inFolderName,
    actionName
}) {
    panel.webview.postMessage({
        type: "status",
        text: "⏳ Generating CRUD..."
    });

    try {
        const fromNpm = await generateFunc({
            showLog: true,
            isAnnounce: true,
            toPath,
            tableName,
            inTargetPath,
            inGenerateRest: true,
            inPort, inFolderName
        });
        // console.log("fromNpm : ", fromNpm);

        if (fromNpm && (fromNpm?.importResult?.found || fromNpm?.useResult?.found)) {

            panel.webview.postMessage({
                type: "complete",
                error: true,
                actionName,
                errorMessage: fromNpm.KReason || "An error occurred during generation."
            });

            return;
        };

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
            type: "complete",
            error: true,
            actionName,
            errorMessage: error.message
        });
    }
}
