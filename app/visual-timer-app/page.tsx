import { Metadata } from 'next'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Visual Timer App for Focus & Productivity | There Is Still Time',
  description:
    'A visual timer that teaches you to feel time passing. No jarring alarms, just gentle awareness. Perfect for deep work, studying, meditation, and mindful productivity.',
  openGraph: {
    title: 'Visual Timer App for Focus & Productivity | There Is Still Time',
    description:
      'A visual timer that teaches you to feel time passing. No jarring alarms, just gentle awareness.',
    type: 'website',
    images: [
      {
        url: '/images/visual-timer-og.jpg',
        width: 1200,
        height: 630,
        alt: 'There Is Still Time - Visual Timer App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visual Timer App for Focus & Productivity | There Is Still Time',
    description:
      'A visual timer that teaches you to feel time passing. No jarring alarms, just gentle awareness.',
    images: ['/images/visual-timer-og.jpg'],
  },
}

// JSON-LD Structured Data
const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'There Is Still Time',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
  },
  description:
    'A visual timer app that teaches you to feel time passing through gentle visual awareness instead of jarring alarms.',
  url: 'https://thereisstilltime.com',
  author: {
    '@type': 'Person',
    name: 'Christopher J. Bradley',
    url: 'https://christopherjbradley.com',
  },
}

export default function VisualTimerAppPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
        <section className="bg-gradient-to-b from-gold/10 to-white dark:from-slate-900/50 dark:to-slate-950">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-navy dark:text-slate-100 sm:text-5xl md:text-6xl">
                The Visual Timer That Teaches You to Feel Time
              </h1>
              <p className="mt-6 text-lg text-navy/70 dark:text-slate-300">
                There Is Still Time
              </p>
            </div>
          </div>
        </section>

        {/* Opening Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                Most timer apps assault you with alarms and notifications. They interrupt your flow,
                break your concentration, and turn time into an enemy. <strong>There Is Still Time</strong> is
                different. It's a visual timer that lets you <em>see and feel</em> time passing—helping you
                build deeper awareness, stronger focus, and more meaningful productivity.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                Whether you're a student preparing for exams, a professional doing deep work, or
                anyone seeking to be more present with their time, this app replaces jarring
                interruptions with gentle visual awareness. Watch the hourglass flow. Feel the
                seconds matter. Stay in your zone.
              </p>
            </div>
          </div>
        </section>

        {/* Why Visual Timers Work Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Why Visual Timers Work Better Than Alarms
              </h2>
              <p className="mt-4 text-lg text-navy/70 dark:text-slate-300">
                Traditional timers create anxiety. You work with one eye on the clock, dreading the
                alarm. Visual timers work with your psychology:
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Benefit 1 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-slate-100 mb-2">
                  Flow State Protection
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  See time passing without breaking concentration. Stay immersed in your work while
                  maintaining awareness of duration.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-slate-100 mb-2">
                  Stress Reduction
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  No sudden alarms shocking your nervous system. Gentle visual cues that respect your
                  focus and mental state.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-slate-100 mb-2">
                  Time Awareness
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  Build intuitive understanding of duration. Train your brain to feel how long tasks
                  actually take.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-slate-100 mb-2">
                  Mindful Productivity
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  Stay present with your work, not racing against a countdown. Transform time from
                  enemy to ally.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-slate-100 mb-2">
                  Flexible Duration
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  From 5-minute focused bursts to 2-hour deep work sessions. Customize duration to
                  match your workflow.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-slate-100 mb-2">
                  Research-Backed
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  Visual time representations improve focus and reduce task-switching anxiety. Your
                  brain processes visual information faster than auditory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Perfect For
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Use Case 1 */}
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                  Deep Work Sessions
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  Writers, programmers, designers—anyone who needs uninterrupted focus. Set 90-120
                  minute blocks and stay in flow.
                </p>
              </div>

              {/* Use Case 2 */}
              <div className="border-l-4 border-red pl-6">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                  Student Study Sessions
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  Exam prep, homework, research. Build better study habits with visual time
                  awareness. Perfect for Pomodoro technique.
                </p>
              </div>

              {/* Use Case 3 */}
              <div className="border-l-4 border-navy pl-6">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                  Meditation & Mindfulness
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  Silent meditation without jarring bells. Watch time flow while you breathe. Gentle
                  conclusion to your practice.
                </p>
              </div>

              {/* Use Case 4 */}
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                  Meeting Time Boxing
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  Keep discussions on track without rude alarms. Screen-share the visual timer for
                  team awareness.
                </p>
              </div>

              {/* Use Case 5 */}
              <div className="border-l-4 border-red pl-6">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                  Exercise & Workouts
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  Interval training, plank holds, rest periods. See your progress without checking
                  your watch constantly.
                </p>
              </div>

              {/* Use Case 6 */}
              <div className="border-l-4 border-navy pl-6">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                  Creative Projects
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed dark:text-slate-300">
                  Art, music, crafts. Time-box your creative sessions without anxiety. Stay present
                  with the work itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Simple. Beautiful. Effective.
              </h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                    Set Your Duration
                  </h3>
                  <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                    Choose anywhere from 5 minutes to 2 hours. No complex settings. Just pick your
                    time and start.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                    Watch Time Flow
                  </h3>
                  <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                    The hourglass fills or empties visually. Glance at it when you need awareness,
                    ignore it when you're deep in flow.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                    Gentle Completion
                  </h3>
                  <p className="text-navy/80 leading-relaxed dark:text-slate-300">
                    When time's up, a subtle visual change signals completion. No jarring sounds. No
                    disruption. Just awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                The Philosophy
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <blockquote className="border-l-4 border-gold pl-6 italic text-lg text-navy/80 dark:text-slate-300">
                "Time is finite and precious. Every second counts when you've already lost years. I
                built this timer because I needed to feel time passing—not as punishment, but as
                presence. Not as anxiety, but as awareness."
              </blockquote>
              <p className="text-navy/80 dark:text-slate-300 mt-6">
                <strong className="text-navy dark:text-slate-100">— Christopher J. Bradley</strong>, creator of There Is Still Time
              </p>
              <p className="text-navy/80 leading-relaxed dark:text-slate-300 mt-6">
                This app was born from personal loss and the journey back to consciousness. After
                years separated from my daughter, I learned that time awareness isn't about racing
                the clock—it's about honoring each moment you have. Whether you're doing deep work,
                spending time with loved ones, or simply being present with yourself, this timer
                helps you feel the preciousness of now.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-navy to-navy/90 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Start Feeling Time Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Free to use. No signup required. No notifications. Just you, your work, and gentle
              time awareness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://thereisstilltime.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-lg font-semibold text-navy shadow-lg transition-all hover:bg-gold/90 hover:shadow-xl"
              >
                Try the Visual Timer
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
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
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
              &copy; {new Date().getFullYear()} Christopher J. Bradley. Part of the There Is Still
              Time platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
