# SEO Implementation Guide

This document explains how to use the SEO utilities in this Next.js project.

## Basic Page SEO

For any page in the `app/` directory, export metadata using the `generateSEO` helper:

```typescript
import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'About',
  description: 'Learn more about our company',
  keywords: ['About', 'Company', 'Team'],
})
```

## Available SEO Options

```typescript
interface SEOProps {
  title?: string              // Page title (appended to site name)
  description?: string        // Meta description
  keywords?: string[]        // SEO keywords
  ogImage?: string           // Open Graph image URL
  ogType?: 'website' | 'article'  // Page type
  noindex?: boolean          // Prevent search engine indexing
  canonical?: string         // Canonical URL
  author?: string            // Author name (for articles)
  publishedTime?: string     // Publication date (for articles)
  modifiedTime?: string      // Last modified date (for articles)
}
```

## Structured Data (Schema.org)

### Website Schema

Already implemented in the root layout:

```typescript
import { generateWebsiteSchema } from '@/lib/seo'
import { StructuredData } from '@/components/StructuredData'

const websiteSchema = generateWebsiteSchema({
  name: 'Your Site Name',
  url: 'https://yoursite.com',
  description: 'Your site description',
})

// In your component JSX:
<StructuredData data={websiteSchema} />
```

### Article Schema

For blog posts or articles:

```typescript
import { generateArticleSchema } from '@/lib/seo'
import { StructuredData } from '@/components/StructuredData'

const articleSchema = generateArticleSchema({
  title: 'Article Title',
  description: 'Article description',
  publishedTime: '2024-01-01T00:00:00Z',
  modifiedTime: '2024-01-02T00:00:00Z',
  author: 'Author Name',
  image: 'https://yoursite.com/article-image.jpg',
  url: 'https://yoursite.com/blog/article-slug',
})

// In your component JSX:
<StructuredData data={articleSchema} />
```

### Breadcrumb Schema

For hierarchical navigation:

```typescript
import { generateBreadcrumbSchema } from '@/lib/seo'
import { StructuredData } from '@/components/StructuredData'

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://yoursite.com' },
  { name: 'Blog', url: 'https://yoursite.com/blog' },
  { name: 'Article Title', url: 'https://yoursite.com/blog/article' },
])

// In your component JSX:
<StructuredData data={breadcrumbSchema} />
```

### Organization Schema

For company information:

```typescript
import { generateOrganizationSchema } from '@/lib/seo'
import { StructuredData } from '@/components/StructuredData'

const orgSchema = generateOrganizationSchema({
  name: 'Company Name',
  url: 'https://yoursite.com',
  logo: 'https://yoursite.com/logo.png',
  description: 'Company description',
  email: 'contact@yoursite.com',
  phone: '+1-555-555-5555',
  address: {
    streetAddress: '123 Main St',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'US',
  },
})

// In your component JSX:
<StructuredData data={orgSchema} />
```

## Sitemap Configuration

The sitemap is automatically generated at `/sitemap.xml`. To add new routes, edit `app/sitemap.ts`:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'

  const routes = [
    '',           // Home page
    '/about',     // About page
    '/contact',   // Contact page
    '/blog',      // Add new routes here
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
```

## Robots.txt Configuration

Configure search engine crawling rules in `app/robots.ts`:

```typescript
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],  // Add paths to block
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

## Open Graph Images

For social media sharing, provide OG images:

```typescript
export const metadata: Metadata = generateSEO({
  title: 'Page Title',
  description: 'Page description',
  ogImage: '/og-images/page-specific.jpg',  // Must be 1200x630px
})
```

## Best Practices

1. **Title Length**: Keep titles under 60 characters
2. **Description Length**: Keep descriptions between 150-160 characters
3. **Keywords**: Use 5-10 relevant keywords maximum
4. **Images**: OG images should be 1200x630px for optimal display
5. **Canonical URLs**: Always set canonical URLs for duplicate content
6. **Structured Data**: Add relevant schema markup for better rich snippets
7. **Mobile**: All pages are mobile-first responsive by default

## Testing SEO

### Tools to Test Your SEO:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **Open Graph Debugger**: https://developers.facebook.com/tools/debug/
4. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
5. **Lighthouse**: Built into Chrome DevTools

### Manual Checks:

```bash
# View sitemap
curl http://localhost:3000/sitemap.xml

# View robots.txt
curl http://localhost:3000/robots.txt

# Check meta tags
curl http://localhost:3000 | grep -i "meta"
```

## Environment Variables

Set your production URL in `.env.local`:

```
NEXT_PUBLIC_SITEMAP_URL=https://yoursite.com
```

This ensures correct canonical URLs and sitemap generation.
