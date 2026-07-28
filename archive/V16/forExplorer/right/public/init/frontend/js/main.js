window.addEventListener("message", ({ data }) => {
    console.log("Received:", data);

    // if (data.type === "status") {
    //     showStatus(data.text);
    // }
    // if (data.type === "summary") {
    //     showSummary(data.html);
    // }
    // if (data.type === "complete") {
    //     completeStatus(data.html);
    // };

    if (data.type === "schemas") {
        // const select = document.getElementById("table-select");

        // if (select) {
        //     select.innerHTML = "";
        //     if (data.ids && data.ids.length > 0) {
        //         data.ids.forEach(loopId => {
        //             const option = document.createElement("option");
        //             option.value = loopId;
        //             option.textContent = loopId;
        //             select.appendChild(option);
        //         });

        //         // Auto fill folder input with the first loaded table name if empty
        //         const folderInput = document.getElementById("folder-name");
        //         if (folderInput && !folderInput.value.trim()) {
        //             folderInput.value = select.value;
        //         }
        //     } else {
        //         const option = document.createElement("option");
        //         option.value = "";
        //         option.textContent = "-- No ids found in headers.json --";
        //         select.appendChild(option);
        //     }
        // };
    };
});

// Setup dropdown change listener to auto-populate folder name
const select = document.getElementById("table-select");
const folderInput = document.getElementById("folder-name");
if (select && folderInput) {
    select.addEventListener("change", () => {
        folderInput.value = select.value;
    });
};

// Load schemas on initialization
sendAction("loadSchemas");
