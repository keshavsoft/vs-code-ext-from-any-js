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

    if (data.type === "schemas") {
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
            } else {
                const option = document.createElement("option");
                option.value = "";
                option.textContent = "-- No Tables Found --";
                select.appendChild(option);
            }
        }
    };

    if (data.type === "endPoints") {
        const select = document.getElementById("endPoints-select");
        if (select) {
            select.innerHTML = "";
            if (data.endPoints && data.endPoints.length > 0) {
                data.endPoints.forEach(endpoint => {
                    const option = document.createElement("option");
                    option.value = endpoint;
                    option.textContent = endpoint;
                    select.appendChild(option);
                });
            } else {
                const option = document.createElement("option");
                option.value = "";
                option.textContent = "-- No Endpoints Found --";
                select.appendChild(option);
            }
        }
    }
});

// Load schemas on initialization
sendAction("loadSchemas");
sendAction("loadEndPoints");
