import getEndPoints from "../endPointsService.js";

export default function loadEndPoints({ panel, inTargetPath }) {
    const endPoints = getEndPoints({ inTargetPath });

    panel.webview.postMessage({
        type: "endPoints",
        endPoints
    });
}
