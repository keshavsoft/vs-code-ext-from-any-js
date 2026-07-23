export function showStatus(text) {
    const statusDiv = document.getElementById("status");
    if (!statusDiv) return;
    statusDiv.classList.remove("hidden", "border-rose-500/20", "bg-rose-500/5", "text-rose-400");
    statusDiv.classList.add("border-violet-500/20", "bg-violet-500/5", "text-violet-300");
    statusDiv.innerHTML = `<span class="flex items-center gap-2">🔮 <span>${text}</span></span>`;
}

export function showError(text) {
    const statusDiv = document.getElementById("status");
    if (!statusDiv) return;
    statusDiv.classList.remove("hidden", "border-violet-500/20", "bg-violet-500/5", "text-violet-300");
    statusDiv.classList.add("border-rose-500/20", "bg-rose-500/5", "text-rose-400");
    statusDiv.innerHTML = `<span class="flex items-center gap-2">⚠️ <span>${text}</span></span>`;
}

export function showSummary(html) {
    const summaryDiv = document.getElementById("summary");
    if (!summaryDiv) return;
    summaryDiv.classList.remove("hidden");
    summaryDiv.innerHTML = html;
    summaryDiv.scrollIntoView({ behavior: 'smooth' });
}

export function completeStatus(html) {
    const statusDiv = document.getElementById("status");
    if (statusDiv) statusDiv.classList.add("hidden");
    showSummary(html);
}

export function clearTerminal() {
    const terminalBody = document.getElementById("terminal-body");
    if (terminalBody) {
        terminalBody.innerHTML = "";
    }
}

export function appendTerminalLog(text, type = "info") {
    const terminalBody = document.getElementById("terminal-body");
    if (!terminalBody) return;

    const line = document.createElement("div");
    line.className = "flex items-start gap-2 py-1 border-b border-slate-800/40 text-xs font-mono transition-opacity duration-300";

    const timestamp = document.createElement("span");
    timestamp.className = "text-slate-500 select-none flex-shrink-0";
    const now = new Date();
    timestamp.textContent = `[${now.toTimeString().split(' ')[0]}]`;

    const icon = document.createElement("span");
    icon.className = "flex-shrink-0";
    
    let colorClass = "text-slate-300";
    if (type === "success") {
        icon.textContent = "✔";
        colorClass = "text-emerald-400 font-semibold";
    } else if (type === "warning") {
        icon.textContent = "⚠";
        colorClass = "text-amber-400";
    } else if (type === "error") {
        icon.textContent = "✘";
        colorClass = "text-rose-400 font-bold";
    } else {
        icon.textContent = "ℹ";
        colorClass = "text-cyan-400";
    }

    const message = document.createElement("span");
    message.className = colorClass;
    message.textContent = text;

    line.appendChild(timestamp);
    line.appendChild(icon);
    line.appendChild(message);
    
    terminalBody.appendChild(line);
    
    const terminalContainer = document.getElementById("terminal-container");
    if (terminalContainer) {
        terminalContainer.scrollTop = terminalContainer.scrollHeight;
    }
}
