import { Metadata } from 'next'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { OptimizedImage } from '@/components/OptimizedImage'

export const metadata: Metadata = {
  title: 'Sunset Photography Gallery & Prints | Sunsets for the Soul',
  description:
    '3,000+ sunset photographs captured from a sailboat on Boggy Bayou, Florida. Six years of documenting beauty during darkness. Premium prints, canvas, and digital downloads available.',
  openGraph: {
    title: 'Sunset Photography Gallery & Prints | Sunsets for the Soul',
    description:
      '3,000+ sunset photographs from a sailboat. Six years of presence and beauty.',
    type: 'website',
    images: [
      {
        url: '/images/sunsets-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunset from Boggy Bayou - Sunsets for the Soul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunset Photography Gallery & Prints | Sunsets for the Soul',
    description:
      '3,000+ sunset photographs from a sailboat. Six years of presence and beauty.',
    images: ['/images/sunsets-og.jpg'],
  },
}

// JSON-LD Structured Data
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Sunsets for the Soul - Photography Prints',
  description:
    'Premium sunset photography prints captured from a sailboat on Boggy Bayou. Over 3,000 authentic sunset photographs available as prints, canvas wraps, and digital downloads.',
  brand: {
    '@type': 'Brand',
    name: 'Sunsets for the Soul',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '15.00',
    highPrice: '250.00',
    offerCount: '3000',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
  },
  image: '/images/sunsets-og.jpg',
  url: 'https://sunsetsforthesoul.com',
  creator: {
    '@type': 'Person',
    name: 'Christopher J. Bradley',
    url: 'https://christopherjbradley.com',
  },
}

export default function SunsetGalleryPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Header */}
      <header className="border-b border-navy/10 dark:border-slate-700">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-xl font-bold text-navy dark:text-slate-100 hover:text-gold transition-colors"
              >
                Christopher J. Bradley
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-navy/80 transition-colors hover:text-navy dark:text-slate-300 dark:hover:text-slate-100"
              >
                Home
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gold/10 to-white dark:from-slate-900/50 dark:to-slate-950">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold/20">
                <svg
                  className="h-10 w-10 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-navy dark:text-slate-100 sm:text-5xl md:text-6xl">
                3,000 Sunsets from a Sailboat on Boggy Bayou
              </h1>
              <p className="mt-6 text-lg text-navy/70 dark:text-slate-300">
                Sunsets for the Soul
              </p>
            </div>
          </div>
        </section>

        {/* Opening Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                For six years, I lived aboard a sailboat in Florida, documenting every sunset I
                could capture. What began as a practice of presence during the darkest period of my
                life became a collection of over 3,000 sunset photographs—each one a meditation on
                light, beauty, and the gift of another day.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                These aren't studio shots or edited fantasies. They're real moments from real
                evenings on the water. Sailboat masts silhouetted against burning skies. Pelicans
                gliding through golden hour. The exact second when day surrenders to night. Each
                photograph is a reminder: even on the hardest days, there is beauty. Even in
                darkness, there is light.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                Available as premium prints, canvas wraps, and digital downloads. Every purchase
                supports the continuation of this project and the educational platforms I've built
                for families and veterans.
              </p>
            </div>
          </div>
        </section>

        {/* Sample Gallery Preview */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Featured Sunsets
              </h2>
              <p className="mt-4 text-lg text-navy/70 dark:text-slate-300">
                A glimpse into the collection
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Placeholder for actual gallery images */}
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-navy/10 dark:bg-slate-800 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-red/30 to-navy/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-sm text-navy/50 dark:text-slate-400">
                      Sunset #{num * 500}
                    </p>
                  </div>
                  {/* Overlay with view button */}
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="rounded-lg bg-gold px-6 py-2 text-sm font-semibold text-navy">
                      View Full Size
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://sunsetsforthesoul.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-navy font-semibold hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
              >
                Browse Full Gallery (3,000+ Photos)
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Why Different Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Why These Sunsets Are Different
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {/* Authentic Moments */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                  <svg
                    className="h-6 w-6 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Authentic Moments, Not Staged Scenes
                </h3>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                  Every photograph captured in real-time from my sailboat. No artificial
                  enhancements. No stock photo feeling. Just honest, lived beauty.
                </p>
              </div>

              {/* Six Years */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red/10">
                  <svg
                    className="h-6 w-6 text-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Six Years of Dedication
                </h3>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                  3,000+ sunsets documented. Each one unique. Each one earned by showing up, being
                  present, and watching the sky perform.
                </p>
              </div>

              {/* From Water */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10">
                  <svg
                    className="h-6 w-6 text-navy dark:text-slate-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Shot from the Water
                </h3>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                  Nautical perspective you can't get from land. Sailboat details. Marine life. The
                  intimacy of being surrounded by water as day ends.
                </p>
              </div>

              {/* Seasonal */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                  <svg
                    className="h-6 w-6 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Seasonal Variations
                </h3>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                  Summer's fiery oranges. Winter's subtle pastels. Storm sunsets with dramatic
                  clouds. Clear evening serenity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Perfect For
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {/* Home & Office */}
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Home & Office Decor
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Living rooms seeking coastal calm
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Offices needing stress-reducing art
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Bedrooms wanting peaceful energy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">Meditation spaces</span>
                  </li>
                </ul>
              </div>

              {/* Nautical & Coastal */}
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Nautical & Coastal Themes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Sailboat enthusiasts and marina clubs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Beach houses and coastal properties
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Ocean lovers and water sports communities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Florida memories and bayou heritage
                    </span>
                  </li>
                </ul>
              </div>

              {/* Gifts */}
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Meaningful Gifts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-red flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Veterans seeking peace and contemplation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-red flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Loved ones going through difficult times
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-red flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Retirement celebrations and new chapters
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-red flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Memorials reminding us beauty remains
                    </span>
                  </li>
                </ul>
              </div>

              {/* Wellness */}
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Wellness & Therapy Spaces
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-navy dark:text-slate-100 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Counseling offices and therapy rooms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-navy dark:text-slate-100 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Yoga studios and wellness centers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-navy dark:text-slate-100 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      VA hospitals and veteran support centers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-navy dark:text-slate-100 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy/80 dark:text-slate-300">
                      Hospice and healing environments
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Print Options Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Print Options & Formats
              </h2>
              <p className="mt-4 text-lg text-navy/70 dark:text-slate-300">
                Museum-quality prints for any space
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {/* Premium Prints */}
              <div className="rounded-lg border-2 border-gold p-8 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                  <svg
                    className="h-8 w-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  Premium Prints
                </h3>
                <p className="text-sm text-navy/70 dark:text-slate-300 mb-4">
                  Professional photo paper. Archival quality. Multiple sizes from 8x10 to 24x36.
                </p>
                <p className="text-2xl font-bold text-gold">$15 - $75</p>
              </div>

              {/* Canvas Wraps */}
              <div className="rounded-lg border-2 border-navy p-8 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-navy/10">
                  <svg
                    className="h-8 w-8 text-navy dark:text-slate-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  Canvas Wraps
                </h3>
                <p className="text-sm text-navy/70 dark:text-slate-300 mb-4">
                  Gallery-wrapped canvas. Ready to hang. Statement pieces for any wall.
                </p>
                <p className="text-2xl font-bold text-navy dark:text-slate-100">$85 - $250</p>
              </div>

              {/* Digital Downloads */}
              <div className="rounded-lg border-2 border-red p-8 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red/10">
                  <svg
                    className="h-8 w-8 text-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  Digital Downloads
                </h3>
                <p className="text-sm text-navy/70 dark:text-slate-300 mb-4">
                  High-resolution files. Print yourself. Use as backgrounds. Instant delivery.
                </p>
                <p className="text-2xl font-bold text-red">$15 - $35</p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Why I Photograph Sunsets
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <blockquote className="border-l-4 border-gold pl-6 italic text-lg text-navy/80 dark:text-slate-300">
                "In the darkest period of my life—separated from my daughter, living on a
                sailboat, trying to find reasons to keep going—the sunsets taught me something
                crucial: beauty doesn't wait for you to be ready. It shows up anyway. Every evening,
                regardless of how I felt, the sky performed. And if I showed up too, if I paid
                attention, I'd witness something extraordinary."
              </blockquote>
              <p className="text-navy/80 dark:text-slate-300 mt-6">
                <strong className="text-navy dark:text-slate-100">— Christopher J. Bradley</strong>
              </p>
              <p className="text-navy/80 leading-relaxed dark:text-slate-300 mt-6">
                These photographs are more than pretty pictures. They're evidence of showing up.
                They're proof that even when everything feels broken, the world still offers moments
                of transcendent beauty. Each sunset reminded me that endings can be gorgeous. That
                darkness always follows light, but light always returns.
              </p>
              <p className="text-navy/80 leading-relaxed dark:text-slate-300 mt-6">
                Every purchase supports my work building platforms for veterans, fathers, and
                families—turning personal loss into collective healing.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gold to-gold/80 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl mb-6">
              Explore the Full Collection
            </h2>
            <p className="text-xl text-navy/90 mb-8 max-w-2xl mx-auto">
              Browse 3,000+ sunset photographs. Find the perfect piece for your space. Bring coastal
              calm and beauty into your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://sunsetsforthesoul.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-navy px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-navy/90 hover:shadow-xl"
              >
                Visit Gallery & Shop
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border-2 border-navy px-8 py-4 text-lg font-semibold text-navy transition-all hover:bg-navy/10"
              >
                Explore Other Platforms
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy/10 bg-navy/5 dark:border-slate-700 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-navy/70 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Christopher J. Bradley. All sunset photographs
              captured on Boggy Bayou, Florida.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
