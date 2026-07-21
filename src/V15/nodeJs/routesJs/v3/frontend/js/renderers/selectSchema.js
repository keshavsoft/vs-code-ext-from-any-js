import { renderBlueprintPreview } from "./blueprintPreview.js";

export function selectSchema(schema, schemasList) {
    schemasList.forEach(s => {
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
