import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { OptimizedImage } from '@/components/OptimizedImage'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dear World: Love Everyone Message | Christopher J. Bradley - Gulf War Veteran',
  description: 'What if you are the person we are all waiting on? A handwritten letter from Gulf War veteran Christopher J. Bradley about choosing love, forgiveness, and peace. Written on the back of his basic training photo after 10 years on a sailboat and 2000 sunsets. If we each decided to love everyone, it would be game over - love wins.',
  keywords: [
    'dear world',
    'love everyone',
    'choose love',
    'world peace message',
    'forgiveness letter',
    'Gulf War veteran message',
    'Christopher J Bradley letter',
    'love everyone movement',
    'peace consciousness',
    'what if you are the person',
    'love wins',
    'forgive everyone',
    'make peace',
    'sailboat wisdom',
    'veteran wisdom',
    'love your neighbors',
    'love your family',
    'choosing peace',
    'love everyone love',
    'handwritten letter love',
  ],
  authors: [{ name: 'Christopher J. Bradley' }],
  creator: 'Christopher J. Bradley',
  publisher: 'Christopher J. Bradley',
  openGraph: {
    title: 'Dear World: What If You Are The Person We Are All Waiting On?',
    description: 'A Gulf War veteran\'s message: "We could all live in peace if each of us simply made peace with every person we know. If we each decided to love everyone, it would be game over - love wins. How about it?"',
    type: 'article',
    url: 'https://christopherjbradley.com/dear-world',
    siteName: 'Christopher J. Bradley',
    images: [
      {
        url: '/images/front of love everyone letter.jpg',
        width: 1200,
        height: 900,
        alt: 'Dear World - A handwritten letter about choosing love from Gulf War veteran Christopher J. Bradley',
      },
      {
        url: '/images/back of lover everyone letter.jpg',
        width: 1200,
        height: 1600,
        alt: 'Christopher J. Bradley in basic training - where the journey began',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dear World: What If You\'re The Person We\'re All Waiting On?',
    description: 'A veteran\'s message: Love everyone, start with you. If we each decided to love everyone, it would be game over - love wins. How about it?',
    images: ['/images/front of love everyone letter.jpg'],
  },
  alternates: {
    canonical: 'https://christopherjbradley.com/dear-world',
  },
}

// JSON-LD Structured Data - Enhanced for AI discovery
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dear World: What If You Are The Person We Are All Waiting On?',
  alternativeHeadline: 'Love Everyone - A Gulf War Veteran\'s Message of Peace and Forgiveness',
  author: {
    '@type': 'Person',
    name: 'Christopher J. Bradley',
    url: 'https://christopherjbradley.com',
    jobTitle: 'Gulf War Veteran, Love Advocate',
    description: 'Gulf War veteran who discovered the greatest lesson after 10 years on a sailboat: Love everyone, start with you',
  },
  datePublished: '2025-10-19',
  dateModified: '2025-10-19',
  image: [
    '/images/front of love everyone letter.jpg',
    '/images/back of lover everyone letter.jpg',
  ],
  description: 'What if you are the person the whole world is waiting for to decide to love everyone? A handwritten letter about choosing love, forgiveness, and peace. Written by Gulf War veteran Christopher J. Bradley on the back of his basic training photo.',
  articleBody: 'I\'m Christopher J. Bradley. For most of the last decade, I have lived on a sailboat along the northwest gulf coast of Florida. I photographed over 2,000 sunsets in the same sacred space and learned the greatest lesson: Life is simple, love everyone and start with you. What if I was the person the whole world was waiting for to decide to love everyone? What if you are the person we are all waiting on? The truth remains that we could all live in peace on this earth if each of us simply made peace with every person we know. If everyone forgave their family members for their shortcomings, forgave their coworkers and their neighbors. If we each made peace and decided to love everyone it would be game over love wins.',
  keywords: 'love everyone, choose love, world peace, forgiveness, Gulf War veteran, Christopher J Bradley, peace consciousness, love wins, sailboat life, sunsets',
  about: [
    {
      '@type': 'Thing',
      name: 'Love Everyone Philosophy',
      description: 'The belief that world peace is possible if each person chooses to love everyone',
    },
    {
      '@type': 'Thing',
      name: 'Forgiveness',
      description: 'Forgiving family members, coworkers, and neighbors as a path to peace',
    },
    {
      '@type': 'Thing',
      name: 'Peace Consciousness',
      description: 'Making peace with every person you know',
    },
  ],
  mentions: [
    {
      '@type': 'WebSite',
      name: 'Love Everyone',
      url: 'https://loveeveryone.love',
    },
    {
      '@type': 'WebSite',
      name: 'Sunsets for the Soul',
      url: 'https://sunsetsforthesoul.com',
    },
  ],
}

