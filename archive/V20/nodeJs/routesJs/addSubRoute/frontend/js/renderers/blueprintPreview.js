export function renderBlueprintPreview(schema) {
    const previewContainer = document.getElementById("blueprint-preview-container");
    if (!previewContainer) return;

    previewContainer.classList.remove("hidden");
    
    const titleEl = document.getElementById("blueprint-title");
    if (titleEl) titleEl.textContent = schema.tableName;
    
    const countEl = document.getElementById("blueprint-columns-count");
    if (countEl) {
        const count = schema.columns ? schema.columns.length : 0;
        countEl.textContent = `${count} field${count === 1 ? '' : 's'} parsed`;
    }

    const columnsList = document.getElementById("blueprint-columns-list");
    if (!columnsList) return;

    columnsList.innerHTML = "";
    
    if (schema.columns && schema.columns.length > 0) {
        schema.columns.forEach(col => {
            const pill = document.createElement("span");
            pill.className = "inline-flex items-center px-2.5 py-1 rounded bg-slate-800/60 text-slate-300 font-mono text-[10px] border border-slate-700/60 hover:bg-slate-700/40 hover:text-slate-100 transition-colors";
            pill.textContent = col;
            columnsList.appendChild(pill);
        });
    } else {
        columnsList.innerHTML = `<span class="text-xs italic text-slate-500">No columns or properties extracted.</span>`;
    }
}
