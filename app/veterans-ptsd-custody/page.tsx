import { Metadata } from 'next'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'The VA Failed Me Twice and I Lost My Daughter | Gulf War Veteran Christopher Bradley',
  description:
    'Homeless and misdiagnosed for 24 years, the VA\'s failures cost Gulf War veteran Christopher Bradley his daughter. His story and resources for veterans fighting custody battles.',
  openGraph: {
    title: 'The VA Failed Me Twice and I Lost My Daughter',
    description:
      'How VA delays and inadequate disability ratings cost a Gulf War veteran his daughter.',
    type: 'article',
    images: [
      {
        url: '/images/veterans-custody-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Christopher Bradley - Gulf War Veteran',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The VA Failed Me Twice and I Lost My Daughter',
    description:
      'How VA delays and inadequate disability ratings cost a Gulf War veteran his daughter.',
    images: ['/images/veterans-custody-og.jpg'],
  },
}

// JSON-LD Structured Data
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'When the VA Failed Me Twice: Homelessness, PTSD, and Losing My Daughter',
  description:
    'A Gulf War veteran\'s account of how VA delays, inadequate disability ratings, and family court failures cost him his daughter.',
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
    'VA disability delays, TDIU, veteran custody battle, homeless veteran, PTSD diagnosis, Gulf War veteran, family court, veteran father rights',
}

export default function VeteransPTSDCustodyPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red/20">
                <svg
                  className="h-10 w-10 text-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-navy dark:text-slate-100 sm:text-5xl md:text-6xl">
                The System Failed at Every Level
              </h1>
              <p className="mt-6 text-lg text-red font-semibold">
                When the VA Failed Me Twice: Homelessness, PTSD, and Losing My Daughter
              </p>
            </div>
          </div>
        </section>

        {/* Opening Story */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 first-letter:text-5xl first-letter:font-bold first-letter:text-navy dark:first-letter:text-slate-100 first-letter:mr-1 first-letter:float-left">
                In 1991, I came home from the Gulf War to parades. I was 19. I had driven a tank. I
                had seen things no teenager should see. Thousands had been killed. But no one wanted
                to think about that. No one wanted to hear about it. So I put it away.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                I left the Army and did my best. College. Law school. Marriage. A daughter—the
                greatest joy I'd ever known. But inside, I was withering. The man my parents raised
                me to be was dying, and I didn't know how to stop it.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                Two divorces later, in 2015, I found myself homeless in New York City. That's when I
                finally went to the VA. They found me a bed in a shelter in the Bronx—just for
                veterans. Within weeks, they diagnosed me with PTSD. I started treatment. It was
                helping.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                Then I got papers from Florida. My ex-wife wanted to make her new husband my
                daughter's legal guardian during her deployment. I had to tell her why our daughter
                couldn't come to NYC for the summer—I was in a veterans shelter, getting treatment
                for PTSD.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                I left the shelter. I used the last of my money to fly to Florida and respond to the
                case pro se. I told the court that 90works was helping me get an apartment. That I
                was looking for work. That I was in treatment and it was working.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                The court made me a visitor in my daughter's life. An unwelcome one.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                About a year later, the VA concluded I was entitled to 30% disability for my PTSD.
                About $500 a month. I took it. I didn't know at the time that I should have been
                given TDIU—Total Disability Individual Unemployability—because I couldn't hold work
                as a lawyer. If they had given me full disability when I was literally homeless and
                unemployed in NYC, I would have had a chance. Money for a decent place where my
                daughter could visit. Money to take the Florida bar. A foundation to fight from.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                Instead, I struggled as a broke New York lawyer in Florida with PTSD, trying to find
                work that didn't exist.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                I only learned about TDIU five years after I was diagnosed. In 2019, I applied for
                it. In 2025—ten years after I first went to the VA homeless and unemployed—they
                finally found me eligible. But only going forward. Not retroactive to when I
                actually needed it.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                That extra money, finally, is what allows me to afford the computer and internet
                connection to build these tools. To try to make a difference for others so they
                don't lose what I lost.
              </p>

              <div className="bg-red/10 border-l-4 border-red p-6 my-8 dark:bg-slate-800/50">
                <p className="text-2xl font-bold text-red mb-0">
                  She graduated high school in 2019. I haven't seen her since. Six years of silence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The VA Failed Me Twice Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                The VA Failed Me Twice
              </h2>
            </div>

            <div className="space-y-8">
              {/* First Failure */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-red mb-4">
                  First Failure: The Years of Silence
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  It took <strong className="text-red">24 years</strong> from the Gulf War to get a
                  PTSD diagnosis. Twenty-four years of struggling alone, not understanding why I
                  couldn't function the way I used to, why I was withering inside. By the time they
                  finally diagnosed me, I'd already lost my first marriage, was losing my second,
                  and was homeless.
                </p>
                <div className="flex items-center gap-3 text-navy/70 dark:text-slate-400">
                  <div className="text-4xl font-bold text-red">1991</div>
                  <div className="flex-1 h-1 bg-red/30"></div>
                  <div className="text-4xl font-bold text-red">2015</div>
                </div>
              </div>

              {/* Second Failure */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-red mb-4">
                  Second Failure: The $500 That Should Have Been $3,000
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  When the VA finally acknowledged my PTSD in 2016, they gave me 30%
                  disability—about $500 a month. For a homeless, unemployed attorney with PTSD who
                  couldn't practice law, this was devastating.
                </p>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  I should have been given TDIU immediately. Total Disability Individual
                  Unemployability is for veterans whose service-connected disabilities prevent them
                  from maintaining substantially gainful employment. I was literally homeless. I
                  literally couldn't work. But no one told me about TDIU. No one advocated for me.
                </p>
                <div className="bg-red/5 border border-red/20 rounded-lg p-6 dark:bg-slate-900/50">
                  <p className="font-semibold text-navy dark:text-slate-100 mb-3">
                    If I had gotten TDIU in 2016 (around $3,000+ per month), I could have:
                  </p>
                  <ul className="space-y-2 text-navy/80 dark:text-slate-300">
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
                      Afforded housing where my daughter could visit
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
                      Taken the Florida bar exam
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
                      Had the stability to fight the custody case effectively
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
                      Shown the court I was capable of providing for her
                    </li>
                  </ul>
                </div>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mt-4">
                  Instead, I got $500 a month and told to figure it out.
                </p>
              </div>

              {/* Third Failure */}
              <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-slate-800">
                <h3 className="text-2xl font-bold text-red mb-4">
                  Third Failure: Ten Years Too Late
                </h3>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  It took me five years to even learn TDIU existed. I applied in 2019. The VA
                  approved it in 2025—ten years after I first sought help while homeless. And they
                  made it effective only going forward, not retroactive to when I actually needed
                  it.
                </p>
                <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                  My daughter graduated high school in 2019. I wasn't there. She became an adult. I
                  wasn't there. The VA's delays didn't just cost me money—they cost me my daughter's
                  childhood.
                </p>
                <div className="flex items-center gap-3 text-navy/70 dark:text-slate-400">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red">2015</div>
                    <div className="text-sm">Homeless, seeking help</div>
                  </div>
                  <div className="flex-1 h-1 bg-red/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red">2019</div>
                    <div className="text-sm">Applied for TDIU</div>
                  </div>
                  <div className="flex-1 h-1 bg-red/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red">2025</div>
                    <div className="text-sm">Finally approved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What the Court Saw Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                What the Court Saw
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Me */}
              <div className="rounded-lg border-2 border-red/30 bg-red/5 p-8 dark:bg-slate-800 dark:border-red/20">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4">
                  Me (The Father)
                </h3>
                <ul className="space-y-3 text-navy/80 dark:text-slate-300">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Homeless veteran from NYC shelter
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    No stable housing
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    No income
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Self-represented (couldn't afford a lawyer)
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Unemployed in a state where I wasn't even barred to practice law
                  </li>
                </ul>
              </div>

              {/* Ex-wife */}
              <div className="rounded-lg border-2 border-gold/30 bg-gold/5 p-8 dark:bg-slate-800 dark:border-gold/20">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4">
                  My Ex-Wife
                </h3>
                <ul className="space-y-3 text-navy/80 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 text-gold flex-shrink-0 mt-1"
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
                    Active military with stable income
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 text-gold flex-shrink-0 mt-1"
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
                    Base housing
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 text-gold flex-shrink-0 mt-1"
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
                    Deployed, but with a new husband who could provide stability
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 text-gold flex-shrink-0 mt-1"
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
                    Represented by counsel
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-navy/5 border-l-4 border-navy rounded-r-lg dark:bg-slate-800/50">
              <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                I told the court 90works was helping me get an apartment. That I was looking for
                work. That I was in treatment and it was helping. It didn't matter. They made me a
                visitor. An unwelcome one.
              </p>
              <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mb-4">
                I don't know if her lawyer explicitly told the judge about my PTSD diagnosis. It
                wasn't in the paperwork. But they knew I was in a veterans shelter. They knew I was
                'getting help.' They saw enough.
              </p>
              <p className="text-xl font-bold text-red">
                Homeless veteran from NYC trying to fight pro se versus stable military doctor with
                housing and income.
              </p>
              <p className="text-lg text-navy/80 dark:text-slate-300 leading-relaxed mt-4">
                I never had a chance.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                The Timeline That Broke Everything
              </h2>
            </div>

            <div className="space-y-6">
              {/* 1991 */}
              <div className="border-l-4 border-red pl-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl font-bold text-red">1991</span>
                  <span className="text-lg font-semibold text-navy dark:text-slate-100">
                    Gulf War
                  </span>
                </div>
                <p className="text-navy/80 dark:text-slate-300">
                  Came home with wounds no one wanted to see.
                </p>
              </div>

              {/* 1991-2015 */}
              <div className="border-l-4 border-navy pl-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl font-bold text-navy dark:text-slate-100">
                    1991-2015
                  </span>
                  <span className="text-lg font-semibold text-navy dark:text-slate-100">
                    The Withering Years
                  </span>
                </div>
                <p className="text-navy/80 dark:text-slate-300">
                  Put it away. Built a life. Law school. Marriage. Daughter. Withering inside while
                  the world kept turning.
                </p>
              </div>

              {/* 2015 */}
              <div className="border-l-4 border-red pl-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl font-bold text-red">2015</span>
                  <span className="text-lg font-semibold text-navy dark:text-slate-100">
                    The Breaking Point
                  </span>
                </div>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• Homeless in NYC after second divorce. Finally went to VA.</li>
                  <li>• Diagnosed with PTSD. Treatment started. It was helping.</li>
                  <li>• Got papers from Florida. Ex wants new husband to be legal guardian.</li>
                  <li>• Left shelter, flew to Florida with last funds. Appeared pro se.</li>
                  <li>• Court makes me a visitor. Unwelcome.</li>
                </ul>
              </div>

              {/* 2016 */}
              <div className="border-l-4 border-red pl-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl font-bold text-red">2016</span>
                  <span className="text-lg font-semibold text-navy dark:text-slate-100">
                    The Inadequate Rating
                  </span>
                </div>
                <p className="text-navy/80 dark:text-slate-300">
                  VA grants 30% disability. $500/month. Not enough to survive.
                </p>
              </div>

              {/* 2016-2019: The Fight */}
              <div className="border-l-4 border-navy pl-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl font-bold text-navy dark:text-slate-100">
                    2016-2019
                  </span>
                  <span className="text-lg font-semibold text-navy dark:text-slate-100">
                    The Fight
                  </span>
                </div>
                <div className="space-y-4 text-navy/80 dark:text-slate-300">
                  <div>
                    <p className="font-semibold text-navy dark:text-slate-100 mb-1">
                      2016: 90works Delivers Half a Promise
                    </p>
                    <p>
                      90works gave me a one-bedroom apartment immediately and promised a job within
                      90 days. They kept the first half of the deal. When they couldn't help me
                      find work and could no longer help with rent, I was facing eviction. That's
                      when I realized I could get an old boat for little money and live on it.
                      Neither my ex-wife nor the court were impressed.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy dark:text-slate-100 mb-1">
                      2016-2017: The Boat Years Begin
                    </p>
                    <p>
                      The little visitation time the Florida court had given me started to be
                      ignored. The court didn't care. The police didn't care. The school didn't
                      care what was written in the order. I did my best. I worked as a cook at
                      Olive Garden—the one right in front of the marina where I lived on my old
                      boat. When I'd saved enough for a car, I found a boat at a marina a mile from
                      my daughter's school. Things were getting better. I was working. I was
                      renting out the cabin my daughter could have stayed in on Airbnb. I wanted to
                      be a father.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy dark:text-slate-100 mb-1">
                      2017-2018: Belgium
                    </p>
                    <p>
                      Then the court permitted my daughter—over my objection—to spend her entire
                      junior year in Belgium on a cultural immersion program. No academic credit. No
                      way for me to be part of her life.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy dark:text-slate-100 mb-1">
                      2018-2019: The Final Push
                    </p>
                    <p>
                      When she returned just before her senior year, we had lunch once. But the
                      order that gave me every other weekend and one night a week was totally
                      ignored. My motions for contempt were denied. My civil rights lawsuit filed in
                      federal court was dismissed as frivolous.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2019 */}
              <div className="border-l-4 border-red pl-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl font-bold text-red">2019</span>
                  <span className="text-lg font-semibold text-navy dark:text-slate-100">
                    Graduation Day
                  </span>
                </div>
                <div className="space-y-3 text-navy/80 dark:text-slate-300">
                  <p>
                    I attended my daughter's high school graduation in 2019. She said hello to me
                    after the ceremony. Five minutes later, she said goodbye.
                  </p>
                  <p className="font-semibold text-red">I have not seen her since.</p>
                  <p>
                    Despite every effort I have made, I cannot even get her to reply to an email.
                    Her uncle told me in a message a year ago she was doing fine and he would
                    encourage her to contact me.
                  </p>
                  <p className="mt-4">• Finally learn about TDIU. Apply.</p>
                </div>
              </div>

              {/* 2019-2025 */}
              <div className="border-l-4 border-red pl-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl font-bold text-red">2019-2025</span>
                  <span className="text-lg font-semibold text-navy dark:text-slate-100">
                    Six Years of Silence
                  </span>
                </div>
                <p className="text-navy/80 dark:text-slate-300">No contact with my daughter.</p>
              </div>

              {/* 2025 */}
              <div className="border-l-4 border-gold pl-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl font-bold text-gold">2025</span>
                  <span className="text-lg font-semibold text-navy dark:text-slate-100">
                    Too Late, But Building Anyway
                  </span>
                </div>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• VA approves TDIU. Ten years too late. Only going forward.</li>
                  <li>• Finally have enough to build tools. To try to help others.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* For Veterans Fighting Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                For Veterans Fighting This Battle
              </h2>
            </div>

            <div className="space-y-6">
              {/* Tip 1 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 border-l-4 border-gold">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Get Your VA Rating IMMEDIATELY
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Don't wait. Don't put it off. The courts move faster than the VA. By the time you
                  get diagnosed and rated, custody could already be decided.
                </p>
              </div>

              {/* Tip 2 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 border-l-4 border-red">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Know About TDIU
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed mb-3">
                  If your service-connected disabilities prevent you from working, you're entitled
                  to 100% disability pay even if your combined rating is less than 100%. Don't
                  accept 30% or 50% if you literally can't work. Fight for TDIU immediately.
                </p>
                <a
                  href="https://www.va.gov/disability/eligibility/special-claims/individual-unemployability/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-red hover:text-red/80 transition-colors"
                >
                  Learn about TDIU
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

              {/* Tip 3 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 border-l-4 border-navy">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Document Everything
                </h3>
                <ul className="space-y-2 text-navy/80 dark:text-slate-300">
                  <li>• Save every interaction with your children</li>
                  <li>• Keep records of your treatment</li>
                  <li>• Document your progress</li>
                  <li>• Get character references</li>
                </ul>
              </div>

              {/* Tip 4 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 border-l-4 border-gold">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Get a Lawyer
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  If you can possibly afford it, get a lawyer who understands veteran issues. I
                  appeared pro se because I had no money. It cost me my daughter.
                </p>
              </div>

              {/* Tip 5 */}
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800 border-l-4 border-red">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-3">
                  Never Give Up
                </h3>
                <p className="text-navy/80 dark:text-slate-300 leading-relaxed">
                  Even when it feels hopeless. Even when you've lost. Kids grow up. Doors can
                  reopen. Keep your heart open to that possibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                Resources
              </h2>
            </div>

            <div className="space-y-8">
              {/* VA Resources */}
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  VA Resources
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800/50">
                    <h4 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                      VA Mental Health
                    </h4>
                    <p className="text-navy/80 dark:text-slate-300 mb-3">
                      Free PTSD treatment, counseling, and support groups for veterans.
                    </p>
                    <a
                      href="https://www.mentalhealth.va.gov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                    >
                      Visit VA Mental Health →
                    </a>
                  </div>

                  <div className="rounded-lg border-2 border-red/30 bg-red/5 p-6 dark:bg-slate-800 dark:border-red/20">
                    <h4 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                      Veterans Crisis Line
                    </h4>
                    <p className="text-navy/80 dark:text-slate-300 mb-3">
                      24/7 confidential support for veterans in crisis.
                    </p>
                    <div className="text-3xl font-bold text-red">988 → Press 1</div>
                  </div>

                  <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800/50">
                    <h4 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                      VA Disability Compensation
                    </h4>
                    <a
                      href="https://www.va.gov/disability/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                    >
                      Learn about disability benefits →
                    </a>
                  </div>

                  <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800/50">
                    <h4 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                      TDIU Information
                    </h4>
                    <p className="text-navy/80 dark:text-slate-300 mb-3">
                      Total Disability Individual Unemployability - if you can't work due to
                      service-connected disabilities, you may be entitled to full disability pay.
                    </p>
                    <a
                      href="https://www.va.gov/disability/eligibility/special-claims/individual-unemployability/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                    >
                      Learn about TDIU →
                    </a>
                  </div>
                </div>
              </div>

              {/* Legal Support */}
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Legal Support
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800/50">
                    <h4 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                      Veterans Legal Services
                    </h4>
                    <a
                      href="https://www.vlsp.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                    >
                      Find free legal help →
                    </a>
                  </div>

                  <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800/50">
                    <h4 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                      DAV (Disabled American Veterans)
                    </h4>
                    <a
                      href="https://www.dav.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                    >
                      Get advocacy support →
                    </a>
                  </div>
                </div>
              </div>

              {/* Custody Support */}
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Custody & Family Support
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800/50">
                    <h4 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                      National Parents Organization
                    </h4>
                    <a
                      href="https://nationalparentsorganization.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                    >
                      Find advocacy resources →
                    </a>
                  </div>

                  <div className="rounded-lg border-2 border-navy/20 p-6 dark:border-slate-700 dark:bg-slate-800/50">
                    <h4 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                      Parental Alienation Awareness
                    </h4>
                    <a
                      href="https://paaousa.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                    >
                      Get support and education →
                    </a>
                  </div>
                </div>
              </div>

              {/* Reform */}
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-slate-100 mb-4">
                  Join the Reform Movement
                </h3>
                <div className="rounded-lg border-2 border-red/30 bg-red/5 p-6 dark:bg-slate-800 dark:border-red/20">
                  <h4 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">
                    Family Unity Hub
                  </h4>
                  <p className="text-navy/80 dark:text-slate-300 mb-3">
                    Legislative tracking, expert network, and advocacy for family court reform.
                    Built by veterans and alienated parents fighting for their children.
                  </p>
                  <a
                    href="https://familyunityhub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-red hover:text-red/80 transition-colors"
                  >
                    Join the fight for federal reform →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Built Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                What I Built From the Ashes
              </h2>
              <p className="mt-4 text-lg text-navy/70 dark:text-slate-300">
                It's only now, with the disability I should have gotten ten years ago, that I can
                afford to build these tools
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Platform 1 */}
              <div className="rounded-lg border-2 border-gold/30 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  There Is Still Time
                </h3>
                <p className="text-sm text-gold font-semibold mb-3">Visual timer for presence</p>
                <p className="text-navy/80 dark:text-slate-300 mb-4">
                  When you've lost years, seconds matter.
                </p>
                <a
                  href="https://thereisstilltime.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
                >
                  Visit →
                </a>
              </div>

              {/* Platform 2 */}
              <div className="rounded-lg border-2 border-red/30 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  The Central Question
                </h3>
                <p className="text-sm text-red font-semibold mb-3">Love consciousness platform</p>
                <p className="text-navy/80 dark:text-slate-300 mb-4">
                  'Are you feeling love this second?'
                </p>
                <a
                  href="https://thecentralquestion.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-red hover:text-red/80 transition-colors"
                >
                  Visit →
                </a>
              </div>

              {/* Platform 3 */}
              <div className="rounded-lg border-2 border-navy/30 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  Family Unity Hub
                </h3>
                <p className="text-sm text-navy font-semibold mb-3 dark:text-slate-300">
                  Federal family court reform
                </p>
                <p className="text-navy/80 dark:text-slate-300 mb-4">
                  22 million children need systemic change.
                </p>
                <a
                  href="https://familyunityhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-navy hover:text-gold transition-colors dark:text-slate-100 dark:hover:text-gold"
                >
                  Visit →
                </a>
              </div>

              {/* Platform 4 */}
              <div className="rounded-lg border-2 border-gold/30 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">
                  The Citizen's Compass
                </h3>
                <p className="text-sm text-gold font-semibold mb-3">Constitutional principles</p>
                <p className="text-navy/80 dark:text-slate-300 mb-4">
                  What I wanted to teach my daughter.
                </p>
                <a
                  href="https://thecitizenscompass.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gold hover:text-gold/80 transition-colors"
                >
                  Visit →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Book Section */}
        <section className="bg-gold/10 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-slate-800 sm:p-12 border-2 border-gold/30">
              <div className="text-center mb-8">
                <span className="inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-semibold text-gold mb-4">
                  The Blueprint for Reform
                </span>
                <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                  Common Sense: Family Is Fundamental
                </h2>
                <p className="text-xl text-gold font-semibold mt-4">
                  Why the Constitution Demands We Fix These Systems
                </p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                  The VA failed me twice. The family court failed me. But these aren't separate failures—they're
                  symptoms of a deeper problem: systems that have forgotten the constitutional principle that
                  <strong className="text-navy dark:text-slate-100"> the family is the fundamental unit of society</strong>.
                </p>

                <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-4">
                  This book makes the case for why veterans and families deserve better—not as a matter of
                  charity, but as a matter of constitutional right. It examines:
                </p>

                <ul className="space-y-2 text-navy/80 dark:text-slate-300 mt-4 list-disc pl-6">
                  <li>Why bureaucratic delays that separate children from loving parents violate fundamental rights</li>
                  <li>How the family court system has become a constitutional crisis affecting 22 million children</li>
                  <li>What the Founders understood about family that modern courts have forgotten</li>
                  <li>The path to federal reform that protects veterans, families, and children</li>
                </ul>

                <div className="bg-red/10 border-l-4 border-red p-6 my-6 dark:bg-slate-800/50">
                  <p className="text-lg font-semibold text-navy dark:text-slate-100 mb-2">
                    For Veterans Fighting Custody Battles:
                  </p>
                  <p className="text-navy/80 dark:text-slate-300 mb-0">
                    Understanding the constitutional framework can help you articulate why PTSD treatment
                    and VA delays shouldn't cost you your children. This book provides the intellectual
                    foundation for that argument.
                  </p>
                </div>
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

        {/* You're Not Alone Section */}
        <section className="bg-navy/5 py-16 sm:py-24 dark:bg-slate-900/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy dark:text-slate-100 sm:text-4xl">
                You're Not Alone
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300">
                If you're a veteran fighting for your kids while the VA drags its feet, while you
                can't afford a lawyer, while the court sees homelessness instead of service—you're
                not alone.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                The system failed me at every level. VA delays. Inadequate disability. Family courts
                that saw instability instead of sacrifice.
              </p>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-slate-300 mt-6">
                But I'm still here. Still building. Still fighting to make sure other veterans don't
                lose what I lost.
              </p>

              <div className="bg-gold/10 border-l-4 border-gold p-6 mt-8 dark:bg-slate-800/50">
                <p className="text-xl font-bold text-navy dark:text-slate-100 mb-0">
                  Don't give up. Don't stop showing up. Your service mattered. Your sacrifice
                  mattered. Your love for your children matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red to-red/80 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Join Veterans Fighting for Their Families
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              The system failed me. Together, we can fix it so it doesn't fail you.
            </p>
            <a
              href="https://familyunityhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-red shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
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
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy/10 bg-navy/5 dark:border-slate-700 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-navy/70 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Christopher J. Bradley. Gulf War Veteran, Father,
              Advocate for Veterans and Families.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
