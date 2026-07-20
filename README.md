# 🚀 VS Code Express API Generator Endpoints

# backEnd 

A Visual Studio Code extension that helps you quickly generate **Express.js API structures**, **endpoint folders**, **routes**, and **table-based endpoint files** directly from the VS Code Title Bar.

No manual folder creation. No repetitive boilerplate.

---

# ✨ Features

- 🚀 Generate API folder structure
- 📁 Create custom API folders
- 🔗 Automatically connect generated routes to `app.js`
- 📄 Generate `routes.js`
- 📄 Generate `end-points.js`
- 🗂️ Create table-based endpoint folders
- 🎨 HTML-based UI for endpoint generation
- ⚡ VS Code Title Bar commands
- 💻 Beginner-friendly
- 🔧 Reduces repetitive backend setup

---

# 📋 Workflow

---

# Step 1 — Start Endpoint Generation

Open **app.js**

You'll see a new button in the VS Code Title Bar.

```
StartEndPoint
```

Click it.

---

## Result

A HTML page opens for endpoint generation.

---

# Step 2 — Create API Folder

The extension asks for a **New Folder Name**.

Example

```
Api
```

Click

```
StartEndPoint
```

---

## Automatically Generated

```
Project
│
├── Api
│   └── routes.js
│
├── app.js
│
└── ...
```

---

## app.js is automatically updated

The extension automatically connects the newly created route.

Example

```js
import setupRoutes from "./routes.js";

setupRoutes(app);
```

No manual editing required.

---

# Step 3 — Open routes.js

Open

```
Api/routes.js
```

Now you'll see two new commands in the VS Code Title Bar.

```
AddTableName
```

or

```
AddTableNameHtml
```

---

# Option 1 — AddTableName

Click

```
AddTableName
```

A VS Code Input Box appears.

Enter

```
FolderName:TableName
```

Example

```
Bills:Bills
```

---

## Result

The extension automatically creates

```
Api
│
├── Bills
│   └── end-points.js
│
└── routes.js
```

Generated file example

```js
const tableName = "Bills.json";
const tablePath = "Data/Bills.json";
const configPath = "Config/Schemas/Bills.json";

const router = express.Router();

export { router };
```

Everything is generated automatically.

---

# Option 2 — AddTableNameHtml

Instead of typing,

click

```
AddTableNameHtml
```

A HTML interface opens.

---

## Select

- Table Name
- Folder Name

Example

```
Table

Bills

Folder

Bills
```

Then click

```
addTableName
```

---

## Result

Exactly the same backend structure is generated automatically.

```
Api
│
├── Bills
│   └── end-points.js
│
└── routes.js
```

---

# 📁 Generated Folder Structure

```
Project
│
├── Api
│   ├── routes.js
│   │
│   ├── Bills
│   │     └── end-points.js
│   │
│   ├── Doctors
│   │     └── end-points.js
│   │
│   └── Users
│         └── end-points.js
│
├── Config
│   └── Schemas
│
├── Data
│
├── app.js
│
└── package.json
```

---

# ⚙️ Generated end-points.js

```js
import express from "express";

const tableName = "Bills.json";
const tablePath = "Data/Bills.json";
const configPath = "Config/Schemas/Bills.json";

const router = express.Router();

export { router };
```

---

# 🎯 Why Use This Extension?

Instead of manually creating

- folders
- routes
- endpoint files
- table configurations
- route connections

the extension generates everything in seconds.

Benefits

- ✅ Faster API development
- ✅ Standard project structure
- ✅ Less boilerplate code
- ✅ Better productivity
- ✅ Easy for beginners
- ✅ Consistent Express architecture

---

# 🛠 Commands

| Command | Description |
|----------|-------------|
| **StartEndPoint** | Creates a new API folder and connects it to `app.js` |
| **AddTableName** | Creates endpoint folder and `end-points.js` using VS Code Input Box |
| **AddTableNameHtml** | Creates endpoint folder and `end-points.js` using HTML UI |

---

# 💻 Technologies Used

- Node.js
- Express.js
- JavaScript
- HTML5
- CSS3
- VS Code Extension API

---

# 📦 Installation

Install from the VS Code Marketplace.

```
Extensions
↓

Search

VS Code Express API Generator Endpoints
```

---

# 📜 License

MIT License

---

# ⭐ Support

## GitHub

https://github.com/keshavsoft/vs-code-ext-express-api-gen-endpoints

---

## VS Code Marketplace

https://marketplace.visualstudio.com/items?itemName=KeshavSoft.vs-code-ext-express-api-gen-endpoints

---

# frontEnd


A Visual Studio Code extension that automatically generates frontend boilerplate code, HTML components, event listeners, and reusable UI modules directly from VS Code.

Build frontend projects faster by generating folders and files instead of creating them manually.

---

# ✨ Features

