import { sendAction } from "./vscodeBridge.js";
import { showError, clearTerminal } from "./uiPresenter.js";

function getSelectedTableName() {
    return window.selectedTableName || "";
}

function getFolderName() {
    const folderInput = document.getElementById("folder-name");
    return folderInput ? folderInput.value.trim() : "";
}

export function triggerForgeProcess() {
    const tableName = getSelectedTableName();
    if (!tableName) {
        showError("Please select a blueprint schema first.");
        return;
    }

    let folderName = getFolderName();
    if (!folderName) {
        folderName = tableName;
        const folderInput = document.getElementById("folder-name");
        if (folderInput) folderInput.value = folderName;
    }

    const existingFolders = window.foldersAlreadyPresentList || [];
    const isExist = existingFolders.some(loopFolder => loopFolder.folderName === folderName);

    if (isExist) {
        showError(`Folder "${folderName}" already exists! Please enter a unique folder name.`);
        return;
    }

    const summaryDiv = document.getElementById("summary");
    if (summaryDiv) summaryDiv.classList.add("hidden");
    
    clearTerminal();
    
    const terminalContainer = document.getElementById("terminal-container");
    if (terminalContainer) terminalContainer.classList.remove("hidden");

    sendAction("addTableName", { tableName, inFolderName: folderName });
}

export function addTableName() {
    triggerForgeProcess();
}
