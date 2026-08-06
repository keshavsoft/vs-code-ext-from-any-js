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

function insertGenPk() {
    sendAction("insertGenPk", { tableName: getSelectedTable(), inFolderName: getFolderName("insertGenPk") });
}

function find() {
    sendAction("filter", { tableName: getSelectedTable(), inFolderName: getFolderName("find") });
}

function filterQuery() {
    sendAction("filterQuery", { tableName: getSelectedTable(), inFolderName: getFolderName("filterQuery") });
};

const groupBy = () => {
    sendAction("groupBy", { tableName: getSelectedTable(), inFolderName: getFolderName("groupBy") });
};

const insertWithMeta = () => {
    const cmd = "insertWithMeta";
    sendAction(cmd, { tableName: getSelectedTable(), inFolderName: getFolderName(cmd) });
};
