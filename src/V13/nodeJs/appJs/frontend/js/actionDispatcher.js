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
    const folderName = getFolderName() || "startEndPoint";
    const existingFolders = window.apisPresentList || [];
    if (existingFolders.includes(folderName)) {
        showError(`Folder "${folderName}" already exists! Please enter a different folder name.`);
        return;
    }
    sendAction("startEndPoint", { inFolderName: folderName });
}
