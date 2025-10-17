import { Metadata } from 'next'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Family Court Reform: Federal Movement for 22 Million Children | Christopher Bradley',
  description:
    '22 million children affected by broken family courts. Gulf War veteran Christopher Bradley leads federal reform movement. Join Family Unity Hub.',
  keywords:
    'family court reform, custody law reform, parental rights legislation, federal family court standards, family law reform movement, parental alienation legislation',
  openGraph: {
    title: 'Family Court Reform: From Personal Tragedy to National Movement',
    description:
      '22 million children need federal family court reform. Join the movement to protect parent-child relationships.',
    type: 'article',
    images: [
      {
        url: '/images/family-court-reform-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Family Court Reform Movement - Christopher Bradley',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Court Reform: From Personal Tragedy to National Movement',
    description:
      '22 million children need federal family court reform. Join the movement to protect parent-child relationships.',
    images: ['/images/family-court-reform-og.jpg'],
  },
}

// JSON-LD Structured Data
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Family Court Reform: From Personal Tragedy to National Movement',
  description:
    'Why 22 million children need federal family court reform and how Family Unity Hub is organizing the movement for constitutional protections.',
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
    'family court reform, federal custody standards, parental rights, constitutional protections, family law reform',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Christopher J. Bradley',
  url: 'https://christopherjbradley.com',
  description:
    'Gulf War veteran, family court reform advocate, founder of movement for federal custody standards',
  alumniOf: {
    '@type': 'Organization',
    name: 'United States Army',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Family Unity Hub',
  url: 'https://familyunityhub.com',
  description:
    'Platform for organizing federal family court reform, tracking legislation, connecting advocates, and demanding constitutional protections for parent-child relationships.',
  founder: {
    '@type': 'Person',
    name: 'Christopher J. Bradley',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do we need federal family court reform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '22 million children are affected by family court dysfunction annually. Current state-by-state systems have no consistent standards, no accountability for judges, no consequences for violating custody orders, and no recognition of parental alienation. Without federal reform establishing baseline protections and constitutional recognition of parent-child relationships, states will continue destroying families with impunity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What would federal reform actually change?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Federal reform would establish: (1) Constitutional protection for parent-child relationships as a fundamental right, (2) Baseline custody standards all states must meet, including presumption of equal parenting time, (3) Accountability mechanisms for judges and courts, (4) Federal enforcement of custody orders with real consequences for violations, (5) Recognition of parental alienation as child abuse, (6) Training requirements for family court judges on alienation, PTSD, and domestic violence issues.',
      },
    },
    {
      '@type': 'Question',
      name: "Isn't family law a state issue?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While states implement family law, the parent-child relationship is a fundamental constitutional right that requires federal protection. Just as federal civil rights legislation established baseline protections that states must honor, federal family court standards can establish minimum protections for parent-child relationships while allowing states to exceed those minimums. When state courts systematically violate fundamental rights, federal intervention is not just appropriate—it\'s constitutionally required.',
      },
    },
    {
      '@type': 'Question',
      name: "How can I help if I'm not directly affected?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: '(1) Join Family Unity Hub to stay informed and support the movement, (2) Contact your congressional representatives and demand family court reform, (3) Share awareness—most people don\'t know 22 million children are affected, (4) Support the constitutional litigation fund, (5) Amplify the stories of affected parents and children, (6) Make family court reform a voting priority.',
      },
    },
    {
      '@type': 'Question',
      name: 'What legislation is currently pending?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit Family Unity Hub for real-time tracking of federal legislation related to family court reform, custody standards, parental rights, and constitutional protections. The platform monitors all relevant bills, identifies sponsors, tracks progress, and provides constitutional analysis of proposed reforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I join Family Unity Hub?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit familyunityhub.com to join the platform. You\'ll get access to legislative tracking, expert network, community organizing tools, advocacy resources, and the ability to connect with other parents and advocates fighting for federal reform. Membership is open to anyone committed to reforming family courts and protecting parent-child relationships.',
      },
    },
  ],
}

