import { Metadata, Viewport } from 'next'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  canonical?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

const defaultMetadata = {
  title: 'Christopher J. Bradley',
  description: 'Welcome to my website',
  keywords: ['Next.js', 'React', 'TypeScript', 'Web Development'],
  ogImage: '/og-image.jpg',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://christopherjbradley.com',
}

export function generateSEO({
  title,
  description = defaultMetadata.description,
  keywords = defaultMetadata.keywords,
  ogImage = defaultMetadata.ogImage,
  ogType = 'website',
  noindex = false,
  canonical,
  author,
  publishedTime,
  modifiedTime,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${defaultMetadata.title}` : defaultMetadata.title
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${defaultMetadata.siteUrl}${ogImage}`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : undefined,
    creator: defaultMetadata.title,
    publisher: defaultMetadata.title,
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      type: ogType,
      url: canonical || defaultMetadata.siteUrl,
      siteName: defaultMetadata.title,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      ...(publishedTime && ogType === 'article' ? { publishedTime } : {}),
      ...(modifiedTime && ogType === 'article' ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: '@yourusername',
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  }

  return metadata
}

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleSchema({
  title,
  description,
  publishedTime,
  modifiedTime,
  author,
  image,
  url,
}: {
  title: string
  description: string
  publishedTime: string
  modifiedTime?: string
  author: string
  image: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: defaultMetadata.title,
      logo: {
        '@type': 'ImageObject',
        url: `${defaultMetadata.siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

export function generateOrganizationSchema({
  name,
  url,
  logo,
  description,
  email,
  phone,
  address,
}: {
  name: string
  url: string
  logo: string
  description: string
  email?: string
  phone?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    ...(email ? { email } : {}),
    ...(phone ? { telephone: phone } : {}),
    ...(address
      ? {
          address: {
            '@type': 'PostalAddress',
            ...address,
          },
        }
      : {}),
  }
}

export function generateWebsiteSchema({ name, url, description }: { name: string; url: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