- 🚀 Generate frontend boilerplate
- 📁 Create project folders automatically
- 📄 Generate Simple Boilerplate
- 📄 Generate CRUD Boilerplate
- 🧩 Generate reusable HTML components
- 🎯 Generate HTML ID based modules
- ⚡ VS Code Title Bar integration
- 🎨 HTML-based UI
- 🔥 Beginner friendly
- 💻 Reduce repetitive coding

---

# 📋 Workflow

---

# Step 1 — Initialize Frontend Project

Right-click the **Public** folder.

You'll see a new context menu option.

```
InitFromScript
```

Click it.

---

## Result

A HTML page opens for frontend boilerplate generation.

---

# Step 2 — Create Project

Enter the project name.

Example

```
bills
```

You can also select a Schema file if available.

Then choose one of the following actions.

---

## Option 1 — insertSimple

Click

```
insertSimple
```

### Generated

Creates a simple frontend boilerplate.

Example

```
Public
│
└── bills
    ├── css
    ├── Index
    ├── script.js
    └── index.html
```

Suitable for lightweight frontend pages.

---

## Option 2 — insertCrud

Click

```
insertCrud
```

Creates a complete CRUD frontend.

CRUD includes

- Create
- Read
- Update
- Delete

Automatically generates all required folders and starter files.

Example

```
Public
│
└── bills
    ├── css
    ├── Common
    ├── CommonFuncs
    ├── Index
    ├── headers.json
    ├── buildHeader.js
    ├── index.html
    ├── script.js
    └── start.js
```

---

# Step 3 — Generate Listener Modules

Open

```
Public/bills/Index/FormLoad/DomContentLoaded/AddListeners/addListeners.js
```

Two commands appear in the VS Code Title Bar.

```
addHeaderItem
```

and

```
addHtmlId
```

---

# Option 1 — addHeaderItem

Click

```
addHeaderItem
```

A HTML page opens.

Select one of the available listener types.

Example

```
showAllHtmlId

crudHtmlId

verticalHtmlId
```

Then click

```
addHtmlId
```

---

## Result

Creates a new folder with helper files.

Example

```
showAllHtmlId
│
├── clickFunc.js
└── start.js
```

The generated module is automatically ready for integration.

---

# Option 2 — addHtmlId

Click

```
addHtmlId
```

The extension scans your HTML page and lists every available HTML ID.

Example

```
header

Username

Password

loginModal

loginButtonId

kSVerticalContainer
```

Choose any HTML ID.

Click

```
addTableName
```

---

## Result

A folder is automatically created.

Example

```
Username
│
├── clickFunc.js
└── start.js
```

Another example

```
Password
│
├── clickFunc.js
└── start.js
```

The folder is generated directly under the main project.

---

# 📁 Example Project Structure

```
Public
│
└── bills
    │
    ├── css
    │
    ├── Common
    │
    ├── CommonFuncs
    │
    ├── header
    │     ├── clickFunc.js
    │     └── start.js
    │
    ├── Username
    │     ├── clickFunc.js
    │     └── start.js
    │
    ├── Password
    │     ├── clickFunc.js
    │     └── start.js
    │
    ├── Index
    │     └── FormLoad
    │          └── DomContentLoaded
    │               └── AddListeners
    │                    ├── showAllHtmlId
    │                    ├── crudHtmlId
    │                    └── verticalHtmlId
    │
    ├── script.js
    ├── index.html
    └── start.js
```

---

# ⚙ Generated Files

Every generated HTML module contains

```
clickFunc.js
```

Responsible for handling UI events.

and

```
start.js
```

Responsible for initialization.

These files are automatically connected with the generated boilerplate.

---

# 🎯 Why Use This Extension?

Instead of manually creating

- folders
- HTML components
- click handlers
- listener modules
- CRUD pages
- helper files

the extension generates everything automatically.

Benefits

- ✅ Faster frontend development
- ✅ Standard project architecture
- ✅ Reusable UI modules
- ✅ Less repetitive work
- ✅ Beginner friendly
- ✅ Clean folder structure
- ✅ Better maintainability

---

# 🛠 Commands

| Command | Description |
|----------|-------------|
| **InitFromScript** | Generate frontend project from the Public folder |
| **insertSimple** | Generate simple frontend boilerplate |
| **insertCrud** | Generate CRUD frontend boilerplate |
| **addHeaderItem** | Create reusable listener module |
| **addHtmlId** | Generate HTML ID based folders and files |

---

# 💻 Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- VS Code Extension API

---

# 📦 Installation

Install from the VS Code Marketplace.

```
Extensions

↓

Search

VS Code Frontend Boilerplate Generator
```

---

# 📜 License

MIT License

---

# ⭐ Support

## GitHub

https://github.com/keshavsoft

---

## VS Code Marketplace

https://marketplace.visualstudio.com/

---

# ❤️ If this extension saves you time...

⭐ Star the repository

🍴 Fork the project

🚀 Share it with other developers