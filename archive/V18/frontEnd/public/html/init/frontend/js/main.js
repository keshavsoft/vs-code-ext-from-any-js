import { sendAction } from "./vscodeApi.js";
import { showStatus, showSummary, completeStatus } from "./uiNotifier.js";
import { tableSelect, endPointsSelect, folderDatalist } from "./htmlElements.js";
import { createSchemaOptions, createEndpointOptions } from "./optionCreator.js";
import { showAllJson } from "./actionDispatcher.js";

// Expose handlers to global scope for HTML inline bindings
window.showAllJson = showAllJson;

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

    if (data.type === "schemas") {
        if (tableSelect) {
            tableSelect.innerHTML = "";
            const options = createSchemaOptions(data.schemas);
            options.forEach(option => tableSelect.appendChild(option));
        }
        if (folderDatalist) {
            folderDatalist.innerHTML = "";
            const options = createSchemaOptions(data.schemas);
            options.forEach(option => folderDatalist.appendChild(option));
        }
    }

    if (data.type === "endPoints") {
        if (endPointsSelect) {
            endPointsSelect.innerHTML = "";
            const options = createEndpointOptions(data.endPoints);
            options.forEach(option => endPointsSelect.appendChild(option));
        }
    }
});

// Load schemas on initialization
sendAction("loadSchemas");
sendAction("loadEndPoints");
