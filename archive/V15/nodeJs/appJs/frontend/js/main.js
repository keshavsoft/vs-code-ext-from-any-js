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
        window.apisPresentList = data.apisPresent || [];
        const container = document.getElementById("apis-list-container");
        if (container) {
            container.innerHTML = "";
            if (data.apisPresent && data.apisPresent.length > 0) {
                data.apisPresent.forEach(apiName => {
                    const div = document.createElement("div");
                    div.className = "flex items-center gap-2 px-3 py-2 bg-[#1e1e1e] border border-gray-800 rounded-lg text-xs font-mono text-gray-300 hover:border-gray-600 transition-colors truncate";
                    
                    const icon = document.createElement("span");
                    icon.className = "text-blue-400 flex-shrink-0";
                    icon.textContent = "📊";
                    
                    const name = document.createElement("span");
                    name.className = "font-mono font-medium truncate";
                    name.textContent = apiName;
                    name.title = apiName;
                    
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
    };
});

// Load Apis on initialization
sendAction("loadApis");