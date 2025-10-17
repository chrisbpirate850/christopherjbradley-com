/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(baseUrl: string, widths: number[] = [640, 750, 828, 1080, 1200, 1920]) {
  return widths.map((width) => `${baseUrl}?w=${width} ${width}w`).join(', ')
}

/**
 * Calculate image dimensions while maintaining aspect ratio
 */
export function calculateAspectRatio(
  originalWidth: number,
  originalHeight: number,
  targetWidth?: number,
  targetHeight?: number
): { width: number; height: number } {
  if (targetWidth && !targetHeight) {
    return {
      width: targetWidth,
      height: Math.round((originalHeight / originalWidth) * targetWidth),
    }
  }

  if (targetHeight && !targetWidth) {
    return {
      width: Math.round((originalWidth / originalHeight) * targetHeight),
      height: targetHeight,
    }
  }

  return { width: originalWidth, height: originalHeight }
}

/**
 * Get optimal image sizes attribute for responsive images
 */
export function getImageSizes(breakpoints?: {
  mobile?: string
  tablet?: string
  desktop?: string
}): string {
  const {
    mobile = '100vw',
    tablet = '50vw',
    desktop = '33vw',
  } = breakpoints || {}

  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`
}

/**
 * Generate blur data URL for image placeholders
 */
export function getBlurDataURL(width: number = 10, height: number = 10): string {
  const canvas = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="0%" />
          <stop stop-color="#222" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#g)" />
    </svg>
  `
  const base64 = Buffer.from(canvas).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}
