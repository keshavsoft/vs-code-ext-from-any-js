# 🌐 GitHub Pages Build & Deployment Workflow

### Why is the "pages build and deployment" action running?
Every time you push a commit to the `main` branch of this repository, GitHub automatically triggers the built-in **pages build and deployment** workflow. 

This occurs because **GitHub Pages** is enabled on the `vs-code-ext-from-any-js` repository, configured to automatically deploy your static files from a branch (such as the `docs` folder on `main`) whenever new changes are pushed.

### What does it do?
It builds and publishes your static web documentation so that the live site is updated:
1. **`pages-build`**: Collects and packages all static files (like HTML, CSS, and JS files located in your `docs` directory) into a deployment artifact.
2. **`pages-deploy`**: Uploads and publishes that artifact to the GitHub Pages hosting server, updating your live documentation site at `https://keshavsoft.github.io/vs-code-ext-from-any-js/`.

---

## 🛠️ How to Stop/Disable the Automatic Action

Because this is a built-in GitHub Pages system workflow, it cannot be stopped or disabled by editing repository code files. You must change the repository settings in the GitHub web interface:

### Option A: Fully Disable GitHub Pages
If you do not want the documentation site to be published at all:
1. Go to the GitHub repository: `keshavsoft/vs-code-ext-from-any-js`.
2. Click on the **Settings** tab.
3. In the left sidebar under *Code and automation*, click **Pages**.
4. Under **Build and deployment** -> **Source**, change the selection from **Deploy from a branch** to **Disabled** (or set the branch to **None**).

### Option B: Stop Automatic Runs on Push
If you want to keep the Pages feature but prevent it from running automatically on every push:
1. Go to **Settings** -> **Pages** in your GitHub repository.
2. Under **Build and deployment** -> **Source**, change the dropdown selection from **Deploy from a branch** to **GitHub Actions**.
3. Because there is no custom Pages deployment workflow file in your `.github/workflows/` directory, GitHub will stop triggering the auto-runs completely.
