export function showSummary(html) {
    const summaryDiv = document.getElementById("summary");
    if (!summaryDiv) return;
    summaryDiv.classList.remove("hidden");
    summaryDiv.innerHTML = html;
    summaryDiv.scrollIntoView({ behavior: 'smooth' });
}
