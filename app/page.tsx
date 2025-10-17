import { Metadata } from 'next'
import { ThemeToggle } from '@/components/ThemeToggle'
import { OptimizedImage } from '@/components/OptimizedImage'

export const metadata: Metadata = {
  title: 'Christopher J. Bradley | Veteran, Father, Builder of Solutions',
  description: 'From combat veteran to systems reformer. A personal journey through war, loss, and awakening—building five platforms to help veterans, fathers, and families stay whole.',
  openGraph: {
    title: 'Christopher J. Bradley | Veteran, Father, Builder of Solutions',
    description: 'From combat veteran to systems reformer. A personal journey through war, loss, and awakening.',
    type: 'profile',
    images: [
      {
        url: '/images/christopher-bradley.jpg',
        width: 1200,
        height: 630,
        alt: 'Christopher J. Bradley',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christopher J. Bradley | Veteran, Father, Builder of Solutions',
    description: 'From combat veteran to systems reformer. A personal journey through war, loss, and awakening.',
    images: ['/images/christopher-bradley.jpg'],
  },
}

// JSON-LD Structured Data for Person
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Christopher J. Bradley',
  jobTitle: 'Veteran, Father, Builder of Solutions',
  description: 'Gulf War veteran, law school graduate, and creator of five platforms dedicated to time consciousness, love, family unity, and constitutional principles.',
  image: '/images/christopher-bradley.jpg',
  url: 'https://christopherjbradley.com',
  sameAs: [
    'https://thereisstilltime.com',
    'https://thecentralquestion.com',
    'https://sunsetsforthesoul.com',
    'https://thecitizenscompass.com',
    'https://theartofcitizenship.com',
    'https://libertysprinciplespals.com',
    'https://familyunityhub.com',
  ],
  knowsAbout: [
    'Military Service',
    'Veterans Affairs',
    'Family Court Reform',
    'Constitutional Law',
    'Time Consciousness',
    'Parental Rights',
  ],
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'United States Army',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Law School',
    },
  ],
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Header */}
      <header className="border-b border-navy/10 dark:border-slate-700">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-navy dark:text-slate-100">
                Christopher J. Bradley
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#story"
                className="text-sm font-medium text-navy/80 transition-colors hover:text-navy dark:text-slate-300 dark:hover:text-slate-100"
              >
                Story
              </a>
              <a
                href="#platforms"
                className="text-sm font-medium text-navy/80 transition-colors hover:text-navy dark:text-slate-300 dark:hover:text-slate-100"
              >
                Platforms
              </a>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative bg-gradient-to-b from-navy/5 to-white dark:from-slate-900/50 dark:to-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Hero Image */}
              <div className="order-1 lg:order-2">
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-2xl">
                  <OptimizedImage
                    src="/images/christopher-bradley.jpg"
                    alt="Christopher J. Bradley"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Hero Content */}
              <div className="order-2 lg:order-1 flex flex-col justify-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold tracking-tight text-navy dark:text-slate-100 sm:text-5xl md:text-6xl">
                    Christopher J. Bradley
                  </h2>
                  <p className="text-xl font-semibold text-gold sm:text-2xl">
                    Veteran • Father • Builder of Solutions
                  </p>
                  <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                    I lost my daughter to family courts. I fought for my country and came home to
                    systems that failed me. In that darkness, I found three truths—and built five
                    platforms to share them.
                  </p>
                  <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                    <a
                      href="#story"
                      className="rounded-lg bg-navy px-8 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy/90 dark:bg-slate-700 dark:hover:bg-slate-600"
                    >
                      Read My Story
                    </a>
                    <a
                      href="#platforms"
                      className="rounded-lg border-2 border-navy px-8 py-3 text-center text-sm font-semibold text-navy transition-all hover:bg-navy/5 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                    >
                      Explore the Tools
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Timeline Section */}
        <section id="story" className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                The Journey
              </h3>
              <p className="mt-4 text-lg text-navy/70 dark:text-slate-300">
                From service to betrayal. From loss to purpose.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-12">
              {/* 1970s-1980s: The Foundation */}
              <div className="relative border-l-4 border-navy/20 pl-8 dark:border-slate-700">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-navy dark:bg-slate-700"></div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  1970s-1980s: The Foundation
                </h4>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                  I had, in hindsight, a magical childhood in rural Pennsylvania—one that inspired
                  me to serve. My parents raised me to believe in service to others, in principles
                  that mattered, in something larger than myself.
                </p>
              </div>

              {/* 1991: The War */}
              <div className="relative border-l-4 border-red/30 pl-8 dark:border-red/20">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-red"></div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  1991: The War
                </h4>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                  At 19, I drove a tank in the Gulf War. I saw the worst of humanity while still a
                  child. The Army trained me to kill, but it did not train me how to live with the
                  killing.
                </p>
              </div>

              {/* 1990s: The Withering */}
              <div className="relative border-l-4 border-navy/20 pl-8 dark:border-slate-700">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-navy/60 dark:bg-slate-600"></div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  1990s: The Withering
                </h4>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                  I came home with invisible wounds. I packed the war away and tried to build a
                  life—college, law school. But inside, I was dying. Every night on TV, more
                  soldiers sent to kill. More of the man my parents raised me to be died inside. I
                  am not unique.
                </p>
              </div>

              {/* 2000s: The Light */}
              <div className="relative border-l-4 border-gold/40 pl-8">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-gold"></div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  2000s: The Light
                </h4>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                  I married my college sweetheart. She worked while I studied law. Then came the
                  miracle: our daughter. The greatest joy I had ever known. My wife got into medical
                  school—the Air Force paid for it. We managed. But perhaps she saw me withering.
                  Perhaps the man she married was disappearing.
                </p>
              </div>

              {/* The Loss */}
              <div className="relative border-l-4 border-red/30 pl-8 dark:border-red/20">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-red"></div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">The Loss</h4>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                  When medical school was done and she had her own career, she asked for a divorce.
                  Society said 'no one is at fault.' But I wondered: had the war made me someone she
                  could no longer recognize? After ten years of my daughter being my why—my reason
                  for everything—I was relegated to someone she visited. I tried to rebuild. I
                  remarried. But divorce came again.
                </p>
              </div>

              {/* The Darkness */}
              <div className="relative border-l-4 border-red/30 pl-8 dark:border-red/20">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-red/70"></div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  The Darkness
                </h4>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                  I struggled to make sense of it. Unable to function as the system demanded, I
                  found myself homeless in New York City. The VA that should have helped after the
                  first betrayal took nearly another decade to provide support—help that might have
                  made all the difference when everything fell apart. The family courts in Florida,
                  where the Air Force had assigned my ex-wife, substituted their own judgment for
                  mine about what was in my child's best interest. The courts I had studied—they
                  took my daughter from me. She graduated from high school in 2019. I have not seen
                  her since. Parental alienation. A father erased.
                </p>
              </div>

              {/* The Awakening */}
              <div className="relative border-l-4 border-gold/40 pl-8">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-gold"></div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  The Awakening
                </h4>
                <div className="space-y-4">
                  <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                    In that silence, stripped of everything, I found three truths:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-navy/80 dark:text-slate-300 pl-4">
                    <li className="leading-relaxed">Time is finite and precious</li>
                    <li className="leading-relaxed">Love is the only question that matters</li>
                    <li className="leading-relaxed">
                      Freedom dies when families are destroyed
                    </li>
                  </ol>
                  <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                    Embracing them has given me purpose.
                  </p>
                </div>
              </div>

              {/* The Work */}
              <div className="relative border-l-4 border-navy/20 pl-8 dark:border-slate-700">
                <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-navy dark:bg-slate-700"></div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">The Work</h4>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                  So I built these tools—for the daughter I hope to reach, for every veteran
                  fighting invisible battles, for every father being erased, for every family trying
                  to stay whole.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Five Platforms Section */}
        <section id="platforms" className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Five Platforms, One Mission
              </h3>
              <p className="mt-4 text-lg text-navy/70 dark:text-slate-300">
                Tools born from truth. Built to serve.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Platform 1: There Is Still Time */}
              <div className="group relative rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:bg-slate-800">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  There Is Still Time
                </h4>
                <p className="text-sm font-semibold text-gold mb-3">
                  For Those Who Need to Wake Up
                </p>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300 mb-4">
                  Time is finite and precious. Every second counts when you've already lost years. A
                  visual timer app that teaches presence and consciousness—no jarring alarms, just
                  awareness.
                </p>
                <a
                  href="https://thereisstilltime.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-navy transition-colors hover:text-gold dark:text-slate-100 dark:hover:text-gold"
                >
                  Visit Platform
                  <svg
                    className="ml-2 h-4 w-4"
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

              {/* Platform 2: The Central Question */}
              <div className="group relative rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:bg-slate-800">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  The Central Question
                </h4>
                <p className="text-sm font-semibold text-red mb-3">For Those Seeking Truth</p>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300 mb-4">
                  Love is the only question that matters. In six years of separation, I learned one
                  question changes everything: 'Are you feeling love this second?' A platform
                  exploring love consciousness.
                </p>
                <a
                  href="https://thecentralquestion.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-navy transition-colors hover:text-red dark:text-slate-100 dark:hover:text-red"
                >
                  Visit Platform
                  <svg
                    className="ml-2 h-4 w-4"
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

              {/* Platform 3: Sunsets for the Soul */}
              <div className="group relative rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:bg-slate-800">
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  Sunsets for the Soul
                </h4>
                <p className="text-sm font-semibold text-gold mb-3">For Those Finding Peace</p>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300 mb-4">
                  Beauty teaches presence. 3,000 sunsets from a sailboat on Boggy Bayou. In the
                  darkest times, I learned to find light. A gallery of contemplation, beauty, and
                  hope.
                </p>
                <a
                  href="https://sunsetsforthesoul.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-navy transition-colors hover:text-gold dark:text-slate-100 dark:hover:text-gold"
                >
                  Visit Platform
                  <svg
                    className="ml-2 h-4 w-4"
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

              {/* Platform 4: The Art of Citizenship */}
              <div className="group relative rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:bg-slate-800 sm:col-span-2 lg:col-span-2">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  The Art of Citizenship
                </h4>
                <p className="text-sm font-semibold text-navy mb-3 dark:text-slate-300">
                  For Those Teaching Freedom
                </p>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300 mb-4">
                  Freedom dies when families are destroyed. The principles I wanted to teach my
                  daughter—so she'd know how to protect her family and her freedom. Three ways to
                  learn: The Citizen's Compass (book), Constitutional Analyzer (AI tool), and
                  Liberty's Principles Pals (28 children's books).
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://thecitizenscompass.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-navy transition-colors hover:text-gold dark:text-slate-100 dark:hover:text-gold"
                  >
                    The Citizen's Compass
                    <svg
                      className="ml-2 h-4 w-4"
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
                  <span className="text-navy/30 dark:text-slate-600">•</span>
                  <a
                    href="https://theartofcitizenship.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-navy transition-colors hover:text-gold dark:text-slate-100 dark:hover:text-gold"
                  >
                    Constitutional Analyzer
                    <svg
                      className="ml-2 h-4 w-4"
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
                  <span className="text-navy/30 dark:text-slate-600">•</span>
                  <a
                    href="https://libertysprinciplespals.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-navy transition-colors hover:text-gold dark:text-slate-100 dark:hover:text-gold"
                  >
                    Liberty's Principles Pals
                    <svg
                      className="ml-2 h-4 w-4"
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

              {/* Platform 5: Family Unity Hub */}
              <div className="group relative rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:bg-slate-800 sm:col-span-2 lg:col-span-1">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  Family Unity Hub
                </h4>
                <p className="text-sm font-semibold text-red mb-3">For Those Ready to Fight</p>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300 mb-4">
                  From personal tragedy to collective action. 22 million children need federal
                  reform. Legislative tracking, expert network, community organizing, constitutional
                  analysis.
                </p>
                <a
                  href="https://familyunityhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-navy transition-colors hover:text-red dark:text-slate-100 dark:hover:text-red"
                >
                  Visit Platform
                  <svg
                    className="ml-2 h-4 w-4"
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
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <blockquote className="text-xl leading-relaxed text-navy/80 dark:text-slate-300 italic sm:text-2xl">
              "These platforms exist because I couldn't reach my daughter. If they help one veteran
              find peace, one father stay connected, one family stay whole—then perhaps her absence
              will have meaning."
            </blockquote>
            <p className="mt-6 text-lg font-semibold text-navy dark:text-slate-100">
              — Christopher J. Bradley
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy/10 bg-navy/5 dark:border-slate-700 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-navy/70 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Christopher J. Bradley. Veteran, Father, Builder of
              Solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
