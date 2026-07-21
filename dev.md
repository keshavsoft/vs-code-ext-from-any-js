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

---

# 🚀 Publishing to VS Code Marketplace

Follow these steps to package and publish the extension:

## 1. Create a Personal Access Token (PAT) in Azure DevOps
1. Go to [Azure DevOps](https://dev.azure.com/keshavsoftindia) and sign in.
2. In the top-right corner, click on the **User settings** icon (looks like a person with a gear: 👤⚙️) to the left of your profile picture.
3. Select **Personal access tokens** from the dropdown menu.
4. Click **+ New Token**.
5. Configure the token details:
   - **Name**: e.g., `VSCE Publisher`
   - **Organization**: Select **All accessible organizations** (required).
   - **Scopes**: Choose **Custom defined**, click **Show all scopes**, find **Marketplace**, and check **Publish** (and **Acquire and manage**).
6. Click **Create** and **copy the token immediately** (it will not be shown again).

## 2. Add Secret to GitHub
1. Go to your GitHub repository: `keshavsoft/vs-code-ext-from-any-js`.
2. Go to **Settings** -> **Secrets and variables** -> **Actions**.
3. Click **New repository secret**.
4. Name: `VSCE_PAT`
5. Value: *Paste the PAT you copied from Azure DevOps*
6. Click **Add secret**.

## 3. Run the Publish Workflow
The publishing workflow is located in `.github/workflows/publish.yml`.
- It triggers automatically whenever a new version tag (matching `v*` like `v1.14.5`) is pushed to the repository.
- It can also be run manually from the **Actions** tab in your GitHub repository.