function showStatus(text) {
    const statusDiv = document.getElementById("status");
    statusDiv.classList.remove("hidden", "border-red-600/30", "bg-red-500/10", "text-red-400");
    statusDiv.classList.add("border-blue-600/30", "bg-blue-500/10", "text-blue-300");
    statusDiv.innerHTML = text;
}

function showError(text) {
    const statusDiv = document.getElementById("status");
    statusDiv.classList.remove("hidden", "border-blue-600/30", "bg-blue-500/10", "text-blue-300");
    statusDiv.classList.add("border-red-600/30", "bg-red-500/10", "text-red-400");
    statusDiv.innerHTML = `⚠️ ${text}`;
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
