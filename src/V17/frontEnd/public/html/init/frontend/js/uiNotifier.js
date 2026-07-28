import { statusDiv, summaryDiv } from "./htmlElements.js";

export function showStatus(text) {
    if (statusDiv) {
        statusDiv.classList.remove("hidden");
        statusDiv.innerHTML = text;
    }
}

export function showSummary(html) {
    if (summaryDiv) {
        summaryDiv.classList.remove("hidden");
        summaryDiv.innerHTML = html;
    }
}

export function completeStatus(html) {
    if (statusDiv) {
        statusDiv.classList.add("hidden");
    }
    showSummary(html);
}
