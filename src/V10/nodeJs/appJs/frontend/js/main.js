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

    if (data.type === "apis") {
        const select = document.getElementById("table-select");
        if (select) {
            select.innerHTML = "";
            if (data.apisPresent && data.apisPresent.length > 0) {
                data.apisPresent.forEach(apiName => {
                    const option = document.createElement("option");
                    option.value = apiName;
                    option.textContent = apiName;
                    select.appendChild(option);
                });
            } else {
                const option = document.createElement("option");
                option.value = "";
                option.textContent = "-- No Tables Found --";
                select.appendChild(option);
            };
        };
    };
});

// Load Apis on initialization
sendAction("loadApis");