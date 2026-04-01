# VibeCircles Help Center

A full, production-ready Next.js 14 help center for VibeCircles.

## Features

- **7 complete help sections** with all content written
- **Full-text search** across all articles
- **Accordion articles** with smooth animations and helpful feedback buttons
- **Sticky navbar** with keyboard-shortcut search modal (⌘K)
- **Responsive design** — works on mobile, tablet, and desktop
- **Prev/Next navigation** between sections
- **Dark hero banners** with per-section color theming
- **Smooth curved transitions** between sections

## Sections Covered

1. Getting Started with VibeCircles
2. Partnerships & Collaborations
3. Services & Solutions
4. Billing, Payments & Contracts
5. Trust, Safety & Compliance
6. Media & Press Kit
7. Technical Support (For Partners)

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build
npm start
```

## Project Structure

```
vibecircles-help/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage / hub
│   ├── globals.css         # Global styles + Tailwind
│   ├── not-found.tsx       # 404 page
│   ├── [slug]/
│   │   └── page.tsx        # Dynamic section pages
│   └── search/
│       └── page.tsx        # Search results page
├── components/
│   ├── Navbar.tsx          # Sticky nav + search modal
│   ├── Footer.tsx          # Full footer with links
│   └── ArticleList.tsx     # Accordion article renderer
├── data/
│   └── helpContent.ts      # All content — edit this!
├── package.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

### Adding/Editing Content
All content lives in `data/helpContent.ts`. Each section has:
- `title`, `tagline`, `icon`, `color`, `slug`
- `articles[]` — each with `id`, `title`, `content`, `tags`

Content supports basic markdown: `**bold**`, `*italic*`, and paragraph breaks.

### Changing Colors
Each section has its own accent color defined in `helpContent.ts`. Update the hex value to match your brand.

### Adding New Sections
Add a new entry to the `helpSections` array in `helpContent.ts`. The dynamic `[slug]/page.tsx` route handles it automatically.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** icons
- **Google Fonts** — Syne (display) + Instrument Sans (body) + JetBrains Mono (code)

## Deployment

Deploy to Vercel with one command:
```bash
npx vercel
```
