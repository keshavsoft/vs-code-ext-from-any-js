# 🚀 VS Code Extension Documentation

This project contains two Visual Studio Code extensions that automate backend and frontend development by generating boilerplate code, folders, and project structures with a few clicks.

---

# 📚 Documentation

## 🚀 Backend

Generate Express.js API projects automatically.

### Features

- Create API folders
- Generate `routes.js`
- Generate `end-points.js`
- Create table-based endpoints
- Auto-connect routes to `app.js`
- HTML-based UI
- VS Code Title Bar commands

### Workflow

1. Open **app.js** ---> Click **StartEndPoint** --->Create **BaseRoute** --> ex: (Api).

2. Open **routes.js** --> Use **AddTableName** or **AddTableNameHtml** --> Create route with table Name -->ex: (bills).

3. Open **end-points.js** Use **getMethod** or **postMethod** --> cretate get and post methods --> ex:(ShowAll,Insert).

### Commands

| Command | Purpose |
|----------|---------|
| StartEndPoint | Create API folder |
| AddTableName | Generate endpoint using Input Box |
| AddTableNameHtml | Generate endpoint using HTML UI |
| getMethod | Generate get methods using HTML UI |
| postMethod | Generate post methods using HTML UI |

---

## 🎨 Frontend

Generate complete frontend boilerplates from VS Code.

### Features

- Simple Boilerplate
- CRUD Boilerplate
- HTML Components
- Listener Modules
- HTML ID Generator
- HTML UI
- VS Code Commands

### Workflow

1. Right-click **Public** --> Click **InitFromScript** --> Enter project name.
2. Choose **insertSimple** or **insertCrud** --> for Ui crud.
3. Use **addHeaderItem** or **addHtmlId** --> Create for js methods.

### Commands

| Command | Purpose |
|----------|---------|
| InitFromScript | Create frontend project |
| insertSimple | Simple boilerplate |
| insertCrud | CRUD boilerplate |
| addHeaderItem | Listener generator |
| addHtmlId | HTML ID module generator |

---

# 💻 Technologies

- Node.js
- Express.js
- JavaScript
- HTML5
- CSS3
- VS Code Extension API

---

# 📦 Installation

Install the extension from the **VS Code Marketplace**.

---

# ⭐ Support

**GitHub**

https://github.com/keshavsoft/vs-code-ext-from-any-js

**VS Code Marketplace**

https://marketplace.visualstudio.com/items?itemName=KeshavSoft.vs-code-ext-from-any-js

---

Made with ❤️ by **KeshavSoft**