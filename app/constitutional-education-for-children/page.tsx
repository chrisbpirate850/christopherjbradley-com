import { Metadata } from 'next'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Teaching Kids About the Constitution | Liberty\'s Principles for Families',
  description:
    'Educational resources teaching children the 28 principles that built America. Liberty\'s Principles Pals, The Citizen\'s Compass, and Constitutional Analyzer for homeschool families.',
  openGraph: {
    title: 'Teaching Kids About the Constitution | Liberty\'s Principles for Families',
    description:
      'Educational resources teaching children the 28 principles that built America.',
    type: 'website',
    images: [
      {
        url: '/images/constitutional-education-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Liberty\'s Principles for Families',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teaching Kids About the Constitution | Liberty\'s Principles for Families',
    description:
      'Educational resources teaching children the 28 principles that built America.',
    images: ['/images/constitutional-education-og.jpg'],
  },
}

// JSON-LD Structured Data
const educationalSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'The Art of Citizenship',
  description:
    'Educational resources teaching children the 28 constitutional principles that built America, including Liberty\'s Principles Pals children\'s books.',
  url: 'https://theartofcitizenship.com',
  founder: {
    '@type': 'Person',
    name: 'Christopher J. Bradley',
    url: 'https://christopherjbradley.com',
  },
  educationalCredentialAwarded: 'Constitutional Literacy',
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'student',
    audienceType: 'Children ages 5-18',
  },
}

