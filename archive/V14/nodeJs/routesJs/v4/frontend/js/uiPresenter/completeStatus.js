import { showSummary } from "./showSummary.js";

export function completeStatus(html) {
    const statusDiv = document.getElementById("status");
    if (statusDiv) statusDiv.classList.add("hidden");
    showSummary(html);
}
