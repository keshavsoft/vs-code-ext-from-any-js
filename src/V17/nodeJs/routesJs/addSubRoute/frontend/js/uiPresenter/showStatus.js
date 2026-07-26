export function showStatus(text) {
    const statusDiv = document.getElementById("status");
    if (!statusDiv) return;
    statusDiv.classList.remove("hidden", "border-rose-500/20", "bg-rose-500/5", "text-rose-400");
    statusDiv.classList.add("border-violet-500/20", "bg-violet-500/5", "text-violet-300");
    statusDiv.innerHTML = `<span class="flex items-center gap-2">🔮 <span>${text}</span></span>`;
}
