# 🗒️ Change Log

All notable changes to the **vs-code-ext-from-any-js** extension are documented below.

## 🚀 [1.14.3] - The Get

get tested with ui

---

## 🚀 [1.14.2] - The Endpoint Forge
> **Release Date:** July 21, 2026
>
> A major backend restructuring and frontend visual overhaul. Re-imagined the routes generation process as a narrative-driven "Endpoint Forge" dashboard with real-time feedback and modular code patterns.

### ✨ Added
- **Blueprint Column Previews**: Parse schemas to dynamically list database table fields inside the UI.
- **Cyberpunk Forge Console**: Interactive, timestamped, color-coded logging system to display real-time creation progress.
- **Visual Nodes Map**: Styled grids to check active routes inside `routes.js`.

### 🛠️ Refactored
- **Orchestration Architecture**: Split files to ensure controllers and routers only contain top-level orchestration, delegating logic to micro-modules.
- **Browser-Native ES Modules**: Converted the frontend JS to use native `import`/`export` loading via VS Code webview URIs.
- **Core & Forge Separation**: Grouped backend scripts into `backend/core/` (message-routing/utilities) and `backend/forge/` (generation engine/scanners).

### 🧹 Cleaned
- Removed deprecated UI variants (`indexV1.html`, `indexV2.html`) and obsolete controller scripts.

---

## ⚡ [1.9.2]
- Hooked `app.js` start endpoint generation pipelines.

---

## 🔗 [1.7.1]
- Integrated `endpointsjs` code generators.

---

## 📦 [1.4.1]
- Support for dual-name tables schema resolution.

---

## 🎯 [1.0.0]
- Initial release with basic folder scanning and endpoint hooking.