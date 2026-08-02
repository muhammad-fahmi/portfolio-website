# Modern Full-Stack Developer Portfolio (Next.js 14 & Vercel)

A high-performance, dark-mode portfolio built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**. Pre-configured with security headers, SEO metadata, sitemap/robots generation, and Vercel deployment settings.

## 🚀 Features

- 🎨 **Modern Aesthetics**: Sleek dark theme with vibrant gradient accents, glassmorphism UI containers, and smooth Framer Motion micro-animations.
- 📱 **Fully Responsive**: Mobile-first navigation drawer & responsive grid layouts.
- ⚡ **App Router Architecture**: Server Components and client interactivity cleanly separated.
- 💼 **Interactive Sections**:
  - **Hero**: Dynamic tagline, availability status badge, social media links.
  - **About & Skills**: Filterable tech stack proficiency bars & experience stats.
  - **Projects Grid**: Categorized project cards with modal details view & external links.
  - **Work Experience**: Interactive career timeline.
  - **Articles / Blog**: Insights showcase cards.
  - **Contact Form**: Integrated Vercel serverless API endpoint (`/api/contact`).
- 🔍 **SEO & Social Sharing**:
  - Auto-generated `sitemap.ts` & `robots.ts`.
  - Comprehensive Open Graph & Twitter Card tags in `layout.tsx`.
- 🔐 **Vercel Pre-Configured**:
  - `vercel.json` with security headers (CSP, XSS, Frame Options) & static caching rules.
  - `next.config.js` with header overrides and remote image patterns.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## 📁 Project Structure

```
├── app/
│   ├── api/contact/route.ts  # Vercel serverless contact API endpoint
│   ├── globals.css           # Custom glassmorphism & gradient styles
│   ├── layout.tsx            # Global metadata, fonts & layout shell
│   ├── page.tsx              # Main portfolio landing page
│   ├── robots.ts             # SEO Robots rule generator
│   └── sitemap.ts            # XML Sitemap generator
├── components/
│   ├── Navbar.tsx            # Floating glassmorphism navbar
│   ├── Hero.tsx              # Hero header section
│   ├── About.tsx             # Bio & Tech stack proficiency bars
│   ├── Projects.tsx          # Filterable project showcase & modal
│   ├── Experience.tsx        # Work history timeline
│   ├── Blog.tsx              # Article insights cards
│   ├── Contact.tsx           # Contact form & social connections
│   └── Footer.tsx            # Footer & back-to-top button
├── data/
│   └── portfolio.ts          # Structured portfolio content & data
├── .env.example              # Environment variables template
├── next.config.js            # Next.js & security headers config
├── tailwind.config.ts        # Custom dark palette & animations
├── tsconfig.json             # TypeScript compiler settings
└── vercel.json               # Vercel deployment configuration
```

---

## 🚀 How to Deploy to Vercel

### Option 1: Automatic GitHub Actions CI/CD (Recommended)
This codebase includes pre-configured GitHub Actions workflows in `.github/workflows/`:
- **Production Deployment** ([`deploy-vercel.yml`](file:///e:/portfolio/.github/workflows/deploy-vercel.yml)): Triggers automatically on pushes to `main`.
- **Preview Deployment** ([`preview-vercel.yml`](file:///e:/portfolio/.github/workflows/preview-vercel.yml)): Triggers automatically on Pull Requests.

#### Setup GitHub Secrets:
1. Go to your GitHub repository -> **Settings** -> **Secrets and variables** -> **Actions**.
2. Add the following repository secrets:
   - `VERCEL_TOKEN`: Generated from [Vercel Account Settings -> Tokens](https://vercel.com/account/tokens).
   - `VERCEL_ORG_ID`: Found in `.vercel/project.json` or Vercel Team Settings.
   - `VERCEL_PROJECT_ID`: Found in `.vercel/project.json` or Vercel Project Settings.

---

### Option 2: Direct GitHub & Vercel Integration
1. Push this repository to GitHub.
2. Connect the repo on [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect **Next.js** and build the application using settings from `vercel.json`.

