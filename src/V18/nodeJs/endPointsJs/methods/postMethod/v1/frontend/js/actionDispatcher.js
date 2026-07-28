function getNewFolderName(inActionName) {
    const input = document.getElementById("folder-name");
    return input ? (input.value.trim() === "" ? inActionName : input.value.trim()) : "";
}

function showAll() {
    sendAction("showAll", { newFolderName: getNewFolderName() });
}

function find() {
    sendAction("find", { newFolderName: getNewFolderName() });
}

function filterQuery() {
    sendAction("filterQuery", { newFolderName: getNewFolderName() });
};

function lastRecord() {
    sendAction("lastRecord", { newFolderName: getNewFolderName() });
};

function firstRecord() {
    sendAction("firstRecord", { newFolderName: getNewFolderName() });
};

function distinct() {
    const actionName = "distinct";

    sendAction(actionName, { newFolderName: getNewFolderName(actionName) });
};

function count() {
    const actionName = "count";

    sendAction(actionName, { newFolderName: getNewFolderName(actionName) });
};

function min() {
    sendAction("min", { newFolderName: getNewFolderName() });
};

function max() {
    sendAction("max", { newFolderName: getNewFolderName() });
};
