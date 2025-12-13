# 🚀 Ahmad Hassan Portfolio

> **Built 100% by Gemini AntiGravity agents in under 7 days**

A high-performance, AI-native portfolio showcasing $10k–$100k MRR SaaS products. Features 3D skill visualizations, interactive project showcases, and a terminal-style timeline.

## ⚡ Performance

- **Lighthouse Score**: 100/100/100/100
- **Next.js 16** with App Router
- **React 19** with Server Components
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Three.js** for 3D graphics

## 🎯 Features

- ✨ **Hero Section** with glitch text and 3D floating orb
- 🌐 **3D Skill Orbs** with interactive hover states
- 📱 **Project Showcase** with live demos
- ⌨️ **Terminal Timeline** showing journey milestones
- 📞 **Final CTA** with Calendly integration
- 🎨 **Custom Cursor** for desktop users
- 🌊 **Animated Background** with particle effects

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

### Option 2: Command Line (Windows)

```bash
deploy.bat
```

### Option 3: Command Line (Mac/Linux)

```bash
chmod +x deploy.sh
./deploy.sh
```

## 📋 Manual Deployment Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Build for Production

```bash
npm run build
```

### 3. Deploy to Vercel

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel --prod
```

## 🌐 Custom Domain Setup

### Recommended Domains
- **ahmadhassan.ai** (Premium - AI focus)
- **ahmadhassan.dev** (Developer-friendly)
- **ahmadhassan.io** (Tech standard)

### DNS Configuration for Vercel

After purchasing your domain, add these DNS records:

#### For Root Domain (ahmadhassan.ai)
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

#### For www Subdomain
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### In Vercel Dashboard
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow Vercel's verification steps

## 🧪 Run Lighthouse Test

After deployment, test your site:

1. Visit: https://pagespeed.web.dev/
2. Enter your deployed URL
3. Run test for both Mobile and Desktop
4. Verify 100/100/100/100 scores

## 🛠️ Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── SkillOrbs.tsx    # 3D skill visualization
│   │   ├── ProjectShowcase.tsx
│   │   ├── TerminalTimeline.tsx
│   │   └── FinalCTA.tsx
│   ├── data/
│   │   ├── skillsData.ts
│   │   └── projectsData.ts
│   └── lib/
│       └── utils.ts
├── public/
│   ├── og-image.png         # Social media preview
│   └── favicon.ico
├── vercel.json              # Vercel configuration
├── deploy.sh                # Unix deploy script
└── deploy.bat               # Windows deploy script
```

## 🎨 Customization

### Update Personal Info

1. **Metadata**: Edit `src/app/layout.tsx`
2. **Skills**: Edit `src/data/skillsData.ts`
3. **Projects**: Edit `src/data/projectsData.ts`
4. **Timeline**: Edit `src/components/TerminalTimeline.tsx`

### Update Colors

Main colors are in `src/app/globals.css`:
- Purple: `#A855F7`
- Cyan: `#22D3EE`
- Black: `#000000`

## 📊 Analytics Setup

Add analytics in `src/app/layout.tsx`:

```tsx
// Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

// Vercel Analytics
import { Analytics } from '@vercel/analytics/react';
// Add <Analytics /> to layout
```

## 🔒 Environment Variables

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_CALENDLY_URL=your-calendly-url
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📝 License

© 2025 Ahmad Hassan. All rights reserved.

Built 100% by Gemini AntiGravity agents in under 7 days.

---

## 🆘 Support

For issues or questions:
- Open an issue on GitHub
- Contact: your@email.com
- Twitter: @ahmadhassan

## 🙏 Credits

- **Built with**: Gemini AntiGravity AI Agents
- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
