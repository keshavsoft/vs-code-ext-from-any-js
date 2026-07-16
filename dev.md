# dev.md — Developer Guide 🚀

# Developer Guide — vs-code-ext-express-api-gen-endpoints

## Overview

This extension automatically creates Express.js endpoint folders and configures table-based endpoint structures.

Main functionality focuses on:

* Endpoint folder generation
* Table name configuration
* end-points.js generation
* Express modular architecture

---

# ⚡ Extension Workflow

---

# Step 1 — Run Extension

Press:

| Shortcut | Purpose                           |
| -------- | --------------------------------- |
| `F5`     | Launch Extension Development Host |

---

# Step 2 — Open Project

Open Express.js project inside VS Code.

---

# Step 3 — Use Title Bar Action

Click:

```bash
AddTableName
```

---

# Step 4 — Popup Input

Developer enters table name.

Example:

```bash
Orders
```

---

# Step 5 — Generated Output

Extension creates:

```bash
Orders/
└── end-points.js
```

---

# 🚀 Generated File Example

```js
const TableName = "Orders";
```

---

# 📁 Important Files

| File            | Purpose                      |
| --------------- | ---------------------------- |
| `extension.js`  | Main extension logic         |
| `end-points.js` | Generated endpoint file      |
| `package.json`  | VS Code command registration |
| `README.md`     | User documentation           |
| `dev.md`        | Developer guide              |

---

# ⚡ Developer Shortcuts

| Shortcut           | Purpose         |
| ------------------ | --------------- |
| `F5`               | Run extension   |
| `Ctrl + Shift + P` | Command palette |
| `Ctrl + R`         | Reload VS Code  |
| `Ctrl + ``         | Open terminal   |

---

# 🧠 Developer Notes

* Prevent duplicate folder creation
* Validate existing endpoint files
* Keep generated structure modular
* Preserve developer-written code
* Maintain Express.js standards

---

# 🧪 Testing Workflow

## Install Dependencies

```bash
npm install
```

---

## Run Extension

```bash
npm run start
```

---

## Validate Output

Check:

* Folder generation
* Table name insertion
* `end-points.js` creation
* Duplicate prevention

---

# 🚀 Future Improvements

Planned features:

* CRUD endpoint generation
* Middleware injection
* Dynamic templates
* AI-assisted endpoint generation
* TypeScript support

---

# 👨‍💻 Maintainer

Developed by **KeshavSoft**