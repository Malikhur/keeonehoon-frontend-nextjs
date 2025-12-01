# Keeone Hoon - Memecoin Website

A high-end, production-ready, fully responsive single-page website for the Keeone Hoon memecoin, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Comic Book Style Design** - Unique visual style with halftone patterns, speech bubbles, and comic rays
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Floating elements, twinkling stars, and subtle hover effects
- **Production Ready** - SEO optimized, fast loading, and Vercel-ready
- **Modern Tech Stack** - Next.js 14, TypeScript, Tailwind CSS

## 📦 Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 🖼️ Images to Replace

The project includes placeholder SVG images. Replace these with your actual images in `/public/images/`:

| File | Description |
|------|-------------|
| `logo.png` | Main Keeone Hoon logo |
| `avatar.png` | Small avatar for header |
| `character-hero.png` | Main character in hero section |
| `cityscape.png` | City skyline background |
| `cloud.svg` | Cloud decoration (can keep as SVG) |
| `character-about.png` | Character for About section |
| `keone-real.png` | Real photo of Keone Hon |
| `phone-content.png` | Content for phone mockup |
| `character-sitting.png` | Sitting character for How to Buy |
| `character-excited.png` | Excited character for Final Thoughts |
| `character-laptop.png` | Character with laptop for Stay Updated |

## 🎨 Customization

### Colors
Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary-purple: #7c3aed;
  --primary-purple-light: #a78bfa;
  --primary-purple-dark: #5b21b6;
  --bg-purple-light: #c4b5fd;
  --accent-orange: #f97316;
  --accent-yellow: #fbbf24;
}
```

### Social Links
Update Telegram and X (Twitter) links in:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

### Content
Edit text content in each component file in `src/components/`.

## 🚀 Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

Or use the Vercel CLI:

```bash
npx vercel
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & animations
│   ├── layout.tsx       # Root layout with fonts & meta
│   └── page.tsx         # Main page composition
├── components/
│   ├── Header.tsx       # Fixed navigation header
│   ├── Hero.tsx         # Hero section with rays & character
│   ├── AboutToken.tsx   # About the token section
│   ├── WhyChoose.tsx    # Features grid section
│   ├── HowToBuy.tsx     # How to buy steps
│   ├── FinalThoughts.tsx # Final thoughts section
│   ├── StayUpdated.tsx  # Stay updated CTA
│   └── Footer.tsx       # Footer with disclaimer
public/
└── images/              # All image assets
```

## 📄 License

Copyright © 2025 Keeone Hoon. All Rights Reserved.
