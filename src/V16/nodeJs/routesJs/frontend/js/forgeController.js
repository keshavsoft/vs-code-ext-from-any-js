import { sendAction } from "./vscodeBridge.js";
import { showStatus, showError, showSummary, completeStatus, clearTerminal, appendTerminalLog } from "./uiPresenter.js";
import { triggerForgeProcess, addTableName } from "./forgeActions.js";
import { renderFolders } from "./renderers/renderFolders.js";
import { renderSchemas } from "./renderers/renderSchemas.js";
import { selectSchema } from "./renderers/selectSchema.js";

// Expose handlers to global scope for HTML inline bindings
window.triggerForgeProcess = triggerForgeProcess;
window.addTableName = addTableName;

window.selectedTableName = "";
window.schemasList = [];

window.addEventListener("message", ({ data }) => {
    if (data.type === "status") {
        showStatus(data.text);
    }
    if (data.type === "summary") {
        showSummary(data.html);
    }
    if (data.type === "complete") {
        completeStatus(data.html);
    }
    if (data.type === "log") {
        appendTerminalLog(data.text, data.logType);
    }
    if (data.type === "startGeneration") {
        clearTerminal();
        const statusDiv = document.getElementById("status");
        if (statusDiv) statusDiv.classList.add("hidden");
    }

    if (data.type === "showFolders") {
        window.foldersAlreadyPresentList = data.foldersAlreadyPresent || [];
        window.schemasList = data.schemas || [];
        
        renderFolders(window.foldersAlreadyPresentList);
        renderSchemas(window.schemasList, handleSchemaSelect);
        
        if (window.schemasList.length > 0 && !window.selectedTableName) {
            handleSchemaSelect(window.schemasList[0]);
        }
    }
});

function handleSchemaSelect(schema) {
    selectSchema(schema, window.schemasList);
}

sendAction("loadSchemas");
