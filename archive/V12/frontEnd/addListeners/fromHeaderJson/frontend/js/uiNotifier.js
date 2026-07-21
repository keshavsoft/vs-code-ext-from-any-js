function showStatus(text) {
    const statusDiv = document.getElementById("status");
    statusDiv.classList.remove("hidden");
    statusDiv.innerHTML = text;
}

function showSummary(html) {
    const summaryDiv = document.getElementById("summary");
    summaryDiv.classList.remove("hidden");
    summaryDiv.innerHTML = html;
}

function completeStatus(html) {
    const statusDiv = document.getElementById("status");
    statusDiv.classList.add("hidden");
    showSummary(html);
}
