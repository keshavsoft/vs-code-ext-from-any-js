function showStatus(text) {
    const statusDiv = document.getElementById("status");
    if (!statusDiv) return;

    statusDiv.classList.remove("hidden");
    const isError = text.startsWith("❌") || text.toLowerCase().includes("failed") || text.toLowerCase().includes("error");
    
    if (!isError) {
        clearAllCardErrors();
    }
    
    // Dynamically adjust status styles based on state
    statusDiv.className = isError 
        ? "mt-8 rounded-2xl border border-red-500/30 bg-red-950/20 px-5 py-4 text-red-300 shadow-lg flex items-center space-x-3"
        : "mt-8 rounded-2xl border border-blue-500/30 bg-blue-950/20 px-5 py-4 text-blue-300 shadow-lg flex items-center space-x-3 animate-pulse";
    
    statusDiv.innerHTML = `
        ${isError ? `
            <svg class="h-5 w-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
        ` : `
            <svg class="animate-spin h-5 w-5 text-blue-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        `}
        <span class="font-medium text-sm ${isError ? 'text-red-200' : 'text-blue-200'}">${text}</span>
    `;
}

function showSummary(html, isError = false) {
    const summaryDiv = document.getElementById("summary");
    if (!summaryDiv) return;
    summaryDiv.classList.remove("hidden");
    
    // Dynamically adjust summary styles based on success/error state
    summaryDiv.className = isError
        ? "mt-8 rounded-2xl border border-red-500/30 bg-red-950/20 p-6 shadow-lg text-sm text-red-300 space-y-2.5 relative overflow-hidden"
        : "mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6 shadow-lg text-sm text-gray-300 space-y-2.5 relative overflow-hidden";
        
    summaryDiv.innerHTML = html;
}

function completeStatus(html, isError = false, actionName = "", errorMessage = "") {
    const statusDiv = document.getElementById("status");
    if (statusDiv) {
        statusDiv.classList.add("hidden");
    }
    
    if (isError) {
        const summaryDiv = document.getElementById("summary");
        if (summaryDiv) {
            summaryDiv.classList.add("hidden");
        }
        showCardError(actionName, errorMessage);
    } else {
        clearAllCardErrors();
        showSummary(html, false);
    }
}

function showCardError(actionName, errorMessage) {
    clearAllCardErrors();
    if (!actionName) return;
    
    const button = document.querySelector(`button[onclick^="${actionName}"]`);
    if (!button) return;
    
    // Highlight the card border as red
    button.classList.add("border-red-500/50", "ring-2", "ring-red-500/20");
    button.classList.remove("hover:border-indigo-500/70", "hover:border-sky-500/70", "hover:border-emerald-500/70", "hover:border-amber-500/70", "hover:border-rose-500/70");
    
    // Add error block below the description text
    const h3 = button.querySelector("h3");
    if (!h3 || !h3.parentNode) return;
    const container = h3.parentNode;
    
    const errDiv = document.createElement("div");
    errDiv.className = "card-error-msg mt-3 pt-2.5 border-t border-red-500/20 text-xs text-red-400 font-medium flex items-center space-x-1.5 animate-pulse";
    errDiv.innerHTML = `
        <svg class="h-3.5 w-3.5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        <span>${errorMessage}</span>
    `;
    container.appendChild(errDiv);
}

function clearAllCardErrors() {
    document.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("border-red-500/50", "ring-2", "ring-red-500/20");
        const onclickAttr = btn.getAttribute("onclick") || "";
        
        // Restore corresponding hover border colors based on click actions
        if (onclickAttr.includes("showAll") || onclickAttr.includes("distinct") || onclickAttr.includes("count")) {
            btn.classList.add("hover:border-indigo-500/70");
        } else if (onclickAttr.includes("find") || onclickAttr.includes("min")) {
            btn.classList.add("hover:border-sky-500/70");
        } else if (onclickAttr.includes("filterQuery") || onclickAttr.includes("max")) {
            btn.classList.add("hover:border-emerald-500/70");
        } else if (onclickAttr.includes("lastRecord")) {
            btn.classList.add("hover:border-amber-500/70");
        } else if (onclickAttr.includes("firstRecord")) {
            btn.classList.add("hover:border-rose-500/70");
        }
        
        const errDiv = btn.querySelector(".card-error-msg");
        if (errDiv) {
            errDiv.remove();
        }
    });
}
