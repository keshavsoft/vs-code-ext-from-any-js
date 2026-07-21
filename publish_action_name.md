# 🛠️ Which Action to Run for Publishing

There are two GitHub Actions workflows available:

### 1. **`NPM Publish`**
- Defined in [npm-publish.yml](file:///d:/KeshavSoftRepos/2026-07-21/ks1/vs-code-ext-from-any-js/.github/workflows/npm-publish.yml).
- Publishes the package to NPM and provides an execution summary.
- Run this manually via the GitHub Actions UI.

### 2. **`Publish NPM and Extension`**
- Defined in [publish.yml](file:///d:/KeshavSoftRepos/2026-07-21/ks1/vs-code-ext-from-any-js/.github/workflows/publish.yml).
- Performs step 1 (NPM Publish) and then packages and publishes the extension directly to the VS Code Marketplace.
- Triggered automatically on pushing a version tag (e.g. `v*`) or run manually via the GitHub Actions UI.

