# 🚀 VS Code Marketplace Publishing Workflow

The GitHub Actions workflow to publish the extension to the Visual Studio Code Marketplace is defined in [publish.yml](file:///d:/KeshavSoftRepos/2026-07-21/ks1/vs-code-ext-from-any-js/.github/workflows/publish.yml) (named **Publish Extension**).

---

## ⚡ How to Trigger the Publish Action

You can trigger this action in two ways:

### 1. Automatic Trigger (Using Git Tags)
The workflow will run automatically when you create and push a version tag starting with `v` (such as `v1.14.5`):
```bash
git tag v1.14.5
git push origin v1.14.5
```

### 2. Manual Trigger (via GitHub Web UI)
You can trigger the run manually directly from GitHub:
1. Go to your GitHub repository: `keshavsoft/vs-code-ext-from-any-js`.
2. Click the **Actions** tab.
3. In the left sidebar, click the **Publish Extension** workflow.
4. Click the **Run workflow** dropdown and select **Run workflow**.

---

## 🛠️ Prerequisites
For the workflow to succeed, you must ensure:
* You have added your Azure DevOps Personal Access Token (PAT) to your GitHub repository secrets under the name **`VSCE_PAT`**.
