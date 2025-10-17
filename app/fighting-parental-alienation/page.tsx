import { Metadata } from 'next'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Fighting Parental Alienation: A Father\'s Story of Erasure | Christopher Bradley',
  description:
    'Father Christopher Bradley was erased from his daughter\'s life through parental alienation enabled by Florida family courts. Resources and support for fathers fighting alienation.',
  keywords:
    'parental alienation, father alienation, custody order violations, family court dysfunction, alienated parent, erased father, parental alienation syndrome',
  openGraph: {
    title: 'Fighting Parental Alienation: When the Court Erases You',
    description:
      'A father\'s story of being erased through parental alienation. Resources for fathers fighting to stay in their children\'s lives.',
    type: 'article',
    images: [
      {
        url: '/images/parental-alienation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Fighting Parental Alienation - Christopher Bradley',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fighting Parental Alienation: When the Court Erases You',
    description:
      'A father\'s story of being erased through parental alienation. Resources for fathers fighting to stay in their children\'s lives.',
    images: ['/images/parental-alienation-og.jpg'],
  },
}

// JSON-LD Structured Data
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Fighting Parental Alienation: When the Court Erases You',
  description:
    'A father\'s account of parental alienation, family court failures, and six years of silence. Resources for fathers fighting to stay in their children\'s lives.',
  author: {
    '@type': 'Person',
    name: 'Christopher J. Bradley',
    url: 'https://christopherjbradley.com',
    alumniOf: {
      '@type': 'Organization',
      name: 'United States Army',
    },
    award: 'Gulf War Service',
  },
  datePublished: '2025-01-17',
  publisher: {
    '@type': 'Person',
    name: 'Christopher J. Bradley',
  },
  keywords:
    'parental alienation, father alienation, custody order violations, family court dysfunction, alienated parent',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Christopher J. Bradley',
  url: 'https://christopherjbradley.com',
  description: 'Gulf War veteran, alienated father, advocate for family court reform',
  alumniOf: {
    '@type': 'Organization',
    name: 'United States Army',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is parental alienation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parental alienation is a pattern of behavior by one parent that systematically turns a child against the other parent. It involves psychological manipulation, false narratives, and restriction of contact that erodes the parent-child relationship. Courts often fail to recognize or address it, allowing the alienation to continue unchecked.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do courts handle parental alienation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most family courts handle parental alienation poorly. Judges often don\'t recognize the patterns, blame the targeted parent for the child\'s rejection, and protect the alienating parent by framing violations as "acting in the child\'s best interest." Courts are slow to enforce custody orders and rarely punish violations, enabling the alienation to continue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I do if my ex is alienating my child?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Document everything: every missed visit, communication attempt, and instance of interference. Get a therapist specializing in parental alienation to document the pattern. Hire a lawyer experienced with alienation cases. File contempt motions when orders are violated. However, understand that courts are slow to act and may not provide the relief you need. Focus on keeping the door open for when your child becomes an adult.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my child ever come back?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some alienated children reconnect when they become adults and can think independently. Others never do. There are no guarantees. The best you can do is keep the door open, send occasional messages showing you still care, and be ready if they return. Don\'t give up hope, but also don\'t let waiting consume your entire life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I keep trying to contact my alienated child?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but with balance. Send birthday cards, holiday messages, occasional emails showing you care. Don\'t pressure or guilt them. Keep messages loving and brief. This maintains a lifeline for when they\'re ready. But don\'t let repeated rejection destroy you—protect your mental health while keeping the door open.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I sue for parental alienation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Currently, very few states recognize parental alienation as grounds for legal action. Most civil rights lawsuits against alienating parents are dismissed. Your best legal options are contempt motions for order violations, seeking custody modification based on alienation, and requesting court-ordered therapy. Federal reform is needed to create real accountability.',
      },
    },
  ],
}

