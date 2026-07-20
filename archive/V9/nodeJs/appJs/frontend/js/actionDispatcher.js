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

function startEndPointAction() {
    sendAction("startEndPoint", { inFolderName: getFolderName() });
}
