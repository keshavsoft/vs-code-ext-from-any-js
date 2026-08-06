export function showError(text) {
    const statusDiv = document.getElementById("status");
    if (!statusDiv) return;
    statusDiv.classList.remove("hidden", "border-violet-500/20", "bg-violet-500/5", "text-violet-300");
    statusDiv.classList.add("border-rose-500/20", "bg-rose-500/5", "text-rose-400");
    statusDiv.innerHTML = `<span class="flex items-center gap-2">⚠️ <span>${text}</span></span>`;
}