export default function FightingParentalAlienationPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <h1 className="text-4xl font-bold tracking-tight text-navy dark:text-slate-100 sm:text-5xl md:text-6xl">
                Six Years of Being Erased
              </h1>
              <p className="mt-6 text-lg text-red font-semibold">
                Fighting Parental Alienation: When the Court Erases You
              </p>
            </div>
          </div>
        </section>

        {/* Opening Story */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 first-letter:text-5xl first-letter:font-bold first-letter:text-navy dark:first-letter:text-slate-100 first-letter:mr-1 first-letter:float-left">
                Parental alienation doesn't happen in a dramatic moment. It's a slow erasure. A
                steady campaign that turns your child against you, often with the family court's
                implicit approval.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                I was an engaged, present father for ten years. I changed diapers, read bedtime
                stories, helped with homework, attended every school event I could. My daughter was
                my why—my reason for everything.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                Then divorce happened. Then the courts happened. Then I went from being Dad to
                being 'the visitor' to being erased entirely.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                I haven't seen my daughter since her high school graduation in 2019. That was the
                last time. Five minutes of hello and goodbye after 18 years of being her father.
                Six years of silence since then.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                This is what parental alienation looks like. This is what family courts enable.
              </p>
            </div>
          </div>
        </section>

        {/* How It Happens Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                How It Happens
              </h2>
            </div>

            <div className="space-y-8">
              {/* Stage 1 */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-l-4 border-red">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Stage 1: The Court Makes You a Visitor
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed">
                  Florida family courts gave me 'every other weekend and one night a week.' After
                  being a full-time father for ten years, I became someone who visited. Someone
                  whose time with his daughter was measured in hours, not days. Someone whose
                  importance was quantified by a court order.
                </p>
              </div>

              {/* Stage 2 */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-l-4 border-navy">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Stage 2: The Order Gets Ignored
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  The order said every other weekend. One night a week. But when those times were
                  ignored—when my daughter suddenly had activities, or wasn't feeling well, or her
                  mom had other plans—the court didn't care. The police didn't care. The school
                  didn't care.
                </p>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  I filed motions for contempt. Denied.
                </p>
                <p className="text-lg font-semibold text-red">
                  The message was clear: the order was just paper. Her mother decided when I saw my
                  daughter, not the court.
                </p>
              </div>

              {/* Stage 3 */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-l-4 border-gold">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Stage 3: The Alienation Accelerates
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  Then came Belgium. The court allowed my daughter—over my objection—to spend her
                  entire junior year abroad. No way for me to be part of her life. No visits.
                  Limited communication.
                </p>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed">
                  When she came back senior year, we had lunch once. That was it. The alienation
                  was complete.
                </p>
              </div>

              {/* Stage 4 */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-l-4 border-red">
                <h3 className="text-2xl font-bold text-red dark:text-slate-100 mb-4">
                  Stage 4: The Erasure
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  High school graduation, 2019. She said hello. Five minutes later, goodbye. I
                  haven't seen her since.
                </p>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  I've tried. Emails go unanswered. Messages ignored. Her uncle told me a year ago
                  she's doing fine and he'd encourage her to contact me.
                </p>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  Six years of silence.
                </p>
                <p className="text-2xl font-bold text-red">A father erased.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Courts Get Wrong Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                What the Courts Get Wrong About Alienation
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* They Don't See It */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  They Don't See It
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Judges see two parents in conflict. They don't see the systematic campaign to
                  erase one parent. They don't recognize the patterns. They don't understand the
                  psychology.
                </p>
              </div>

              {/* They Blame the Target */}
              <div className="rounded-lg border-2 border-red/30 p-6 dark:border-red/20 dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  They Blame the Target
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  'If your daughter doesn't want to see you, maybe there's a reason.' That's what
                  courts imply. As if children naturally reject loving parents. As if alienation
                  isn't real.
                </p>
              </div>

              {/* They Protect the Alienator */}
              <div className="rounded-lg border-2 border-gold/30 p-6 dark:border-gold/20 dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  They Protect the Alienator
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  When you file contempt motions for ignored visitation, judges see you as
                  'contentious' or 'unable to co-parent.' The parent violating the order? They're
                  just 'acting in the child's best interest.'
                </p>
              </div>

              {/* They Make It Worse */}
              <div className="rounded-lg border-2 border-red/30 p-6 dark:border-red/20 dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  They Make It Worse
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Every court battle, every motion, every attempt to enforce your rights—it all
                  gets used against you. You're 'unable to move on.' You're 'causing conflict.'
                  Meanwhile, your child is being taught that you don't matter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Courts Enable It Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Why Courts Enable It
              </h3>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
              <p className="text-lg text-navy/80 dark:text-slate-300 mb-6">
                Family courts in Florida and most states operate on presumptions that enable
                alienation:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-red flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold text-navy dark:text-slate-100">
                      'Best interest of child' is subjective
                    </span>
                    <span className="text-navy/80 dark:text-slate-300">
                      {' '}
                      - and often means stability over truth
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-red flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold text-navy dark:text-slate-100">
                      Primary parent gets deference
                    </span>
                    <span className="text-navy/80 dark:text-slate-300">
                      {' '}
                      - whoever has more time wins
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-red flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold text-navy dark:text-slate-100">
                      Judges are overworked
                    </span>
                    <span className="text-navy/80 dark:text-slate-300">
                      {' '}
                      - 15 minutes to decide a child's future
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-red flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold text-navy dark:text-slate-100">
                      No consequences for false allegations
                    </span>
                    <span className="text-navy/80 dark:text-slate-300">
                      {' '}
                      - lie about abuse, alienate successfully, face no penalty
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-red flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold text-navy dark:text-slate-100">
                      Children's wishes treated as gospel
                    </span>
                    <span className="text-navy/80 dark:text-slate-300">
                      {' '}
                      - even when those wishes are programmed
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What I Did Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                What I Did (And Wish I'd Done Differently)
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* What I Did */}
              <div className="rounded-lg border-2 border-navy/30 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4">
                  What I Did
                </h3>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300 text-sm">
                  <li>• Documented every missed visit</li>
                  <li>• Filed contempt motions repeatedly (all denied)</li>
                  <li>• Appeared pro se throughout - couldn't afford lawyers</li>
                  <li>• Filed a federal civil rights lawsuit (dismissed as frivolous)</li>
                  <li>• Showed up to graduation even though I knew it might be the last time</li>
                  <li>• Never gave up trying to reach her</li>
                </ul>
              </div>

              {/* What I Wish I'd Done */}
              <div className="rounded-lg border-2 border-red/30 p-6 dark:border-red/20 dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4">
                  What I Wish I'd Done
                </h3>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300 text-sm">
                  <li>
                    • <strong>Hired a therapist specializing in parental alienation earlier</strong>{' '}
                    - to document the pattern and testify
                  </li>
                  <li>
                    • <strong>Been less emotional in court</strong> - judges punish fathers who
                    show pain
                  </li>
                  <li>
                    • <strong>Built a support network of other alienated parents</strong> - I
                    fought alone for too long
                  </li>
                  <li>
                    • <strong>Accepted earlier that the system wouldn't help</strong> - and focused
                    on keeping the door open for when she's an adult
                  </li>
                  <li>
                    • <strong>Taken better care of myself</strong> - the fight consumed me and made
                    me less effective
                  </li>
                </ul>
              </div>

              {/* What I'd Never Change */}
              <div className="rounded-lg border-2 border-gold/30 p-6 dark:border-gold/20 dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4">
                  What I'd Never Change
                </h3>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300 text-sm">
                  <li>• Showing up to her graduation</li>
                  <li>• Trying to reach her, even when ignored</li>
                  <li>• Keeping the door open, always</li>
                  <li>• Loving her unconditionally, even in silence</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* For Fathers Fighting Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                For Fathers Fighting Alienation Right Now
              </h2>
            </div>

            <div className="space-y-8">
              {/* Document Everything */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-l-4 border-red">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Document Everything
                </h3>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• Every missed visit, with date and reason given</li>
                  <li>• Every communication attempt (emails, texts, calls)</li>
                  <li>• Every event you tried to attend</li>
                  <li>• Every time you were blocked or refused</li>
                  <li>• Evidence of the relationship before alienation</li>
                </ul>
              </div>

              {/* Get Professional Help */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-l-4 border-navy">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Get Professional Help
                </h3>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• Therapist specializing in parental alienation (for you AND to testify)</li>
                  <li>• Lawyer experienced with alienation cases</li>
                  <li>• Guardian ad litem who understands alienation</li>
                  <li>• Parenting coordinator if court will appoint one</li>
                </ul>
              </div>

              {/* Know the Legal Reality */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-l-4 border-gold">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Know the Legal Reality
                </h3>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• Courts are slow to recognize alienation</li>
                  <li>• Contempt motions rarely work</li>
                  <li>• False abuse allegations are weaponized effectively</li>
                  <li>• The alienating parent is rarely punished</li>
                  <li>• Your best hope may be waiting until your child is an adult</li>
                </ul>
              </div>

              {/* Protect Your Mental Health */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-l-4 border-navy">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Protect Your Mental Health
                </h3>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• This fight will destroy you if you let it</li>
                  <li>• Find other alienated parents for support</li>
                  <li>• Get therapy for yourself</li>
                  <li>• Build a life beyond the court battle</li>
                  <li>• Stay healthy for the day your child returns</li>
                </ul>
              </div>

              {/* Never Give Up */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800 border-l-4 border-red">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Never Give Up, But Know When to Step Back
                </h3>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• Keep the door open always</li>
                  <li>• Send birthday cards, holiday messages, emails</li>
                  <li>• But don't let the fight consume you entirely</li>
                  <li>• Kids grow up, become adults, question what they were told</li>
                  <li>• Be there when they're ready</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Federal Reform Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                The Federal Reform We Need
              </h2>
            </div>

            <div className="rounded-lg bg-red/5 border-2 border-red/30 p-8 dark:bg-slate-800 dark:border-red/20">
              <p className="text-xl font-semibold text-navy dark:text-slate-100 mb-6">
                22 million children are affected by family court dysfunction. Parental alienation
                is epidemic. The system enables it.
              </p>
              <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-4">
                What Needs to Change:
              </h3>
              <ul className="space-y-3 text-navy/80 dark:text-slate-300 mb-6">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 text-red flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Federal standards for recognizing and stopping alienation
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 text-red flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Consequences for violating custody orders
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 text-red flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Better training for judges on alienation psychology
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 text-red flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Accountability for false allegations
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 text-red flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Constitutional protections for parent-child relationships
                </li>
              </ul>
              <a
                href="https://familyunityhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-red px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-red/90"
              >
                Join Family Unity Hub
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
              <p className="text-sm text-navy/70 dark:text-slate-400 mt-4">
                Track federal legislation, connect with advocates, organize for reform.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Resources
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Legal & Advocacy */}
              <div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4">
                  Legal & Advocacy
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg border-2 border-navy/20 p-4 dark:border-slate-700 dark:bg-slate-800">
                    <a
                      href="https://nationalparentsorganization.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                    >
                      National Parents Organization →
                    </a>
                  </div>
                  <div className="rounded-lg border-2 border-navy/20 p-4 dark:border-slate-700 dark:bg-slate-800">
                    <a
                      href="https://paaousa.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                    >
                      Parental Alienation Awareness →
                    </a>
                  </div>
                  <div className="rounded-lg border-2 border-navy/20 p-4 dark:border-slate-700 dark:bg-slate-800">
                    <a
                      href="https://familyunityhub.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                    >
                      Family Unity Hub →
                    </a>
                  </div>
                </div>
              </div>

              {/* Mental Health */}
              <div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4">
                  Mental Health
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg border-2 border-navy/20 p-4 dark:border-slate-700 dark:bg-slate-800">
                    <p className="text-sm text-navy/80 dark:text-slate-300 mb-2">
                      Find therapists specializing in parental alienation
                    </p>
                  </div>
                  <div className="rounded-lg border-2 border-navy/20 p-4 dark:border-slate-700 dark:bg-slate-800">
                    <p className="text-sm text-navy/80 dark:text-slate-300 mb-2">
                      Support groups for alienated parents
                    </p>
                  </div>
                  <div className="rounded-lg border-2 border-navy/20 p-4 dark:border-slate-700 dark:bg-slate-800">
                    <a
                      href="https://www.psychologytoday.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                    >
                      Psychology Today Therapist Finder →
                    </a>
                  </div>
                </div>
              </div>

              {/* Educational */}
              <div>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4">
                  Educational
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg border-2 border-navy/20 p-4 dark:border-slate-700 dark:bg-slate-800">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Books
                    </p>
                    <p className="text-sm text-navy/80 dark:text-slate-300">
                      'Divorce Poison' by Dr. Richard Warshak
                    </p>
                  </div>
                  <div className="rounded-lg border-2 border-navy/20 p-4 dark:border-slate-700 dark:bg-slate-800">
                    <p className="text-sm font-semibold text-navy dark:text-slate-100 mb-1">
                      Research
                    </p>
                    <p className="text-sm text-navy/80 dark:text-slate-300">
                      Search 'parental alienation syndrome' scholarly articles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Book Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-gold/10 p-8 shadow-lg dark:bg-slate-900/50 sm:p-12 border-2 border-gold/30">
              <div className="text-center mb-8">
                <span className="inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-semibold text-gold mb-4">
                  The Constitutional Case Against Alienation
                </span>
                <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                  Common Sense: Family Is Fundamental
                </h2>
                <p className="text-xl text-gold font-semibold mt-4">
                  Why Parental Alienation Violates Constitutional Rights
                </p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                  Parental alienation isn't just harmful—it's unconstitutional. When courts enable one parent
                  to erase the other, they violate the fundamental principle that{' '}
                  <strong className="text-navy dark:text-slate-100">the family is the fundamental unit of society</strong>.
                </p>

                <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-4">
                  This book makes the constitutional argument that alienated parents need. It examines:
                </p>

                <ul className="space-y-2 text-navy/80 dark:text-slate-300 mt-4 list-disc pl-6">
                  <li>Why parent-child relationships deserve constitutional protection from state-enabled interference</li>
                  <li>How family courts have become unconstitutional actors in destroying families</li>
                  <li>What the Founders understood about natural rights that modern courts ignore</li>
                  <li>The federal reforms needed to stop systemic alienation</li>
                  <li>Why 'best interest of the child' has become a weapon against loving parents</li>
                </ul>

                <div className="bg-red/10 border-l-4 border-red p-6 my-6 dark:bg-slate-800/50">
                  <p className="text-lg font-semibold text-navy dark:text-slate-100 mb-2">
                    For Alienated Parents:
                  </p>
                  <p className="text-navy/80 dark:text-slate-300 mb-0">
                    When courts erase you, when they enable the alienation, when they blame you for your
                    child's rejection—this book provides the intellectual framework to explain why they're
                    violating fundamental constitutional principles. It won't bring your child back today,
                    but it arms you with the arguments we need for systemic reform.
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-4">
                  22 million children are affected by family court dysfunction. Parental alienation thrives
                  because we lack federal standards and constitutional accountability. This book is the blueprint
                  for changing that.
                </p>
              </div>

              <div className="text-center">
                <a
                  href="https://amzn.to/4hgYTIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-gold/90 hover:shadow-xl"
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

        {/* Message to My Daughter Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                A Message to My Daughter
              </h2>
            </div>

            <div className="rounded-lg bg-gold/10 border-l-4 border-gold p-8 dark:bg-slate-800/50">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mb-4">
                If you ever read this, know this:
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mb-4">
                I never stopped loving you. Not for one second of the last six years. Not when you
                didn't reply to emails. Not when graduation was the last time I saw you. Not ever.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mb-4">
                The door is always open. No questions asked. No explanations needed. Just walk
                through.
              </p>
              <p className="text-xl font-bold text-gold">
                I'm still your dad. I always will be.
              </p>
            </div>
          </div>
        </section>

        {/* Message to Fathers Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                A Message to Fathers in This Fight
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                You're not alone. Thousands of us have been erased by family courts. Some of us are
                still fighting. Some have reconnected years later. Some never will.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                But we're not crazy. We're not bad fathers. We're not the problem.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                The system is broken. And until it's fixed, we fight however we can—in court,
                through advocacy, by keeping the door open, by surviving this hell and staying
                ready for the day our kids come back.
              </p>

              <div className="bg-red/10 border-l-4 border-red p-6 mt-8 dark:bg-slate-800/50">
                <p className="text-xl font-bold text-navy dark:text-slate-100 mb-0">
                  Don't give up. Don't stop loving them. Don't let the courts or the alienation
                  convince you that you don't matter.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                You matter. Your love matters. Your child, somewhere beneath the programming, knows
                it.
              </p>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://familyunityhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-red px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-red/90 hover:shadow-xl"
              >
                Join Fathers Fighting Alienation
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

        {/* FAQ Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-3">
                  What is parental alienation?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Parental alienation is a pattern of behavior by one parent that systematically
                  turns a child against the other parent. It involves psychological manipulation,
                  false narratives, and restriction of contact that erodes the parent-child
                  relationship. Courts often fail to recognize or address it, allowing the
                  alienation to continue unchecked.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-3">
                  How do courts handle parental alienation?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Most family courts handle parental alienation poorly. Judges often don't
                  recognize the patterns, blame the targeted parent for the child's rejection, and
                  protect the alienating parent by framing violations as "acting in the child's
                  best interest." Courts are slow to enforce custody orders and rarely punish
                  violations, enabling the alienation to continue.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-3">
                  What can I do if my ex is alienating my child?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Document everything: every missed visit, communication attempt, and instance of
                  interference. Get a therapist specializing in parental alienation to document the
                  pattern. Hire a lawyer experienced with alienation cases. File contempt motions
                  when orders are violated. However, understand that courts are slow to act and may
                  not provide the relief you need. Focus on keeping the door open for when your
                  child becomes an adult.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-3">
                  Will my child ever come back?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Some alienated children reconnect when they become adults and can think
                  independently. Others never do. There are no guarantees. The best you can do is
                  keep the door open, send occasional messages showing you still care, and be ready
                  if they return. Don't give up hope, but also don't let waiting consume your
                  entire life.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-3">
                  Should I keep trying to contact my alienated child?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Yes, but with balance. Send birthday cards, holiday messages, occasional emails
                  showing you care. Don't pressure or guilt them. Keep messages loving and brief.
                  This maintains a lifeline for when they're ready. But don't let repeated
                  rejection destroy you—protect your mental health while keeping the door open.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-3">
                  Can I sue for parental alienation?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Currently, very few states recognize parental alienation as grounds for legal
                  action. Most civil rights lawsuits against alienating parents are dismissed. Your
                  best legal options are contempt motions for order violations, seeking custody
                  modification based on alienation, and requesting court-ordered therapy. Federal
                  reform is needed to create real accountability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy/10 bg-navy/5 dark:border-slate-700 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-navy/70 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Christopher J. Bradley. Gulf War Veteran,
              Alienated Father, Advocate for Family Court Reform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
