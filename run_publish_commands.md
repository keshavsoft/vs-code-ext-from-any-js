# 🚀 Commands to Run for Publishing

Follow these commands in your terminal to commit the updated workflow and documentation files and trigger the **Publish Extension** workflow:

### Step 1: Commit and Push the Updated Files
Since there are updated workflow and documentation files in your workspace, stage, commit, and push them to `main` first:
```bash
git add .github/workflows/publish.yml publish_action_name.md publish_instructions.md run_publish_commands.md vs_code_marketplace_publish.md
git commit -m "chore: setup updated publish workflows and update docs"
git push origin main
```

### Step 2: Trigger the Workflow on GitHub
Go to your GitHub repository Actions page, select the **Publish Extension** workflow, and click the **Run workflow** button to trigger the publish manually.
