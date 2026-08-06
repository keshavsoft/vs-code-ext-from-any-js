# 🚀 Guide: Publishing to VS Code Marketplace

Follow these steps to create your Personal Access Token (PAT) and set up the GitHub Action.

---

## Step 1: Create a Personal Access Token (PAT) in Azure DevOps

1. Open your browser and go to your Azure DevOps organization: [Azure DevOps](https://dev.azure.com/keshavsoftindia).
2. Look at the **top-right corner** of the page (to the left of your profile circle **KN**).
3. Click the **User Settings** icon (it looks like a person with a small gear: 👤⚙️).
4. Select **Personal access tokens** from the dropdown menu.
5. Click **+ New Token**.
6. Set the following options:
   * **Name**: `VSCE Publisher`
   * **Organization**: Select **All accessible organizations** (This is crucial for `vsce`!).
   * **Scopes**: Select **Custom defined** (at the bottom).
   * **Show all scopes**: Click this link at the bottom of the scope list.
   * Scroll down to find **Marketplace** and check **Publish** (and optionally **Acquire and manage**).
7. Click **Create** at the bottom.
8. **Copy the token value immediately**. (It will not be shown again once you close the window!)

---

## Step 2: Add the Token to GitHub Secrets

1. Go to your GitHub repository: `keshavsoft/vs-code-ext-from-any-js`.
2. Click the **Settings** tab.
3. Under the left sidebar, expand **Secrets and variables** and click **Actions**.
4. Click the **New repository secret** button.
5. Set:
   * **Name**: `VSCE_PAT`
   * **Secret**: *Paste the Azure DevOps PAT you copied in Step 1.*
6. Click **Add secret**.

---

## Step 3: Run the Workflow

1. Push a version tag to your repository (e.g., `git tag v1.14.5` and `git push origin v1.14.5`).
2. Alternatively, go to the **Actions** tab on GitHub, select the **Publish Extension** workflow, and click **Run workflow** to trigger it manually.
