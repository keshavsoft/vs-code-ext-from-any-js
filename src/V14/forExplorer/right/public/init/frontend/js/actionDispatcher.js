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

function insertSimple() {
    sendAction("simple", { tableName: getSelectedTable(), inFolderName: getFolderName(getSelectedTable()) });
};

function insertCrud() {
    sendAction("crud", { tableName: getSelectedTable(), inFolderName: getFolderName(getSelectedTable()) });
};
