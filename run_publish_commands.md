# 🚀 Commands to Run for Publishing

Follow these commands in your terminal to commit the new workflow and documentation files and trigger the **Publish NPM and Extension** workflow:

### Step 1: Commit and Push the New Files
Since there are updated workflow and documentation files in your workspace, stage, commit, and push them to `main` first:
```bash
git add .github/workflows/ npm-publish.yml publish.yml publish_action_name.md publish_instructions.md run_publish_commands.md vs_code_marketplace_publish.md
git commit -m "chore: setup new publish workflows and update docs"
git push origin main
```

### Step 2: Tag the Version and Push it to GitHub
The current version in your `package.json` is `1.15.3`. Tag the commit with `v1.15.3` and push it to trigger the automated publish workflow:
```bash
git tag v1.15.3
git push origin v1.15.3
```
This push will automatically start the **Publish NPM and Extension** action on GitHub.
