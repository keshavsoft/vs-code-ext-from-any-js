# 🚀 VS Code Marketplace Publishing Workflow

The GitHub Actions workflow to publish the extension to the Visual Studio Code Marketplace is defined in [publish.yml](file:///d:/KeshavSoftRepos/6aug-1/vs-code-ext-from-any-js/.github/workflows/publish.yml) (named **Publish Extension**).

---

## ⚡ How to Trigger the Publish Action

The workflow is triggered manually directly from GitHub:
1. Go to your GitHub repository: `keshavsoft/vs-code-ext-from-any-js`.
2. Click the **Actions** tab.
3. In the left sidebar, click the **Publish Extension** workflow.
4. Click the **Run workflow** dropdown and select **Run workflow**.

---

## 🛠️ Prerequisites
For the workflow to succeed, you must ensure:
* You have added your Azure DevOps Personal Access Token (PAT) to your GitHub repository secrets under the name **`VSCE_PAT`**.
