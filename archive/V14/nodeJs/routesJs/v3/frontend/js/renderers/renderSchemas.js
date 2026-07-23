export function renderSchemas(schemas, onSelect) {
    const container = document.getElementById("schemas-list-container");
    if (!container) return;

    container.innerHTML = "";

    if (schemas && schemas.length > 0) {
        schemas.forEach(schema => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "w-full text-left p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 hover:border-violet-500/50 hover:bg-slate-800/40 transition-all duration-300 flex items-center justify-between group cursor-pointer focus:outline-none";
            card.id = `schema-card-${schema.tableName}`;
            
            card.addEventListener("click", () => onSelect(schema));

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
    } else {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center p-6 text-slate-500 bg-slate-900/20 rounded-xl border border-dashed border-slate-800">
                <span class="text-2xl mb-1">📂</span>
                <span class="text-xs italic">No schema blueprints found in Config/Schemas</span>
            </div>
        `;
    }
}
