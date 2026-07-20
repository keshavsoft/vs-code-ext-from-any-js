function getSelectedTable() {
    const tableSelect = document.getElementById("table-select");
    return tableSelect ? tableSelect.value : "";
}

function getFolderName(defaultValue = "") {
    const folderInput = document.getElementById("folder-name");
    if (folderInput) {
        let val = folderInput.value.trim();
        if (!val && defaultValue) {
            folderInput.value = defaultValue;
            val = defaultValue;
        }
        return val;
    }
    return "";
}

function addTableName() {
    debugger;
    const folderName = getFolderName() || "startEndPoint";
    const existingFolders = window.foldersAlreadyPresentList || [];

    if (existingFolders.includes(folderName)) {
        showError(`Folder "${folderName}" already exists! Please enter a different folder name.`);
        return;
    };

    sendAction("addTableName", { tableName: getSelectedTable(), inFolderName: folderName });
};

function startEndPointAction() {
    const folderName = getFolderName() || "startEndPoint";
    const existingFolders = window.apisPresentList || [];
    if (existingFolders.includes(folderName)) {
        showError(`Folder "${folderName}" already exists! Please enter a different folder name.`);
        return;
    }
    sendAction("startEndPoint", { inFolderName: folderName });
};
