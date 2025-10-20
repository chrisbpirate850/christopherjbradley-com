'use client'

import { useState, useEffect } from 'react'
import { OptimizedImage } from './OptimizedImage'
import Link from 'next/link'

interface CarouselImage {
  src: string
  alt: string
  caption?: string
  link?: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  autoPlayInterval?: number
}

export function ImageCarousel({ images, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [images.length, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-2xl group">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Caption/Link overlay */}
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              {image.link ? (
                <Link
                  href={image.link}
                  className="text-white text-sm font-semibold hover:text-gold transition-colors"
                >
                  {image.caption}
                </Link>
              ) : (
                <p className="text-white text-sm font-semibold">{image.caption}</p>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows - visible on hover */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-700"
        aria-label="Previous image"
      >
        <svg
          className="h-6 w-6 text-navy dark:text-slate-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-700"
        aria-label="Next image"
      >
        <svg
          className="h-6 w-6 text-navy dark:text-slate-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-gold'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