export default function ConstitutionalEducationPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalSchema) }}
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
        <section className="relative bg-gradient-to-b from-red/10 to-white dark:from-slate-900/50 dark:to-slate-950">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-navy/20">
                <svg
                  className="h-10 w-10 text-navy dark:text-slate-100"
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
              <h1 className="text-4xl font-bold tracking-tight text-navy dark:text-slate-100 sm:text-5xl md:text-6xl">
                Teaching Your Children the 28 Principles That Built America
              </h1>
              <p className="mt-6 text-lg text-navy/70 dark:text-slate-300">
                Liberty's Principles for Families
              </p>
            </div>
          </div>
        </section>

        {/* Opening Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-red/5 border-l-4 border-red p-6 mb-8 dark:bg-slate-800/50">
                <p className="text-lg font-semibold text-navy dark:text-slate-100 mb-2">
                  The Crisis of Constitutional Illiteracy
                </p>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>
                    <strong>86%</strong> of Americans can't name all three branches of government
                  </li>
                  <li>
                    <strong>37%</strong> can't name a single First Amendment right
                  </li>
                  <li>
                    An entire generation is growing up without understanding the principles that
                    made freedom possible
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                As a father who lost the ability to teach his own daughter, I created the
                educational tools I wish I'd had—resources that make constitutional principles
                accessible, engaging, and meaningful for children. Whether you homeschool,
                supplement public education, or simply want to pass on America's founding wisdom,
                these tools help you raise constitutionally literate kids.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                <strong>Not partisan. Not preachy.</strong> Just the timeless principles that our
                founders believed were essential for preserving liberty—taught through stories,
                activities, and real-world applications your kids will actually understand.
              </p>
            </div>
          </div>
        </section>

        {/* The 28 Principles Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                The 28 Principles of Freedom
              </h2>
              <p className="mt-4 text-lg text-navy/70 dark:text-slate-300">
                Based on the groundbreaking research in <em>The 5000 Year Leap</em> by W. Cleon
                Skousen
              </p>
            </div>

            <div className="space-y-8">
              {/* Foundational Principles */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold font-bold">
                    1-5
                  </span>
                  Foundational Principles
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="border-l-4 border-gold pl-4">
                    <p className="text-sm font-semibold text-gold mb-1">Principle 1</p>
                    <p className="text-navy/80 dark:text-slate-300">Natural Law as Foundation</p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <p className="text-sm font-semibold text-gold mb-1">Principle 2</p>
                    <p className="text-navy/80 dark:text-slate-300">
                      Government Based on Virtue
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <p className="text-sm font-semibold text-gold mb-1">Principle 3</p>
                    <p className="text-navy/80 dark:text-slate-300">
                      Religion's Role in Morality
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <p className="text-sm font-semibold text-gold mb-1">Principle 4</p>
                    <p className="text-navy/80 dark:text-slate-300">Divine Law & Human Law</p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <p className="text-sm font-semibold text-gold mb-1">Principle 5</p>
                    <p className="text-navy/80 dark:text-slate-300">
                      Creator as Source of Rights
                    </p>
                  </div>
                </div>
              </div>

              {/* Rights & Liberties */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red/20 text-red font-bold">
                    6-8
                  </span>
                  Rights & Liberties
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="border-l-4 border-red pl-4">
                    <p className="text-sm font-semibold text-red mb-1">Principle 6</p>
                    <p className="text-navy/80 dark:text-slate-300">All Men Are Created Equal</p>
                  </div>
                  <div className="border-l-4 border-red pl-4">
                    <p className="text-sm font-semibold text-red mb-1">Principle 7</p>
                    <p className="text-navy/80 dark:text-slate-300">Equal Rights Protection</p>
                  </div>
                  <div className="border-l-4 border-red pl-4">
                    <p className="text-sm font-semibold text-red mb-1">Principle 8</p>
                    <p className="text-navy/80 dark:text-slate-300">Unalienable Rights</p>
                  </div>
                </div>
              </div>

              {/* Governance Structure */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy dark:text-slate-100 font-bold">
                    9-13
                  </span>
                  Governance Structure
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="border-l-4 border-navy pl-4">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Principle 9
                    </p>
                    <p className="text-navy/80 dark:text-slate-300">Higher Law Code</p>
                  </div>
                  <div className="border-l-4 border-navy pl-4">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Principle 10
                    </p>
                    <p className="text-navy/80 dark:text-slate-300">Popular Sovereignty</p>
                  </div>
                  <div className="border-l-4 border-navy pl-4">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Principle 11
                    </p>
                    <p className="text-navy/80 dark:text-slate-300">Right to Alter Government</p>
                  </div>
                  <div className="border-l-4 border-navy pl-4">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Principle 12
                    </p>
                    <p className="text-navy/80 dark:text-slate-300">Republican Government Form</p>
                  </div>
                  <div className="border-l-4 border-navy pl-4">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Principle 13
                    </p>
                    <p className="text-navy/80 dark:text-slate-300">Written Constitution</p>
                  </div>
                </div>
              </div>

              {/* Economic Freedom */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold font-bold">
                    14-16
                  </span>
                  Economic Freedom
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="border-l-4 border-gold pl-4">
                    <p className="text-sm font-semibold text-gold mb-1">Principle 14</p>
                    <p className="text-navy/80 dark:text-slate-300">Property Rights</p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <p className="text-sm font-semibold text-gold mb-1">Principle 15</p>
                    <p className="text-navy/80 dark:text-slate-300">Free Market Economics</p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <p className="text-sm font-semibold text-gold mb-1">Principle 16</p>
                    <p className="text-navy/80 dark:text-slate-300">
                      Limited Government in Economy
                    </p>
                  </div>
                </div>
              </div>

              {/* System Design */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red/20 text-red font-bold">
                    17-22
                  </span>
                  System Design
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="border-l-4 border-red pl-4">
                    <p className="text-sm font-semibold text-red mb-1">Principle 17</p>
                    <p className="text-navy/80 dark:text-slate-300">Separation of Powers</p>
                  </div>
                  <div className="border-l-4 border-red pl-4">
                    <p className="text-sm font-semibold text-red mb-1">Principle 18</p>
                    <p className="text-navy/80 dark:text-slate-300">Checks and Balances</p>
                  </div>
                  <div className="border-l-4 border-red pl-4">
                    <p className="text-sm font-semibold text-red mb-1">Principle 19</p>
                    <p className="text-navy/80 dark:text-slate-300">Limited Federal Powers</p>
                  </div>
                  <div className="border-l-4 border-red pl-4">
                    <p className="text-sm font-semibold text-red mb-1">Principle 20</p>
                    <p className="text-navy/80 dark:text-slate-300">
                      Majority Rule, Minority Rights
                    </p>
                  </div>
                  <div className="border-l-4 border-red pl-4">
                    <p className="text-sm font-semibold text-red mb-1">Principle 21</p>
                    <p className="text-navy/80 dark:text-slate-300">Strong Local Government</p>
                  </div>
                  <div className="border-l-4 border-red pl-4">
                    <p className="text-sm font-semibold text-red mb-1">Principle 22</p>
                    <p className="text-navy/80 dark:text-slate-300">Rule of Law</p>
                  </div>
                </div>
              </div>

              {/* Sustaining Freedom */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy dark:text-slate-100 font-bold">
                    23-28
                  </span>
                  Sustaining Freedom
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="border-l-4 border-navy pl-4">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Principle 23
                    </p>
                    <p className="text-navy/80 dark:text-slate-300">
                      Education for Citizenship
                    </p>
                  </div>
                  <div className="border-l-4 border-navy pl-4">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Principle 24
                    </p>
                    <p className="text-navy/80 dark:text-slate-300">Peace Through Strength</p>
                  </div>
                  <div className="border-l-4 border-navy pl-4">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Principle 25
                    </p>
                    <p className="text-navy/80 dark:text-slate-300">Avoiding Foreign Alliances</p>
                  </div>
                  <div className="border-l-4 border-navy pl-4">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Principle 26
                    </p>
                    <p className="text-navy/80 dark:text-slate-300">Balanced Budget</p>
                  </div>
                  <div className="border-l-4 border-navy pl-4">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Principle 27
                    </p>
                    <p className="text-navy/80 dark:text-slate-300">
                      Government by Consent
                    </p>
                  </div>
                  <div className="border-l-4 border-navy pl-4">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Principle 28
                    </p>
                    <p className="text-navy/80 dark:text-slate-300">Protecting the Constitution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Learning Tools Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Three Ways to Learn
              </h2>
              <p className="mt-4 text-lg text-navy/70 dark:text-slate-300">
                Educational tools for every age and learning style
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Liberty's Principles Pals */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-t-4 border-gold">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-3">
                  Liberty's Principles Pals
                </h3>
                <p className="text-sm font-semibold text-gold mb-3">Ages 5-12</p>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300 mb-4">
                  28 illustrated children's books—one for each constitutional principle. Story-based
                  learning that makes complex ideas accessible. Perfect for bedtime reading or
                  homeschool curriculum.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Engaging characters and stories
                  </li>
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Age-appropriate explanations
                  </li>
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Discussion questions included
                  </li>
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Print & digital formats
                  </li>
                </ul>
                <a
                  href="https://libertysprinciplespals.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
                >
                  Explore the Books
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* The Citizen's Compass */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-t-4 border-navy">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-3">
                  The Citizen's Compass
                </h3>
                <p className="text-sm font-semibold text-navy dark:text-slate-300 mb-3">
                  Ages 13-18 & Adults
                </p>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300 mb-4">
                  Comprehensive book covering all 28 principles in depth. Historical context,
                  modern applications, and critical thinking exercises. Perfect for high schoolers
                  and parents learning together.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-navy dark:text-slate-100 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Deep historical research
                  </li>
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-navy dark:text-slate-100 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Modern case studies
                  </li>
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-navy dark:text-slate-100 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Primary source documents
                  </li>
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-navy dark:text-slate-100 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Study guide included
                  </li>
                </ul>
                <a
                  href="https://thecitizenscompass.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-navy hover:text-navy/80 transition-colors dark:text-slate-100"
                >
                  Read the Book
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Constitutional Analyzer */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-t-4 border-red">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-3">
                  Constitutional Analyzer
                </h3>
                <p className="text-sm font-semibold text-red mb-3">All Ages</p>
                <p className="text-navy/80 leading-relaxed dark:text-slate-300 mb-4">
                  AI-powered tool that analyzes laws, bills, and policies against constitutional
                  principles. Submit any proposed law and see which of the 28 principles it
                  supports or violates.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-red flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Instant constitutional analysis
                  </li>
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-red flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Current events application
                  </li>
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-red flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Educational explanations
                  </li>
                  <li className="flex items-start gap-2 text-sm text-navy/80 dark:text-slate-300">
                    <svg
                      className="h-5 w-5 text-red flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free to use
                  </li>
                </ul>
                <a
                  href="https://theartofcitizenship.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-red hover:text-red/80 transition-colors"
                >
                  Try the Analyzer
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Age-Appropriate Learning Paths */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Age-Appropriate Learning Paths
              </h2>
            </div>

            <div className="space-y-6">
              {/* Ages 5-8 */}
              <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Ages 5-8: Foundation Stories
                </h3>
                <p className="text-navy/80 dark:text-slate-300 mb-4">
                  Start with Liberty's Principles Pals books focusing on basic concepts like
                  fairness, rules, and treating others equally. Read 1-2 principles per month
                  through engaging stories.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-sm text-gold">
                    Equality
                  </span>
                  <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-sm text-gold">
                    Fairness
                  </span>
                  <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-sm text-gold">
                    Rules
                  </span>
                  <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-sm text-gold">
                    Rights
                  </span>
                </div>
              </div>

              {/* Ages 9-12 */}
              <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Ages 9-12: Deeper Understanding
                </h3>
                <p className="text-navy/80 dark:text-slate-300 mb-4">
                  Complete all 28 Liberty's Principles Pals books. Begin using the Constitutional
                  Analyzer with current events. Discuss how principles apply to school, family, and
                  community.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-red/10 px-3 py-1 text-sm text-red">
                    Separation of Powers
                  </span>
                  <span className="inline-block rounded-full bg-red/10 px-3 py-1 text-sm text-red">
                    Property Rights
                  </span>
                  <span className="inline-block rounded-full bg-red/10 px-3 py-1 text-sm text-red">
                    Free Markets
                  </span>
                </div>
              </div>

              {/* Ages 13-18 */}
              <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Ages 13-18: Critical Thinking
                </h3>
                <p className="text-navy/80 dark:text-slate-300 mb-4">
                  Study The Citizen's Compass chapter by chapter. Use Constitutional Analyzer to
                  evaluate proposed laws and current policies. Debate constitutional issues with
                  family and peers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-sm text-navy dark:bg-slate-700 dark:text-slate-100">
                    Constitutional Analysis
                  </span>
                  <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-sm text-navy dark:bg-slate-700 dark:text-slate-100">
                    Critical Debate
                  </span>
                  <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-sm text-navy dark:bg-slate-700 dark:text-slate-100">
                    Civic Engagement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Why Constitutional Literacy Matters
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <blockquote className="border-l-4 border-navy pl-6 italic text-lg text-navy/80 dark:text-slate-300">
                "Freedom dies when families are destroyed. I wanted to teach my daughter these
                principles—so she'd know how to protect her family and her freedom. When the courts
                took that opportunity from me, I created these tools so every parent could teach
                what I couldn't."
              </blockquote>
              <p className="text-navy/80 dark:text-slate-300 mt-6">
                <strong className="text-navy dark:text-slate-100">— Christopher J. Bradley</strong>
              </p>
              <p className="text-navy/80 leading-relaxed dark:text-slate-300 mt-6">
                Constitutional literacy isn't about memorizing articles and amendments. It's about
                understanding the principles that make self-governance possible. It's about
                teaching your children to recognize threats to liberty—and having the tools to
                defend it.
              </p>
              <p className="text-navy/80 leading-relaxed dark:text-slate-300 mt-6">
                When children understand these 28 principles, they can evaluate any law, any
                policy, any government action against the timeless standards that built the freest,
                most prosperous nation in history. That's not partisan—that's essential.
              </p>
            </div>
          </div>
        </section>

        {/* The Book Section */}
        <section className="bg-gold/10 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-slate-800 sm:p-12 border-2 border-gold/30">
              <div className="text-center mb-8">
                <span className="inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-semibold text-gold mb-4">
                  For Adults & Legislators
                </span>
                <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                  Common Sense: Family Is Fundamental
                </h2>
                <p className="text-xl text-gold font-semibold mt-2">
                  The Constitutional Case for Family Court Reform
                </p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  While these educational resources teach children the 28 principles, this book
                  examines how violating those principles—especially Principle 26: The Family as the
                  Fundamental Unit of Society—threatens freedom itself.
                </p>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed mt-4">
                  Drawing on the founding fathers' understanding of family, personal experience
                  with family court dysfunction, and the constitutional framework for reform, this
                  book makes the case for why protecting families is essential to preserving
                  liberty.
                </p>
              </div>

              <div className="bg-navy/5 rounded-lg p-6 dark:bg-slate-900/50 border-l-4 border-gold mb-8">
                <ul className="space-y-2 text-sm text-navy/80 dark:text-slate-300">
                  <li>• The 28 principles that built America—with focus on family as core unit</li>
                  <li>• Constitutional framework for federal family court reform</li>
                  <li>• Specific policy proposals and legislative solutions</li>
                  <li>• Personal story of how the system fails families</li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="https://amzn.to/4hgYTIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-gold/90 hover:shadow-xl"
                >
                  Available on Amazon
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-navy to-navy/90 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Start Teaching Constitutional Principles Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Give your children the gift of constitutional literacy. Choose the tools that fit
              your family's needs.
            </p>
            <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
              <a
                href="https://libertysprinciplespals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-gold/90"
              >
                Children's Books
              </a>
              <a
                href="https://thecitizenscompass.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-white/90"
              >
                The Book
              </a>
              <a
                href="https://theartofcitizenship.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                AI Analyzer
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy/10 bg-navy/5 dark:border-slate-700 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-navy/70 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Christopher J. Bradley. Teaching the principles
              that preserve liberty.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
