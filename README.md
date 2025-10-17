# Christopher J. Bradley - Next.js 14 Website

A modern, SEO-optimized website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14 App Router** - Latest Next.js features with optimal performance
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first CSS with custom color palette
- **SEO Optimized** - Comprehensive meta tags, structured data, and sitemap
- **Dark Mode** - System-aware theme with manual toggle
- **Mobile-First** - Responsive design for all screen sizes
- **Image Optimization** - Automatic AVIF/WebP formats with responsive sizes
- **Performance** - System fonts, minimal JavaScript, and optimized assets

## Color Palette

- **Navy**: `#1e3a5f` - Primary brand color
- **Gold**: `#d4a574` - Accent color
- **Red**: `#8b3838` - Secondary accent color

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env.local
```

4. Update `NEXT_PUBLIC_SITE_URL` in `.env.local` with your domain

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt configuration
├── components/            # React components
│   ├── OptimizedImage.tsx # Image optimization wrapper
│   ├── StructuredData.tsx # JSON-LD structured data
│   ├── ThemeProvider.tsx  # Theme context provider
│   └── ThemeToggle.tsx    # Dark/light mode toggle
├── lib/                   # Utilities and helpers
│   ├── fonts.ts          # Font configuration
│   ├── image-utils.ts    # Image helper functions
│   └── seo.ts            # SEO utilities and metadata
└── public/               # Static assets
    └── images/           # Image files
```

## SEO Features

### Meta Tags
- Automatic generation of meta tags for each page
- Open Graph tags for social media sharing
- Twitter Card support
- Viewport and theme-color meta tags

### Structured Data
- JSON-LD schema support
- Organization schema
- Website schema
- Article schema (for blog posts)
- Breadcrumb schema

### Sitemap & Robots
- Automatic sitemap generation at `/sitemap.xml`
- Robots.txt configuration at `/robots.txt`
- Configurable crawling rules

## Image Optimization

The project uses Next.js Image component with:
- Automatic AVIF/WebP format conversion
- Responsive image sizes
- Lazy loading by default
- Priority loading for above-the-fold images

Example usage:

```tsx
import { OptimizedImage } from '@/components/OptimizedImage'

<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={630}
  priority
/>
```

## Dark Mode

Dark mode is implemented using `next-themes` with:
- System preference detection
- Manual toggle
- Persistent theme selection
- No flash of unstyled content

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  navy: '#1e3a5f',
  gold: '#d4a574',
  red: '#8b3838',
}
```

### Fonts

The project uses system fonts by default for optimal performance. To use custom fonts, modify `lib/fonts.ts`.

### SEO Metadata

Update default SEO values in `lib/seo.ts`:

```typescript
const defaultMetadata = {
  title: 'Your Site Name',
  description: 'Your site description',
  keywords: ['keyword1', 'keyword2'],
  siteUrl: 'https://yoursite.com',
}
```

## Performance

This site is optimized for performance with:
- System font stack (no font downloads)
- Minimal JavaScript bundle
- Optimized images with modern formats
- Server-side rendering where appropriate
- Static generation for maximum speed

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