export default function DearWorldPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <Navigation showHomeLink={true} />

      {/* Main Content */}
      <main className="bg-gradient-to-b from-amber-50/30 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 sm:text-5xl mb-4">
              Dear World
            </h1>
            <p className="text-lg text-navy/70 dark:text-slate-300">
              A letter about love, peace, and the greatest lesson
            </p>
          </div>

          {/* The Letter */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden border-2 border-amber-200/50 dark:border-amber-700/30">
            {/* Letter Image */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800">
              <OptimizedImage
                src="/images/front of love everyone letter.jpg"
                alt="Dear World - A handwritten letter from Christopher J. Bradley"
                fill
                className="object-contain p-4"
                priority
              />
            </div>

            {/* Context Section */}
            <div className="p-8 sm:p-12 bg-gradient-to-br from-amber-50/50 to-yellow-50/30 dark:from-slate-800/50 dark:to-slate-900/50 border-t-2 border-amber-200/50 dark:border-amber-700/30">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  The Story Behind the Letter
                </h2>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  This letter was written on the back of my basic training photograph - connecting
                  the young soldier I was to the message of love I carry today. For most of the
                  last decade, I lived on a sailboat along the northwest gulf coast of Florida,
                  where I learned the greatest lesson: Life is simple, love everyone and start with
                  you.
                </p>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed mb-6">
                  I photographed over 2,000 sunsets in that same sacred space (you can see them at{' '}
                  <a
                    href="https://sunsetsforthesoul.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline font-semibold"
                  >
                    sunsetsforthesoul.com
                  </a>
                  ), and in those quiet moments between day and night, I discovered a simple truth:
                  we could all live in peace on this earth if each of us simply made peace with
                  every person we know.
                </p>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-l-4 border-gold">
                  <p className="text-lg italic text-navy/90 dark:text-slate-200 mb-2">
                    "What if you are the person we are all waiting on?"
                  </p>
                  <p className="text-navy/70 dark:text-slate-300 text-sm">
                    Not really a question is it? It really shouldn't be.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mt-8 mb-4">
                  Learn More
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  You can learn more about choosing to love everyone at{' '}
                  <a
                    href="https://loveeveryone.love"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline font-semibold"
                  >
                    loveeveryone.love
                  </a>
                  .
                </p>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  If we each made peace and decided to love everyone, it would be game over - love
                  wins.
                </p>

                <div className="mt-8 pt-6 border-t border-amber-200 dark:border-amber-700/30 text-center">
                  <p className="text-xl font-semibold text-navy dark:text-slate-100 mb-2">
                    How about it?
                  </p>
                  <p className="text-lg text-navy/70 dark:text-slate-300 italic">
                    Love you all,
                    <br />
                    <span className="text-2xl font-serif text-gold">Chris</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Photo on the Back */}
          <div className="mt-12 bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden border-2 border-navy/20 dark:border-slate-700">
            <div className="p-6 sm:p-8 bg-gradient-to-br from-navy/5 to-slate-50 dark:from-slate-800 dark:to-slate-900">
              <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4 text-center">
                Written on the Back of This Photo
              </h3>
              <p className="text-center text-navy/70 dark:text-slate-300 mb-6">
                My basic training photograph - where this journey began
              </p>
              <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-lg overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/images/back of lover everyone letter.jpg"
                  alt="Christopher J. Bradley in basic training - United States Army"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-center text-sm text-navy/60 dark:text-slate-400 mt-4 italic">
                From that young soldier to the message of love everyone - a journey of service,
                loss, and awakening
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-navy dark:text-slate-100 hover:text-gold dark:hover:text-gold transition-colors font-semibold"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Christopher J. Bradley
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy/10 bg-navy/5 dark:border-slate-700 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-navy/70 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Christopher J. Bradley. Love you all.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
