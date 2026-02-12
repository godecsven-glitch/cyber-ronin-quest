# 🚀 QUICK DEPLOY - 5 Minutes to Live!

## ✅ What's Done
- ✅ Git repository initialized
- ✅ All files committed
- ✅ CNAME file created for custom domain

## 🎯 What YOU Need to Do (5 minutes)

### 1️⃣ Create GitHub Repository (2 minutes)

**Go to:** https://github.com/new

**Settings:**
- Name: `cyber-ronin-quest`
- Public (required for free GitHub Pages)
- **DO NOT** check any boxes (no README, no .gitignore)

**Click "Create repository"**

### 2️⃣ Get Your GitHub Username

After creating the repo, you'll see a URL like:
```
https://github.com/YOUR_USERNAME/cyber-ronin-quest
```

Copy your `YOUR_USERNAME` - you'll need it!

### 3️⃣ Push Code to GitHub (1 minute)

Open PowerShell and run these commands **one by one**:

```powershell
cd "C:\Users\godec\Desktop\Kimi_Agent_Japanese Minimalist Landing Redesign\-traditional-01"

git remote add origin https://github.com/YOUR_USERNAME/cyber-ronin-quest.git

git branch -M main

git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

If asked for credentials, use:
- Username: Your GitHub username
- Password: Create a token at https://github.com/settings/tokens (select "repo" scope)

### 4️⃣ Enable GitHub Pages (1 minute)

**Go to:** https://github.com/YOUR_USERNAME/cyber-ronin-quest/settings/pages

**Configure:**
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`
- Custom domain: `cyberronin.quest`

**Click "Save"**

Check "Enforce HTTPS" (after DNS is configured)

### 5️⃣ Configure DNS in Porkbun (1 minute)

**Go to:** https://porkbun.com/account/domainsSpeedy (or your Porkbun DNS management)

**Find domain:** `cyberronin.quest`

**Add these records:**

#### A Records (Add all 4):
```
Type: A    Host: @    Answer: 185.199.108.153    TTL: 600
Type: A    Host: @    Answer: 185.199.109.153    TTL: 600
Type: A    Host: @    Answer: 185.199.110.153    TTL: 600
Type: A    Host: @    Answer: 185.199.111.153    TTL: 600
```

#### CNAME Record (Add 1):
```
Type: CNAME    Host: www    Answer: YOUR_USERNAME.github.io    TTL: 600
```

**Replace `YOUR_USERNAME` with your GitHub username!**

---

## 🎉 DONE!

Your site will be live at:
- **https://YOUR_USERNAME.github.io/cyber-ronin-quest/** (immediate)
- **https://cyberronin.quest** (after DNS propagates, 5-30 minutes)
- **https://www.cyberronin.quest** (same timing)

## ⏱️ Timeline

- **Immediately:** GitHub Pages URL works
- **5-30 minutes:** Custom domain starts working
- **1-24 hours:** DNS fully propagated worldwide
- **A few hours:** HTTPS certificate provisioned for custom domain

## 🔍 Check DNS Propagation

```powershell
nslookup cyberronin.quest
```

You should see the 4 GitHub IP addresses:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

## 📁 Files Ready to Deploy

```
✅ index.html          - Landing page
✅ style.css           - Styles
✅ script.js           - JavaScript
✅ favicon.ico         - Favicon
✅ favicon.svg         - SVG favicon
✅ og-image.png        - Social media preview
✅ og-agencies.png     - Agency preview
✅ og-creators.png     - Creator preview
✅ og-enterprise.png   - Enterprise preview
✅ CNAME               - Custom domain config
✅ netlify.toml        - (ignored by GitHub Pages)
```

## 🆘 Need Help?

**Common issues:**

1. **"Username or password incorrect"**
   - Use a Personal Access Token instead of password
   - Create at: https://github.com/settings/tokens
   - Select "repo" scope

2. **"DNS not working"**
   - Wait 30 minutes and try again
   - Check DNS with `nslookup cyberronin.quest`

3. **"Not secure" warning**
   - Wait for HTTPS to provision (can take a few hours)
   - Make sure "Enforce HTTPS" is checked in GitHub Pages settings

---

**Ready? Let's go! Start with Step 1 👆**
