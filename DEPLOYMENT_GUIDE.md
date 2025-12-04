# GitHub Setup & Vercel Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and login
2. Click the **+** icon (top right) → **New repository**
3. Repository settings:
   - **Name**: `iqairus` (or your preferred name)
   - **Visibility**: Public or Private (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **Create repository**

## Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/iqairus.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username.

## Step 3: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New...** → **Project**
3. Click **Import Git Repository**
4. Select your GitHub account and find the `iqairus` repository
5. Click **Import**
6. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
7. Click **Deploy**

## Step 4: Continuous Deployment

Once deployed, every push to the `main` branch will automatically trigger a new deployment on Vercel!

## Your Deployment URLs

- **Production**: `https://iqairus.vercel.app` (or custom domain)
- **Preview**: Each PR gets its own preview URL

---

**Ready to proceed?** Let me know when you've created the GitHub repository and I'll help you push the code!
