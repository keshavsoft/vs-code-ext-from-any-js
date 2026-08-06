import { sendAction } from "./vscodeApi.js";
import { tableSelect, createEndpointSelect, readEndpointSelect, updateEndpointSelect, deleteEndpointSelect } from "./htmlElements.js";

export function getSelectedTable() {
    return tableSelect ? tableSelect.value : "";
}

export function getSelectedCreateEndPoint() {
    return createEndpointSelect ? createEndpointSelect.value : "";
}

export function getSelectedReadEndPoint() {
    return readEndpointSelect ? readEndpointSelect.value : "";
}

export function getSelectedUpdateEndPoint() {
    return updateEndpointSelect ? updateEndpointSelect.value : "";
}

export function getSelectedDeleteEndPoint() {
    return deleteEndpointSelect ? deleteEndpointSelect.value : "";
}

export const showAllJson = () => {
    const cmd = "showAllJson";
    sendAction(cmd, { 
        tableName: getSelectedTable(), 
        createEndPoint: getSelectedCreateEndPoint(),
        readEndPoint: getSelectedReadEndPoint(),
        updateEndPoint: getSelectedUpdateEndPoint(),
        deleteEndPoint: getSelectedDeleteEndPoint(),
        inFolderName: cmd
    });
};
