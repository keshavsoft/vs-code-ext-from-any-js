# 🚀 Commands to Run for Publishing

Follow these commands in your terminal to commit the new documentation files and trigger the **Publish Extension** workflow:

### Step 1: Commit and Push the New Documentation Files
Since there are untracked `.md` files in your workspace, stage, commit, and push them to `main` first:
```bash
git add github_pages_workflow.md vs_code_marketplace_publish.md
git commit -m "docs: add workflow instructions"
git push origin main
```

### Step 2: Tag the Version and Push it to GitHub
The current version in your `package.json` is `1.15.2`. Tag the commit with `v1.15.2` and push it to trigger the automated publish workflow:
```bash
git tag v1.15.2
git push origin v1.15.2
```
This push will automatically start the **Publish Extension** action on GitHub.
