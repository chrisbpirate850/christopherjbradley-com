'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

interface NavigationProps {
  showHomeLink?: boolean
}

export function Navigation({ showHomeLink = false }: NavigationProps) {
  const [isStoryMenuOpen, setIsStoryMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-navy/10 dark:border-slate-700">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-navy dark:text-slate-100 hover:text-gold transition-colors"
            >
              Christopher J. Bradley
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {showHomeLink && (
              <Link
                href="/"
                className="text-sm font-medium text-navy/80 transition-colors hover:text-navy dark:text-slate-300 dark:hover:text-slate-100"
              >
                Home
              </Link>
            )}
            <a
              href={showHomeLink ? '/#story' : '#story'}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-navy dark:text-slate-300 dark:hover:text-slate-100"
            >
              Story
            </a>
            <a
              href={showHomeLink ? '/#platforms' : '#platforms'}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-navy dark:text-slate-300 dark:hover:text-slate-100"
            >
              Platforms
            </a>

            {/* My Story Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsStoryMenuOpen(true)}
              onMouseLeave={() => setIsStoryMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-navy/80 transition-colors hover:text-navy dark:text-slate-300 dark:hover:text-slate-100">
                My Story
                <svg
                  className={`h-4 w-4 transition-transform ${isStoryMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isStoryMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-800 dark:ring-slate-700 z-50">
                  <div className="py-2">
                    <Link
                      href="/veterans-ptsd-custody"
                      className="block px-4 py-3 text-sm text-navy hover:bg-navy/5 dark:text-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="font-semibold text-red mb-1">Veterans & PTSD Custody</div>
                      <div className="text-xs text-navy/70 dark:text-slate-400">
                        When the VA failed me twice and I lost my daughter
                      </div>
                    </Link>
                    <Link
                      href="/fighting-parental-alienation"
                      className="block px-4 py-3 text-sm text-navy hover:bg-navy/5 dark:text-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="font-semibold text-gold mb-1">Fighting Parental Alienation</div>
                      <div className="text-xs text-navy/70 dark:text-slate-400">
                        Six years of being erased by family courts
                      </div>
                    </Link>
                    <Link
                      href="/family-court-reform"
                      className="block px-4 py-3 text-sm text-navy hover:bg-navy/5 dark:text-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="font-semibold text-navy dark:text-slate-100 mb-1">
                        Family Court Reform
                      </div>
                      <div className="text-xs text-navy/70 dark:text-slate-400">
                        Why I'm running for Congress to fix the system
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-navy hover:bg-navy/5 dark:text-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
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
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-navy/10 dark:border-slate-700 py-4">
            <div className="space-y-1">
              {showHomeLink && (
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm font-medium text-navy/80 hover:bg-navy/5 hover:text-navy dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <a
                href={showHomeLink ? '/#story' : '#story'}
                className="block px-4 py-2 text-sm font-medium text-navy/80 hover:bg-navy/5 hover:text-navy dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Story
              </a>
              <a
                href={showHomeLink ? '/#platforms' : '#platforms'}
                className="block px-4 py-2 text-sm font-medium text-navy/80 hover:bg-navy/5 hover:text-navy dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Platforms
              </a>

              {/* My Story Section in Mobile */}
              <div className="px-4 py-2">
                <div className="text-xs font-semibold text-gold uppercase tracking-wide mb-2">
                  My Story
                </div>
                <div className="space-y-1 pl-2">
                  <Link
                    href="/veterans-ptsd-custody"
                    className="block py-2 text-sm text-navy dark:text-slate-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium mb-0.5">Veterans & PTSD Custody</div>
                    <div className="text-xs text-navy/60 dark:text-slate-400">
                      VA failures and custody loss
                    </div>
                  </Link>
                  <Link
                    href="/fighting-parental-alienation"
                    className="block py-2 text-sm text-navy dark:text-slate-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium mb-0.5">Fighting Parental Alienation</div>
                    <div className="text-xs text-navy/60 dark:text-slate-400">
                      Six years of erasure
                    </div>
                  </Link>
                  <Link
                    href="/family-court-reform"
                    className="block py-2 text-sm text-navy dark:text-slate-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium mb-0.5">Family Court Reform</div>
                    <div className="text-xs text-navy/60 dark:text-slate-400">
                      Running to fix the system
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
