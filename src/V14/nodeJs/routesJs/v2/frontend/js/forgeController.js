import { sendAction } from "./vscodeBridge.js";
import { showStatus, showError, showSummary, completeStatus, clearTerminal, appendTerminalLog } from "./uiPresenter.js";
import { triggerForgeProcess, addTableName } from "./forgeActions.js";

// Expose handlers to global scope for HTML inline bindings
window.triggerForgeProcess = triggerForgeProcess;
window.addTableName = addTableName;

window.selectedTableName = "";
window.schemasList = [];

window.addEventListener("message", ({ data }) => {
    if (data.type === "status") {
        showStatus(data.text);
    }
    if (data.type === "summary") {
        showSummary(data.html);
    }
    if (data.type === "complete") {
        completeStatus(data.html);
    }
    if (data.type === "log") {
        appendTerminalLog(data.text, data.logType);
    }
    if (data.type === "startGeneration") {
        clearTerminal();
        const statusDiv = document.getElementById("status");
        if (statusDiv) statusDiv.classList.add("hidden");
    }

    if (data.type === "showFolders") {
        window.foldersAlreadyPresentList = data.foldersAlreadyPresent || [];
        window.schemasList = data.schemas || [];
        
        renderFolders();
        renderSchemas();
    }
});

function renderFolders() {
    const container = document.getElementById("folders-list-container");
    if (!container) return;

    container.innerHTML = "";
    const list = window.foldersAlreadyPresentList;

    if (list && list.length > 0) {
        list.forEach(loopFolder => {
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

function renderSchemas() {
    const container = document.getElementById("schemas-list-container");
    if (!container) return;

    container.innerHTML = "";
    const schemas = window.schemasList;

    if (schemas && schemas.length > 0) {
        schemas.forEach(schema => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "w-full text-left p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/50 hover:bg-slate-800/40 transition-all duration-300 flex items-center justify-between group cursor-pointer focus:outline-none";
            card.id = `schema-card-${schema.tableName}`;
            
            card.addEventListener("click", () => selectSchema(schema));

            const left = document.createElement("div");
            left.className = "flex items-center gap-3 truncate";

            const icon = document.createElement("div");
            icon.className = "w-8 h-8 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-600/20 transition-colors flex-shrink-0 border border-violet-500/10";
            icon.textContent = "📊";

            const details = document.createElement("div");
            details.className = "flex flex-col gap-0.5 truncate";

            const name = document.createElement("span");
            name.className = "font-medium text-xs text-slate-200 group-hover:text-violet-300 transition-colors truncate";
            name.textContent = schema.tableName;

            const sub = document.createElement("span");
            sub.className = "text-[10px] text-slate-500 font-mono truncate";
            sub.textContent = schema.name;

            details.appendChild(name);
            details.appendChild(sub);
            left.appendChild(icon);
            left.appendChild(details);

            const arrow = document.createElement("span");
            arrow.className = "text-slate-600 group-hover:text-violet-400 transition-colors text-xs font-bold";
            arrow.textContent = "→";

            card.appendChild(left);
            card.appendChild(arrow);
            container.appendChild(card);
        });
        
        if (!window.selectedTableName) {
            selectSchema(schemas[0]);
        }
    } else {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center p-6 text-slate-500 bg-slate-900/20 rounded-xl border border-dashed border-slate-800">
                <span class="text-2xl mb-1">📂</span>
                <span class="text-xs italic">No schema blueprints found in Config/Schemas</span>
            </div>
        `;
    }
}

function selectSchema(schema) {
    window.schemasList.forEach(s => {
        const c = document.getElementById(`schema-card-${s.tableName}`);
        if (c) {
            c.classList.remove("border-violet-500", "bg-violet-950/20", "ring-1", "ring-violet-500/30");
            c.classList.add("border-slate-800/80", "bg-slate-900/40");
        }
    });

    const activeCard = document.getElementById(`schema-card-${schema.tableName}`);
    if (activeCard) {
        activeCard.classList.remove("border-slate-800/80", "bg-slate-900/40");
        activeCard.classList.add("border-violet-500", "bg-violet-950/20", "ring-1", "ring-violet-500/30");
    }

    window.selectedTableName = schema.tableName;

    const folderInput = document.getElementById("folder-name");
    if (folderInput) {
        folderInput.value = schema.tableName;
    }

    renderBlueprintPreview(schema);
}

function renderBlueprintPreview(schema) {
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

sendAction("loadSchemas");
