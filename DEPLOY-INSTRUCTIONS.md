# 🚀 Deploy Cyber Ronin Quest to GitHub Pages

## Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com/new

2. **Create repository with these settings:**
   - **Repository name:** `cyber-ronin-quest`
   - **Description:** `Cyber Ronin Quest - AI-Powered Production Planning`
   - **Visibility:** Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have the code)

3. **Click "Create repository"**

## Step 2: Push Your Code

After creating the repository, run these commands in PowerShell:

```powershell
cd "C:\Users\godec\Desktop\Kimi_Agent_Japanese Minimalist Landing Redesign\-traditional-01"

# Add the GitHub remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cyber-ronin-quest.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your password)
  - Get token at: https://github.com/settings/tokens

## Step 3: Enable GitHub Pages

1. **Go to your repository settings:**
   - https://github.com/YOUR_USERNAME/cyber-ronin-quest/settings/pages

2. **Configure GitHub Pages:**
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`

3. **Click "Save"**

4. **Wait 1-2 minutes** for deployment

5. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/cyber-ronin-quest/
   ```

## Step 4: Add Custom Domain (cyberronin.quest)

### A. In GitHub:

1. **Go to repository settings:**
   - https://github.com/YOUR_USERNAME/cyber-ronin-quest/settings/pages

2. **Under "Custom domain":**
   - Enter: `cyberronin.quest`
   - Click "Save"

3. **Check "Enforce HTTPS"** (after DNS propagates)

### B. In Porkbun (DNS Settings):

Go to Porkbun DNS management for `cyberronin.quest` and add these records:

#### **For Root Domain (cyberronin.quest):**

Add these **4 A records** (all with same host `@` or blank):

```
Type: A
Host: @ (or leave blank for root domain)
Answer: 185.199.108.153
TTL: 600

Type: A
Host: @ (or leave blank for root domain)
Answer: 185.199.109.153
TTL: 600

Type: A
Host: @ (or leave blank for root domain)
Answer: 185.199.110.153
TTL: 600

Type: A
Host: @ (or leave blank for root domain)
Answer: 185.199.111.153
TTL: 600
```

#### **For WWW Subdomain (www.cyberronin.quest):**

Add this **CNAME record**:

```
Type: CNAME
Host: www
Answer: YOUR_USERNAME.github.io
TTL: 600
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 5: Verify DNS (Wait 5-30 minutes)

DNS changes take time to propagate. Check your DNS with:

```powershell
nslookup cyberronin.quest
nslookup www.cyberronin.quest
```

You should see the GitHub Pages IP addresses.

## Step 6: Create CNAME File (Important!)

GitHub Pages needs a CNAME file in the repository root:

```powershell
cd "C:\Users\godec\Desktop\Kimi_Agent_Japanese Minimalist Landing Redesign\-traditional-01"
echo "cyberronin.quest" > CNAME
git add CNAME
git commit -m "Add custom domain CNAME"
git push
```

## ✅ Final Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled (main branch, root folder)
- [ ] Custom domain added in GitHub settings
- [ ] DNS A records added in Porkbun (4 records)
- [ ] DNS CNAME record added for www subdomain
- [ ] CNAME file created and pushed to repository
- [ ] Waited 5-30 minutes for DNS propagation
- [ ] HTTPS enabled in GitHub Pages settings
- [ ] Site loads at https://cyberronin.quest

## 🌐 URLs After Deployment

- **GitHub Pages URL:** https://YOUR_USERNAME.github.io/cyber-ronin-quest/
- **Custom Domain:** https://cyberronin.quest
- **WWW Subdomain:** https://www.cyberronin.quest

## 🔧 Troubleshooting

### "Domain not properly configured"
- Wait longer for DNS propagation (can take up to 48 hours)
- Double-check A records are correct
- Make sure CNAME file exists in repository

### "404 Not Found"
- Check that GitHub Pages is enabled
- Verify branch is set to `main` and folder to `/ (root)`
- Make sure `index.html` is in the root of the repository

### "Certificate error" or "Not secure"
- Wait for DNS to fully propagate
- Enable "Enforce HTTPS" in GitHub Pages settings
- Wait a few more hours for SSL certificate to provision

## 📝 DNS Records Summary for Porkbun

Copy-paste these values:

**A Records (Root Domain):**
```
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153
```

**CNAME Record (WWW):**
```
www → YOUR_USERNAME.github.io
```

---

**All files are ready!** Just follow the steps above to deploy. 🚀
