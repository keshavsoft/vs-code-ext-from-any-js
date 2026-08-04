export function renderFolders(foldersList) {
    const container = document.getElementById("folders-list-container");
    if (!container) return;

    container.innerHTML = "";

    if (foldersList && foldersList.length > 0) {
        foldersList.forEach(loopFolder => {
            const card = document.createElement("div");
            card.className = "group relative flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/50 hover:bg-slate-800/40 transition-all duration-300";

            const info = document.createElement("div");
            info.className = "flex flex-col gap-0.5 truncate";

            const name = document.createElement("span");
            name.className = "font-mono font-medium text-xs text-slate-200 truncate";
            name.textContent = loopFolder.folderName;
            name.title = loopFolder.folderName;

            const sub = document.createElement("span");
            sub.className = "text-[10px] text-slate-500 font-mono";
            sub.textContent = `router as ${loopFolder.variable || 'router'}`;

            info.appendChild(name);
            info.appendChild(sub);

            const badge = document.createElement("span");
            badge.className = "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
            badge.textContent = "active";

            card.appendChild(info);
            card.appendChild(badge);
            container.appendChild(card);
        });
    } else {
        container.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center p-6 text-slate-500 bg-slate-900/20 rounded-xl border border-dashed border-slate-800">
                <span class="text-2xl mb-1">📭</span>
                <span class="text-xs italic">No existing API nodes found in routes.js</span>
            </div>
        `;
    }
}
