# Quick Start Guide

## Project Overview

This Next.js 14 project is fully configured with:
- ✅ TypeScript for type safety
- ✅ Tailwind CSS with custom colors (navy, gold, red)
- ✅ Dark/light mode support
- ✅ SEO optimization (meta tags, structured data, sitemap)
- ✅ Image optimization
- ✅ Mobile-first responsive design
- ✅ System font optimization

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` and set your site URL:
```
NEXT_PUBLIC_SITE_URL=https://christopherjbradley.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
christopherjbradley-com/
├── app/                      # Next.js App Router
│   ├── about/               # About page
│   │   └── page.tsx
│   ├── contact/             # Contact page
│   │   └── page.tsx
│   ├── layout.tsx           # Root layout (theme, fonts, SEO)
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Sitemap generation
│   └── robots.ts            # Robots.txt
├── components/              # React components
│   ├── OptimizedImage.tsx   # Image optimization
│   ├── StructuredData.tsx   # Schema.org JSON-LD
│   ├── ThemeProvider.tsx    # Theme context
│   └── ThemeToggle.tsx      # Dark mode toggle
├── lib/                     # Utilities
│   ├── fonts.ts            # Font configuration
│   ├── image-utils.ts      # Image helpers
│   └── seo.ts              # SEO utilities
├── public/                  # Static assets
│   └── images/             # Image files
├── docs/                    # Documentation
│   └── SEO-GUIDE.md        # SEO implementation guide
├── next.config.js           # Next.js config
├── tailwind.config.ts       # Tailwind config
└── tsconfig.json           # TypeScript config
```

## Key Features

### Custom Color Palette

The project uses a custom color scheme configured in Tailwind:

```tsx
// Use in your components
<div className="bg-navy text-white">Navy background</div>
<div className="bg-gold">Gold background</div>
<div className="bg-red">Red background</div>
```

Colors:
- `navy`: #1e3a5f
- `gold`: #d4a574
- `red`: #8b3838

### Dark Mode

Dark mode is automatically detected from system preferences and can be toggled:

```tsx
import { ThemeToggle } from '@/components/ThemeToggle'

// In your component
<ThemeToggle />
```

Use Tailwind's dark mode variants:
```tsx
<div className="bg-white dark:bg-slate-800">
  Content adapts to theme
</div>
```

### SEO Optimization

Add SEO to any page:

```tsx
import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Your Page Title',
  description: 'Your page description',
  keywords: ['keyword1', 'keyword2'],
})
```

See `docs/SEO-GUIDE.md` for complete SEO documentation.

### Image Optimization

Use the OptimizedImage component for automatic optimization:

```tsx
import { OptimizedImage } from '@/components/OptimizedImage'

<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={630}
  priority  // For above-the-fold images
/>
```

### Responsive Design

All pages are mobile-first responsive. Use Tailwind's responsive modifiers:

```tsx
<div className="text-base md:text-lg lg:text-xl">
  Responsive text sizing
</div>
```

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Common Tasks

### Adding a New Page

1. Create a new folder in `app/`:
```bash
mkdir app/blog
```

2. Create `page.tsx`:
```tsx
import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Blog',
  description: 'Read our latest blog posts',
})

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}
```

3. Add to sitemap in `app/sitemap.ts`:
```tsx
const routes = ['', '/about', '/contact', '/blog'].map(...)
```

### Creating a Reusable Component

1. Create file in `components/`:
```tsx
// components/Button.tsx
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-navy text-white px-6 py-3 rounded-lg hover:bg-navy/90"
    >
      {children}
    </button>
  )
}
```

2. Use in pages:
```tsx
import { Button } from '@/components/Button'

<Button onClick={() => console.log('clicked')}>
  Click me
</Button>
```

### Adding Utility Functions

Create files in `lib/`:
```tsx
// lib/utils.ts
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US').format(date)
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Next Steps

1. ✏️ Update site metadata in `lib/seo.ts`
2. 🎨 Customize colors in `tailwind.config.ts`
3. 📄 Add your content to pages
4. 🖼️ Add images to `public/images/`
5. 🚀 Deploy to Vercel, Netlify, or your hosting provider

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [SEO Guide](./docs/SEO-GUIDE.md)

## Need Help?

- Check the [README](./README.md) for detailed information
- Review [SEO-GUIDE.md](./docs/SEO-GUIDE.md) for SEO implementation
- Visit [Next.js Documentation](https://nextjs.org/docs)
