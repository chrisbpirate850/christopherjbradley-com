import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { generateSEO, generateViewport, generateWebsiteSchema } from '@/lib/seo'
import { StructuredData } from '@/components/StructuredData'

export const metadata: Metadata = generateSEO()
export const viewport: Viewport = generateViewport()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const websiteSchema = generateWebsiteSchema({
    name: 'Christopher J. Bradley',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://christopherjbradley.com',
    description: 'Welcome to my website',
  })

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData data={websiteSchema} />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
