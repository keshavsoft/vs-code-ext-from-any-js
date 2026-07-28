import { sendAction } from "./vscodeApi.js";
import { tableSelect, endPointsSelect, folderNameInput } from "./htmlElements.js";

export function getSelectedTable() {
    return tableSelect ? tableSelect.value : "";
}

export function getSelectedEndPoint() {
    return endPointsSelect ? endPointsSelect.value : "";
}

export function getFolderName(defaultValue = "") {
    if (folderNameInput) {
        let val = folderNameInput.value.trim();
        if (!val && defaultValue) {
            folderNameInput.value = defaultValue;
            val = defaultValue;
        }
        return val;
    }
    return "";
}

export const showAllJson = () => {
    const cmd = "showAllJson";
    sendAction(cmd, { 
        tableName: getSelectedTable(), 
        endPoint: getSelectedEndPoint(), 
        inFolderName: getFolderName(cmd) 
    });
};
