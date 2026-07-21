window.addEventListener("message", ({ data }) => {
    if (data.type === "status") {
        showStatus(data.text);
    }
    if (data.type === "summary") {
        showSummary(data.html);
    }
    if (data.type === "complete") {
        completeStatus(data.html);
    };

    if (data.type === "showFolders") {
        window.foldersAlreadyPresentList = data.foldersAlreadyPresent || [];

        const container = document.getElementById("folders-list-container");

        if (container) {

            container.innerHTML = "";

            if (data.foldersAlreadyPresent && data.foldersAlreadyPresent.length > 0) {

                data.foldersAlreadyPresent.forEach(loopFolder => {
                    const div = document.createElement("div");
                    div.className = "flex items-center gap-2 px-3 py-2 bg-[#1e1e1e] border border-gray-800 rounded-lg text-xs font-mono text-gray-300 hover:border-gray-600 transition-colors truncate";

                    const icon = document.createElement("span");
                    icon.className = "text-blue-400 flex-shrink-0";
                    icon.textContent = "📊";

                    const name = document.createElement("span");
                    name.className = "font-mono font-medium truncate";
                    name.textContent = loopFolder.folderName;
                    name.title = loopFolder.folderName;

                    div.appendChild(icon);
                    div.appendChild(name);
                    container.appendChild(div);
                });
            } else {
                const div = document.createElement("div");
                div.className = "col-span-full text-xs text-gray-500 italic p-2.5 bg-[#1e1e1e] rounded-lg border border-gray-800 flex items-center gap-2";

                const icon = document.createElement("span");
                icon.textContent = "📊";

                const text = document.createElement("span");
                text.textContent = "-- No Apis present --";

                div.appendChild(icon);
                div.appendChild(text);
                container.appendChild(div);
            };
        };

        const select = document.getElementById("table-select");

        if (select) {
            select.innerHTML = "";
            if (data.schemas && data.schemas.length > 0) {
                data.schemas.forEach(schema => {
                    const option = document.createElement("option");
                    option.value = schema.tableName;
                    option.textContent = `${schema.tableName} (${schema.name})`;
                    select.appendChild(option);
                });

                // Auto fill folder input with the first loaded table name if empty
                const folderInput = document.getElementById("folder-name");
                if (folderInput && !folderInput.value.trim()) {
                    folderInput.value = select.value;
                }
            } else {
                const option = document.createElement("option");
                option.value = "";
                option.textContent = "-- No Tables Found --";
                select.appendChild(option);
            }
        };

    };

    // if (data.type === "showFolders") {
    //     const select = document.getElementById("folder-select");
    //     if (select) {
    //         select.innerHTML = "";
    //         if (data.foldersAlreadyPresent && data.foldersAlreadyPresent.length > 0) {
    //             data.foldersAlreadyPresent.forEach(schema => {
    //                 const option = document.createElement("option");
    //                 option.value = schema.folderName ;
    //                 option.textContent = `${schema.folderName } (${schema.variable })`;
    //                 select.appendChild(option);
    //             });

    //             // // Auto fill folder input with the first loaded table name if empty
    //             // const folderInput = document.getElementById("folder-name");
    //             // if (folderInput && !folderInput.value.trim()) {
    //             //     folderInput.value = select.value;
    //             // }
    //         } else {
    //             const option = document.createElement("option");
    //             option.value = "";
    //             option.textContent = "-- No Tables Found --";
    //             select.appendChild(option);
    //         }
    //     }
    // };
});

// Setup dropdown change listener to auto-populate folder name
const select = document.getElementById("table-select");
const folderInput = document.getElementById("folder-name");
if (select && folderInput) {
    select.addEventListener("change", () => {
        folderInput.value = select.value;
    });
}

// Load schemas on initialization
sendAction("loadSchemas");
