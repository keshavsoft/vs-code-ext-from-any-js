window.addEventListener("message", ({ data }) => {
    if (data.type === "status") {
        showStatus(data.text);
    }
    if (data.type === "summary") {
        showSummary(data.html);
    }
    if (data.type === "complete") {
        completeStatus(data.html, data.error, data.actionName, data.errorMessage);
    }
});

// Load schemas on initialization
// sendAction("loadSchemas");
