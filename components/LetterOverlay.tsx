'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { OptimizedImage } from './OptimizedImage'

export function LetterOverlay() {
  const [isVisible, setIsVisible] = useState(true)
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false)

  useEffect(() => {
    // Check if user has already dismissed the letter in this session
    const dismissed = sessionStorage.getItem('letterDismissed')
    if (dismissed === 'true') {
      setIsVisible(false)
      setHasBeenDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setHasBeenDismissed(true)
    sessionStorage.setItem('letterDismissed', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-700">
      <div className="relative">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-4 -right-4 z-10 rounded-full bg-white dark:bg-slate-800 p-3 text-navy dark:text-slate-100 shadow-2xl hover:bg-gold hover:text-white dark:hover:bg-gold transition-all hover:scale-110"
          aria-label="Close letter"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Handwritten letter image - fits image exactly */}
        <div className="shadow-2xl rounded-lg overflow-hidden max-h-[90vh] max-w-[90vw]">
          <OptimizedImage
            src="/images/front of love everyone letter.jpg"
            alt="Dear World - A handwritten letter from Christopher J. Bradley"
            width={1200}
            height={900}
            className="w-auto h-auto max-h-[90vh] max-w-[90vw] object-contain"
            priority
          />
        </div>

        {/* Hint text */}
        <p className="text-center text-white text-sm mt-4 opacity-75">
          Click the × button to continue • Visit /dear-world anytime
        </p>
      </div>
    </div>
  )
}
