import type { Metadata } from 'next'
import './globals.css'
import { LeftNav } from '@/components/left-nav'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Upcube',
  description: 'Upcube — navigation hub for products and AI tools.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground">
        <div className="flex min-h-dvh">
          <LeftNav />
          <div className="min-w-0 flex-1">
            <div className="flex min-h-dvh flex-col">
              {children}
              <SiteFooter />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

