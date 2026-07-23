export function clearTerminal() {
    const terminalBody = document.getElementById("terminal-body");
    if (terminalBody) {
        terminalBody.innerHTML = "";
    }
}
