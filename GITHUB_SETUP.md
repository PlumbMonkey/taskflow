# GitHub Setup Instructions

Your TaskFlow project is ready to push to GitHub! Follow these steps:

## Option 1: Using GitHub CLI (Recommended)

```bash
# Install GitHub CLI if you don't have it: https://cli.github.com

# Authenticate with GitHub
gh auth login

# Create a new GitHub repository
gh repo create taskflow --public --source=. --remote=origin --push
```

## Option 2: Manual GitHub Setup

### 1. Create Repository on GitHub
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `taskflow`
3. Description: "Real-time collaborative Kanban task board - Full-stack portfolio project"
4. Public repository (for portfolio visibility)
5. Click "Create repository"
6. **Important:** Do NOT initialize with README, .gitignore, or LICENSE (we already have these)

### 2. Push to GitHub
```bash
# Set up remote
git remote add origin https://github.com/YOUR_USERNAME/taskflow.git

# Rename branch to main (optional but recommended)
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## What Will Be Pushed (46 files)

✅ All source code (React, TypeScript, hooks, components, pages)  
✅ Database schema and RLS policies  
✅ Configuration files (vite, typescript, tailwind, eslint, prettier)  
✅ GitHub Actions CI/CD workflow  
✅ Professional documentation (README, case study, architecture, setup guide)  
✅ License (MIT) and Code of Conduct  
✅ Package.json with all dependencies  
✅ Seed script for demo data  

❌ `.env` file (NOT pushed - kept in `.env.example` only)  
❌ `node_modules/` (in `.gitignore`)  

---

## After Pushing to GitHub

1. **Share your repo URL:**
   ```
   https://github.com/YOUR_USERNAME/taskflow
   ```

2. **Add to portfolio:**
   - Pin repo on GitHub profile
   - Link in LinkedIn
   - Add to personal website

3. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select the `taskflow` repository
   - Set Supabase environment variables
   - Deploy!

4. **Use in Job Applications:**
   - GitHub repo link
   - Deployed live URL
   - Case study for technical interviews

---

## Git Workflow Going Forward

```bash
# Make changes
npm run dev

# Stage changes
git add .

# Commit
git commit -m "Describe your changes"

# Push to GitHub
git push

# (GitHub Actions will automatically run CI/CD)
```

---

## Verify Your Remote

```bash
git remote -v
# Should show:
# origin  https://github.com/YOUR_USERNAME/taskflow.git (fetch)
# origin  https://github.com/YOUR_USERNAME/taskflow.git (push)
```

---

## Current Git Status

```
Repository: Initialized ✓
Remote: Not set up yet (follow instructions above)
Commit: 1 (46 files)
Branch: master (ready to push to GitHub)
```

---

**Ready to push? Follow Option 1 or 2 above!** 🚀
