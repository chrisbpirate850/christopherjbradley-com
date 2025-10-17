import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata: Metadata = generateSEO({
  title: 'Contact',
  description: 'Get in touch with us',
  keywords: ['Contact', 'Get in touch', 'Email'],
})

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-navy/10 dark:border-slate-700">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-navy dark:text-slate-100">
                Christopher J. Bradley
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/about"
                className="text-sm font-medium text-navy/80 transition-colors hover:text-navy dark:text-slate-300 dark:hover:text-slate-100"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-sm font-medium text-navy dark:text-slate-100"
              >
                Contact
              </a>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-navy dark:text-slate-100">Contact Us</h1>

        <div className="mt-8">
          <p className="text-lg text-navy/80 dark:text-slate-300">
            We&apos;d love to hear from you. Fill out the form below to get in touch.
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-navy dark:text-slate-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-lg border border-navy/20 bg-white px-4 py-2 text-navy focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-slate-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy dark:text-slate-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-lg border border-navy/20 bg-white px-4 py-2 text-navy focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-slate-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-navy dark:text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="mt-1 block w-full rounded-lg border border-navy/20 bg-white px-4 py-2 text-navy focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-slate-500"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy/90 dark:bg-slate-700 dark:hover:bg-slate-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy/10 bg-navy/5 dark:border-slate-700 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-navy/70 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Christopher J. Bradley. Built with Next.js 14.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
