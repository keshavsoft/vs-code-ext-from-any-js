import { sendAction } from "./vscodeApi.js";
import { showStatus, showSummary, completeStatus } from "./uiNotifier.js";
import { tableSelect, endPointsSelect, folderDatalist } from "./htmlElements.js";
import { createSchemaOptions, createEndpointOptions } from "./optionCreator.js";
import { showAllJson } from "./actionDispatcher.js";

// Expose handlers to global scope for HTML inline bindings
window.showAllJson = showAllJson;
window.openFile = (filePath) => {
    sendAction("openFile", { filePath });
};
window.switchTab = (event, tabId) => {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => {
        content.classList.add("hidden");
    });

    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.classList.remove("hidden");
    }

    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
        btn.classList.remove("bg-blue-600", "text-white");
        btn.classList.add("text-gray-400", "hover:text-white", "hover:bg-gray-800");
    });

    const currentBtn = event.currentTarget;
    currentBtn.classList.remove("text-gray-400", "hover:text-white", "hover:bg-gray-800");
    currentBtn.classList.add("bg-blue-600", "text-white");
};

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
