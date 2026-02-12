# 🥷 Cyber Ronin Quest - Landing Page

Japanese minimalist landing page for Cyber Ronin Quest multi-agent AI platform.

## ✅ What's Included

- ✅ Fully responsive landing page
- ✅ Japanese minimalist design
- ✅ Hero section with AI agents showcase
- ✅ Waitlist signup form (sends to godecsven@gmail.com)
- ✅ Custom domain configuration (cyberronin.quest)
- ✅ Favicon and social media previews
- ✅ Smooth animations and transitions
- ✅ Mobile-optimized

## 📁 Files

```
├── index.html          - Main landing page
├── style.css           - Styles
├── script.js           - JavaScript interactions
├── favicon.ico         - Browser favicon
├── favicon.svg         - SVG favicon
├── og-image.png        - Default social preview (55KB)
├── og-agencies.png     - Agencies social preview (48KB)
├── og-creators.png     - Creators social preview (48KB)
├── og-enterprise.png   - Enterprise social preview (55KB)
├── CNAME               - Custom domain config
└── README.md           - This file
```

## 🚀 Deployment to GitHub Pages

### Quick Start (5 minutes)

1. **Create GitHub repository:**
   - Go to: https://github.com/new
   - Name: `cyber-ronin-quest`
   - Visibility: Public
   - DO NOT initialize with README

2. **Push code:**
```powershell
cd "C:\Users\godec\Desktop\Kimi_Agent_Japanese Minimalist Landing Redesign\-traditional-01"
git remote add origin https://github.com/YOUR_USERNAME/cyber-ronin-quest.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to: Settings → Pages
   - Source: Deploy from branch `main` / `root`
   - Custom domain: `cyberronin.quest`
   - Save and check "Enforce HTTPS"

4. **Configure DNS in Porkbun:**

Add these A records:
```
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153
```

Add CNAME record:
```
www → YOUR_USERNAME.github.io
```

## 📧 Form Configuration

The waitlist form sends submissions to: **godecsven@gmail.com**

**Using:** Formspree (free service)

**First submission:** You'll receive a confirmation email from Formspree to activate the form. Click the link to enable it.

**After activation:** All form submissions will be emailed to you automatically.

**Alternative:** You can create a free Formspree account at https://formspree.io to manage submissions, add spam protection, and get analytics.

## 🌐 URLs

After deployment:

- **GitHub Pages:** https://YOUR_USERNAME.github.io/cyber-ronin-quest/
- **Custom Domain:** https://cyberronin.quest
- **WWW Subdomain:** https://www.cyberronin.quest

## 🎨 Features

### Design
- Japanese minimalist aesthetic
- Dark theme with accent colors
- Smooth reveal animations
- Responsive grid layouts

### Sections
1. **Hero** - Main value proposition
2. **AI Agents** - The 6 Ronin showcase
3. **Features** - Key capabilities
4. **How It Works** - 4-step process
5. **Pricing** - Creator, Agency, Enterprise tiers
6. **Testimonials** - Social proof
7. **FAQ** - Common questions
8. **Waitlist** - Email capture form

### Technical
- Vanilla JavaScript (no frameworks)
- Modern CSS (Grid, Flexbox)
- Lucide icons
- Optimized images
- SEO meta tags
- Open Graph tags for social sharing

## 📊 Performance

- **HTML:** ~26KB
- **CSS:** ~32KB
- **JS:** ~19KB
- **Images:** ~210KB total
- **Total:** ~287KB

All assets load fast on any connection.

## 🔧 Local Development

To test locally:

```powershell
# Simple Python server
cd "C:\Users\godec\Desktop\Kimi_Agent_Japanese Minimalist Landing Redesign\-traditional-01"
python -m http.server 8000
```

Open: http://localhost:8000

Or use any local server (Live Server extension in VS Code, etc.)

## 🎯 Next Steps After Deployment

1. **Activate Formspree** (check email after first form submission)
2. **Test form** by submitting your own email
3. **Share the URL** on social media
4. **Monitor waitlist** signups in your email
5. **Optional:** Set up Google Analytics for tracking

## 📝 Customization

### Change Form Email

Edit `index.html` line 503 and replace the Formspree URL with your own:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Get your form ID at: https://formspree.io

### Update Content

All content is in `index.html`. Search for:
- Hero text: Line ~100
- Agent descriptions: Lines ~180-260
- Pricing: Lines ~370-430
- FAQ: Lines ~460-490

### Change Colors

Edit `style.css` CSS variables (lines ~10-30):
```css
:root {
    --primary: #00d9ff;    /* Cyan */
    --secondary: #ff00ff;  /* Magenta */
    --accent: #ffeb3b;     /* Yellow */
}
```

## 🆘 Troubleshooting

### Form Not Working
1. Check email for Formspree activation link
2. Make sure form action URL is correct
3. Test by filling out form yourself

### Custom Domain Not Working
1. Wait 30 minutes for DNS propagation
2. Check DNS: `nslookup cyberronin.quest`
3. Verify A records in Porkbun point to GitHub IPs
4. Make sure CNAME file exists in repository

### HTTPS Not Working
1. Wait a few hours for certificate provisioning
2. Check "Enforce HTTPS" is enabled in GitHub Pages settings
3. Clear browser cache and try again

## 📞 Support

- **Creator:** Sven Godec
- **LinkedIn:** https://www.linkedin.com/in/svengodec/
- **Email:** godecsven@gmail.com

## 📄 License

Proprietary - Cyber Ronin Quest

---

**Ready to deploy?** Follow the steps in QUICK-DEPLOY.md! 🚀
