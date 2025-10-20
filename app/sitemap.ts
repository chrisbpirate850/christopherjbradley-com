import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://christopherjbradley.com'

  // Add your static routes here
  const routes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/dear-world', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/about', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/family-court-reform', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/veterans-ptsd-custody', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/fighting-parental-alienation', priority: 0.7, changeFreq: 'monthly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))

  return routes
}
