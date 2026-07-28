function getSelectedTable() {
    const tableSelect = document.getElementById("table-select");
    return tableSelect ? tableSelect.value : "";
}

function getSelectedEndPoint() {
    const endPointsSelect = document.getElementById("endPoints-select");
    return endPointsSelect ? endPointsSelect.value : "";
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

const showAllJson = () => {
    const cmd = "showAllJson";
    sendAction(cmd, { 
        tableName: getSelectedTable(), 
        endPoint: getSelectedEndPoint(), 
        inFolderName: getFolderName(cmd) 
    });
};
