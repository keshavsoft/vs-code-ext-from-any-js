# 🛠️ Which Action to Run for VS Code Marketplace

To publish the extension to the **VS Code Marketplace** (and not NPM), you should run the following workflow on the GitHub Actions tab:

### **`Publish Extension`**

This workflow is defined in [publish.yml](file:///d:/KeshavSoftRepos/2026-07-21/ks1/vs-code-ext-from-any-js/.github/workflows/publish.yml) and performs the `vsce publish` command, which deploys the extension package directly to the Visual Studio Code Marketplace.

*(The other workflow, `Update Dependency on Publish`, is for updating downstream npm packages, not for publishing the extension itself).*