export default function FamilyCourtReformPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
        <section className="relative bg-gradient-to-b from-gold/10 to-white dark:from-slate-900/50 dark:to-slate-950">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-navy dark:text-slate-100 sm:text-5xl md:text-6xl">
                22 Million Children Need Federal Reform
              </h1>
              <p className="mt-6 text-lg text-gold font-semibold">
                Family Court Reform: From Personal Tragedy to National Movement
              </p>
            </div>
          </div>
        </section>

        {/* Opening Story */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 first-letter:text-5xl first-letter:font-bold first-letter:text-navy dark:first-letter:text-slate-100 first-letter:mr-1 first-letter:float-left">
                In 2015, I was homeless in a veterans shelter in New York City, finally getting
                treatment for PTSD from the Gulf War. The VA had taken 24 years to diagnose me.
                When I got papers from Florida saying my ex-wife wanted her new husband to become
                my daughter's legal guardian, I used my last funds to fly there and respond pro se.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                The court made me a visitor in my daughter's life. An unwelcome one.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                For the next four years, I fought within a system designed to destroy families, not
                preserve them. Contempt motions denied. Visitation orders ignored. A federal civil
                rights lawsuit dismissed as frivolous. Every attempt to be a father met with
                indifference from courts, police, and schools.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                In 2019, I attended my daughter's high school graduation. She said hello. Five
                minutes later, goodbye. I haven't seen her since.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                My story isn't unique. It's the story of 22 million children affected by family
                court dysfunction. It's the story of parents—mostly fathers—erased by a system that
                enables alienation, ignores its own orders, and operates with virtually no
                accountability.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                The family is the fundamental unit of any free society. When family courts
                systematically destroy families, they don't just harm individual parents and
                children—they threaten the foundation of liberty itself.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                That's why I'm building Family Unity Hub: a platform to organize federal reform,
                track legislation, connect advocates, and demand constitutional protections for the
                parent-child relationship.
              </p>
              <p className="text-xl font-bold text-gold mt-8">
                This isn't just about my daughter anymore. It's about 22 million children who
                deserve better.
              </p>
            </div>
          </div>
        </section>

        {/* The Crisis By the Numbers */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                The Crisis By the Numbers
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Stat 1 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 text-center border-t-4 border-red">
                <div className="text-4xl font-bold text-red mb-3">22+ Million</div>
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">Children</h3>
                <p className="text-sm text-navy/80 dark:text-slate-300">
                  Affected by parental divorce and family court intervention annually in the United
                  States.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 text-center border-t-4 border-navy">
                <div className="text-4xl font-bold text-navy dark:text-slate-100 mb-3">
                  11-15%
                </div>
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                  Increased Dysfunction
                </h3>
                <p className="text-sm text-navy/80 dark:text-slate-300">
                  Children from divorced families show significantly higher rates of behavioral
                  problems, academic struggles, and mental health issues—often exacerbated by
                  court-imposed alienation.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 text-center border-t-4 border-gold">
                <div className="text-4xl font-bold text-gold mb-3">28 Years</div>
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                  Development Time
                </h3>
                <p className="text-sm text-navy/80 dark:text-slate-300">
                  Average time it takes to develop family relationship competence—interrupted and
                  damaged by adversarial family court processes.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 text-center border-t-4 border-red">
                <div className="text-4xl font-bold text-red mb-3">96%</div>
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                  Want Both Parents
                </h3>
                <p className="text-sm text-navy/80 dark:text-slate-300">
                  Of children want both parents involved in their lives. Yet family courts
                  routinely reduce one parent to 'visitor' status or enable complete erasure.
                </p>
              </div>

              {/* Stat 5 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 text-center border-t-4 border-navy">
                <div className="text-4xl font-bold text-navy dark:text-slate-100 mb-3">$50B+</div>
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                  Annual Cost
                </h3>
                <p className="text-sm text-navy/80 dark:text-slate-300">
                  The economic impact of family breakdown on society, including mental health
                  services, incarceration, lost productivity, and generational poverty.
                </p>
              </div>

              {/* Stat 6 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 text-center border-t-4 border-red">
                <div className="text-4xl font-bold text-red mb-3">Zero</div>
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                  Accountability
                </h3>
                <p className="text-sm text-navy/80 dark:text-slate-300">
                  No meaningful consequences for violating custody orders, making false
                  allegations, or enabling parental alienation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why State Courts Can't Fix This */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Why State Courts Can't Fix This
              </h2>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 border-l-4 border-red">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Every State Is Different
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  50 different state systems with 50 different standards. What's alienation in one
                  state is 'acting in the child's best interest' in another.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 border-l-4 border-navy">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Judicial Immunity
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Family court judges face virtually no accountability for decisions that destroy
                  parent-child relationships. Bad decisions have no consequences.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 border-l-4 border-gold">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  'Best Interest' Is Subjective
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  The standard used in every state—'best interest of the child'—has no objective
                  definition. It means whatever the judge decides it means.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 border-l-4 border-red">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Corruption and Bias
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Guardian ad litems, custody evaluators, and court-appointed professionals profit
                  from prolonged conflict. The system is incentivized to keep families fighting,
                  not to resolve cases.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 border-l-4 border-navy">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  No Constitutional Framework
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  The parent-child relationship is not explicitly protected by the Constitution.
                  Without federal protections, states are free to destroy families with impunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Federal Reform Looks Like */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                What Federal Reform Looks Like
              </h2>
            </div>

            <div className="space-y-8">
              {/* Reform 1 */}
              <div className="rounded-lg bg-white p-8 shadow-md dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-gold mb-4">
                  Constitutional Protection for Parent-Child Relationships
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed">
                  Recognize the parent-child bond as a fundamental right deserving of strict
                  scrutiny protection.
                </p>
              </div>

              {/* Reform 2 */}
              <div className="rounded-lg bg-white p-8 shadow-md dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-gold mb-4">
                  Federal Standards for Custody Decisions
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 mb-4">
                  Establish baseline standards that all states must meet, including:
                </p>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• Presumption of equal parenting time unless proven otherwise</li>
                  <li>• Objective criteria for 'best interest' determinations</li>
                  <li>• Recognition of parental alienation as child abuse</li>
                </ul>
              </div>

              {/* Reform 3 */}
              <div className="rounded-lg bg-white p-8 shadow-md dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-gold mb-4">
                  Accountability for Judges and Courts
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 mb-4">
                  Create federal oversight and consequences for:
                </p>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• Judges who repeatedly make decisions later overturned</li>
                  <li>• Courts that enable parental alienation</li>
                  <li>• Systems with patterns of rights violations</li>
                </ul>
              </div>

              {/* Reform 4 */}
              <div className="rounded-lg bg-white p-8 shadow-md dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-gold mb-4">
                  Consequences for Violating Orders
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 mb-4">
                  Federal enforcement mechanisms for custody orders:
                </p>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• Criminal penalties for willful violation</li>
                  <li>• Immediate remedies for denied parenting time</li>
                  <li>• Compensation for parents whose rights are violated</li>
                </ul>
              </div>

              {/* Reform 5 */}
              <div className="rounded-lg bg-white p-8 shadow-md dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-gold mb-4">
                  Protection Against False Allegations
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed">
                  Penalties for provably false allegations of abuse used to gain custody advantage.
                </p>
              </div>

              {/* Reform 6 */}
              <div className="rounded-lg bg-white p-8 shadow-md dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-gold mb-4">Training Requirements</h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 mb-4">
                  Federal standards for judicial education on:
                </p>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• Parental alienation psychology</li>
                  <li>• PTSD and veteran issues</li>
                  <li>• Domestic violence vs. high-conflict divorce</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Requires a Movement */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Why This Requires a Movement
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                Congress won't act without pressure. State courts won't reform without federal
                mandates. The system is broken by design, and those who profit from the brokenness
                will fight to preserve it.
              </p>
            </div>

            <div className="rounded-lg bg-gold/10 border-2 border-gold/30 p-8 dark:bg-slate-800/50">
              <p className="text-lg font-semibold text-navy dark:text-slate-100 mb-4">
                That's why we need:
              </p>
              <ul className="space-y-3 text-navy/80 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-gold flex-shrink-0 mt-1"
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
                  <div>
                    <strong className="text-navy dark:text-slate-100">Organized advocacy</strong>{' '}
                    to track federal legislation and coordinate action
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-gold flex-shrink-0 mt-1"
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
                  <div>
                    <strong className="text-navy dark:text-slate-100">Public awareness</strong> of
                    the 22 million children affected
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-gold flex-shrink-0 mt-1"
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
                  <div>
                    <strong className="text-navy dark:text-slate-100">
                      Constitutional litigation
                    </strong>{' '}
                    to establish parent-child protections
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-gold flex-shrink-0 mt-1"
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
                  <div>
                    <strong className="text-navy dark:text-slate-100">Political pressure</strong>{' '}
                    on representatives to prioritize family court reform
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-gold flex-shrink-0 mt-1"
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
                  <div>
                    <strong className="text-navy dark:text-slate-100">Coalition building</strong>{' '}
                    across political divides—this isn't left or right, it's parents vs. a broken
                    system
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Family Unity Hub Section */}
        <section className="bg-gradient-to-r from-gold to-gold/80 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
                Family Unity Hub: The Platform for Reform
              </h2>
              <p className="text-xl text-white/90">
                I built Family Unity Hub to provide what the movement needs:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-10">
              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Legislative Tracking</h3>
                <p className="text-white/90">
                  Monitor federal bills related to family court reform. See which representatives
                  support reform. Track progress in real-time.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Constitutional Analysis</h3>
                <p className="text-white/90">
                  Analyze legislation and court decisions through the lens of constitutional
                  principles. Understand how laws align with founding principles about family as
                  the fundamental unit of society.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Expert Network</h3>
                <p className="text-white/90">
                  Connect with lawyers, therapists, advocates, and researchers working on family
                  court reform.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Community Organizing</h3>
                <p className="text-white/90">
                  Find other parents fighting similar battles. Share strategies. Support each
                  other. Organize collective action.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Resources for Parents Fighting</h3>
                <p className="text-white/90">
                  Access to guides, templates, legal resources, and mental health support.
                </p>
              </div>

              <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Advocacy Training</h3>
                <p className="text-white/90">
                  Learn how to effectively advocate for reform—from contacting representatives to
                  testifying at hearings to organizing locally.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://familyunityhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-gold shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
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
            </div>
          </div>
        </section>

        {/* Reform Agenda Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                The Reform Agenda
              </h2>
            </div>

            <div className="space-y-8">
              {/* Immediate */}
              <div className="rounded-lg bg-white p-8 shadow-md dark:bg-slate-800 border-l-4 border-red">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Immediate Priorities (2025-2026)
                </h3>
                <ol className="space-y-2 text-navy/80 dark:text-slate-300 list-decimal list-inside">
                  <li>Build coalition of alienated parents and advocates across all 50 states</li>
                  <li>Draft federal family court reform legislation with bipartisan support</li>
                  <li>Establish constitutional litigation fund for test cases</li>
                  <li>Launch national awareness campaign about the 22M children crisis</li>
                </ol>
              </div>

              {/* Medium-Term */}
              <div className="rounded-lg bg-white p-8 shadow-md dark:bg-slate-800 border-l-4 border-navy">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Medium-Term Goals (2026-2028)
                </h3>
                <ol className="space-y-2 text-navy/80 dark:text-slate-300 list-decimal list-inside">
                  <li>Pass federal legislation establishing baseline custody standards</li>
                  <li>Create federal oversight mechanism for family courts</li>
                  <li>
                    Win Supreme Court case recognizing parent-child relationship as fundamental
                    right
                  </li>
                  <li>Establish training requirements for family court judges</li>
                </ol>
              </div>

              {/* Long-Term */}
              <div className="rounded-lg bg-white p-8 shadow-md dark:bg-slate-800 border-l-4 border-gold">
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Long-Term Vision
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed">
                  A family court system that actually preserves families instead of destroying
                  them. Where parental alienation is recognized and stopped. Where custody orders
                  are enforced. Where judges are accountable. Where 22 million children don't lose
                  parents to a broken system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why I'm Qualified Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Why I'm Qualified to Lead This
              </h2>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  I've Lived It
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Six years of fighting Florida family courts. Four years of documenting every
                  failure. Contempt motions denied. Federal lawsuit dismissed. My daughter erased.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  I Understand the System
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  J.D. and Master of Intellectual Property Law. I know how legislation works, how
                  courts operate, how constitutional litigation proceeds.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  I've Built the Tools
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  The Art of Citizenship: Constitutional analyzer for evaluating legislation
                  through founding principles. Proven ability to build platforms that matter.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  I Have Nothing Left to Lose
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  They already took my daughter. They can't threaten me with losing more. I'm free
                  to fight without fear.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  I Know What 22 Million Families Need
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Because I needed it and it didn't exist. Federal standards. Accountability.
                  Constitutional protections. A movement that demands reform.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  I've Written the Blueprint
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  'Common Sense: Family Is Fundamental' - the constitutional case for reform,
                  available on Amazon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Book Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                The Book: Common Sense - Family Is Fundamental
              </h2>
              <p className="text-xl text-gold font-semibold mt-4">
                The Constitutional Case for Family Court Reform
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                I've written a comprehensive book laying out the constitutional, historical, and
                practical case for why the family must be recognized as the fundamental unit of
                society—and why family courts violating that principle threaten freedom itself.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                'Common Sense: Family Is Fundamental' draws on:
              </p>
              <ul className="space-y-2 text-navy/80 dark:text-slate-300 mt-4 ml-6">
                <li>• The founding fathers' understanding of family as essential to liberty</li>
                <li>
                  • The 28 principles that built America (including Principle 26: The Family as
                  Core Unit)
                </li>
                <li>• My personal experience losing my daughter to a broken system</li>
                <li>• The constitutional framework for federal reform</li>
                <li>• Specific policy proposals and legislative solutions</li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://amzn.to/4hgYTIA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-gold/90 hover:shadow-xl"
              >
                Available now on Amazon
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

            <div className="mt-8 bg-navy/5 border-l-4 border-gold p-6 rounded-r-lg dark:bg-slate-800/50">
              <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed">
                Whether you're a parent fighting for your children, an advocate working on reform,
                a legislator considering policy changes, or simply someone who cares about
                preserving families—this book provides the intellectual foundation for the
                movement.
              </p>
            </div>
          </div>
        </section>

        {/* How You Can Help Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                How You Can Help
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border-2 border-gold/30 p-6 hover:shadow-lg transition-shadow dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Join Family Unity Hub
                </h3>
                <p className="text-navy/80 dark:text-slate-300 mb-4">
                  Track legislation, connect with advocates, and organize for reform.
                </p>
                <a
                  href="https://familyunityhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
                >
                  Sign up →
                </a>
              </div>

              <div className="rounded-lg border-2 border-navy/30 p-6 hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Share Your Story
                </h3>
                <p className="text-navy/80 dark:text-slate-300">
                  The movement needs faces and stories. If family courts destroyed your family,
                  tell your story.
                </p>
              </div>

              <div className="rounded-lg border-2 border-navy/30 p-6 hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Contact Your Representatives
                </h3>
                <p className="text-navy/80 dark:text-slate-300">
                  Demand federal family court reform. Make it a priority issue. Vote accordingly.
                </p>
              </div>

              <div className="rounded-lg border-2 border-gold/30 p-6 hover:shadow-lg transition-shadow dark:bg-slate-800">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Support the Litigation Fund
                </h3>
                <p className="text-navy/80 dark:text-slate-300">
                  Constitutional test cases are expensive. Help fund the legal fight for
                  parent-child protections.
                </p>
              </div>

              <div className="rounded-lg border-2 border-navy/30 p-6 hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Connect With Local Advocates
                </h3>
                <p className="text-navy/80 dark:text-slate-300">
                  Find others in your state fighting similar battles. Organize locally. Build
                  power.
                </p>
              </div>

              <div className="rounded-lg border-2 border-navy/30 p-6 hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Spread Awareness
                </h3>
                <p className="text-navy/80 dark:text-slate-300">
                  22 million children. Most people don't know the scope of the crisis. Share this
                  page. Tell people what's happening.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Message to Legislators */}
        <section className="bg-red/10 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                A Message to Legislators
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                You have children. You have grandchildren. Imagine a system that could erase you
                from their lives with no accountability, no consequences, no recourse.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                That's the system 22 million children are trapped in right now.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                This isn't a partisan issue. This isn't left vs. right. This is parents vs. a
                broken system that destroys families while claiming to protect children.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                You took an oath to uphold the Constitution. The parent-child relationship is a
                fundamental right. It's time to protect it.
              </p>

              <div className="bg-red/10 border-l-4 border-red p-6 mt-8 dark:bg-slate-800/50">
                <p className="text-xl font-bold text-red mb-0">
                  Federal family court reform isn't optional. It's a constitutional imperative.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Message to Fellow Parents */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                A Message to Fellow Parents
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                If you've lost your children to family courts, you're not alone. If you're fighting
                right now, you're not alone. If you're terrified it could happen to you, you're not
                alone.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                22 million children. Millions of parents. All of us navigating a system that
                enables alienation, ignores its own orders, and operates with zero accountability.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                We can change this. Not by fighting alone in isolated court battles, but by
                organizing together and demanding federal reform.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                Join Family Unity Hub. Tell your story. Contact your representatives. Support the
                litigation. Build the coalition.
              </p>

              <div className="bg-gold/10 border-l-4 border-gold p-6 mt-8 dark:bg-slate-800/50">
                <p className="text-2xl font-bold text-navy dark:text-slate-100 mb-0">
                  This system destroyed my family. Let's make sure it's the last generation of
                  families it destroys.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://familyunityhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-gold/90 hover:shadow-xl"
              >
                Join the Movement for Federal Family Court Reform
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
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
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
                  Why do we need federal family court reform?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  22 million children are affected by family court dysfunction annually. Current
                  state-by-state systems have no consistent standards, no accountability for
                  judges, no consequences for violating custody orders, and no recognition of
                  parental alienation. Without federal reform establishing baseline protections and
                  constitutional recognition of parent-child relationships, states will continue
                  destroying families with impunity.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-3">
                  What would federal reform actually change?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Federal reform would establish: (1) Constitutional protection for parent-child
                  relationships as a fundamental right, (2) Baseline custody standards all states
                  must meet, including presumption of equal parenting time, (3) Accountability
                  mechanisms for judges and courts, (4) Federal enforcement of custody orders with
                  real consequences for violations, (5) Recognition of parental alienation as child
                  abuse, (6) Training requirements for family court judges on alienation, PTSD, and
                  domestic violence issues.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-3">
                  Isn't family law a state issue?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  While states implement family law, the parent-child relationship is a fundamental
                  constitutional right that requires federal protection. Just as federal civil
                  rights legislation established baseline protections that states must honor,
                  federal family court standards can establish minimum protections for parent-child
                  relationships while allowing states to exceed those minimums. When state courts
                  systematically violate fundamental rights, federal intervention is not just
                  appropriate—it's constitutionally required.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-3">
                  How can I help if I'm not directly affected?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  (1) Join Family Unity Hub to stay informed and support the movement, (2) Contact
                  your congressional representatives and demand family court reform, (3) Share
                  awareness—most people don't know 22 million children are affected, (4) Support
                  the constitutional litigation fund, (5) Amplify the stories of affected parents
                  and children, (6) Make family court reform a voting priority.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-3">
                  What legislation is currently pending?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Visit Family Unity Hub for real-time tracking of federal legislation related to
                  family court reform, custody standards, parental rights, and constitutional
                  protections. The platform monitors all relevant bills, identifies sponsors,
                  tracks progress, and provides constitutional analysis of proposed reforms.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-lg font-bold text-navy dark:text-slate-100 mb-3">
                  How do I join Family Unity Hub?
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed mb-3">
                  Visit familyunityhub.com to join the platform. You'll get access to legislative
                  tracking, expert network, community organizing tools, advocacy resources, and the
                  ability to connect with other parents and advocates fighting for federal reform.
                  Membership is open to anyone committed to reforming family courts and protecting
                  parent-child relationships.
                </p>
                <a
                  href="https://familyunityhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
                >
                  Join now →
                </a>
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
              &copy; {new Date().getFullYear()} Christopher J. Bradley. Gulf War Veteran, Family
              Court Reform Advocate, Founder of the Movement for Federal Custody Standards.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
