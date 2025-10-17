import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata: Metadata = generateSEO({
  title: 'About',
  description: 'Learn more about this Next.js project and its features',
  keywords: ['About', 'Next.js', 'React', 'TypeScript', 'Web Development'],
})

export default function About() {
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
                className="text-sm font-medium text-navy dark:text-slate-100"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-sm font-medium text-navy/80 transition-colors hover:text-navy dark:text-slate-300 dark:hover:text-slate-100"
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
        <h1 className="text-4xl font-bold text-navy dark:text-slate-100">About This Project</h1>

        <div className="prose prose-lg mt-8 dark:prose-invert">
          <p className="text-navy/80 dark:text-slate-300">
            This is a modern Next.js 14 project built with the App Router, TypeScript, and
            Tailwind CSS. It demonstrates best practices for building fast, SEO-friendly, and
            accessible web applications.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy dark:text-slate-100">
            Technical Stack
          </h2>
          <ul className="mt-4 space-y-2 text-navy/80 dark:text-slate-300">
            <li><strong>Next.js 14:</strong> Latest version with App Router for optimal performance</li>
            <li><strong>React 18:</strong> Modern React features and server components</li>
            <li><strong>TypeScript:</strong> Full type safety throughout the application</li>
            <li><strong>Tailwind CSS:</strong> Utility-first CSS framework with custom color palette</li>
            <li><strong>next-themes:</strong> Theme management for dark/light mode</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-navy dark:text-slate-100">
            SEO Features
          </h2>
          <ul className="mt-4 space-y-2 text-navy/80 dark:text-slate-300">
            <li>Comprehensive meta tag management</li>
            <li>Structured data (JSON-LD) support</li>
            <li>Automatic sitemap generation</li>
            <li>robots.txt configuration</li>
            <li>Open Graph and Twitter Card support</li>
            <li>Semantic HTML and accessibility</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-navy dark:text-slate-100">
            Performance Optimizations
          </h2>
          <ul className="mt-4 space-y-2 text-navy/80 dark:text-slate-300">
            <li>System font stack (no font downloads required)</li>
            <li>Image optimization with AVIF/WebP formats</li>
            <li>Responsive image sizes and lazy loading</li>
            <li>Minimal JavaScript bundle size</li>
            <li>Server-side rendering and static generation</li>
          </ul>
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
