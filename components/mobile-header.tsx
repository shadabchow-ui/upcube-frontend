import type { Metadata } from "next"
import "./globals.css"

import LeftNav from "@/components/left-nav"
import SiteFooter from "@/components/site-footer"
import MobileHeader from "@/components/mobile-header"

export const metadata: Metadata = {
  title: "Upcube",
  description: "Upcube — AI products, APIs, and tools",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Desktop Left Navigation */}
        <div className="hidden md:block">
          <LeftNav />
        </div>

        {/* Main Content */}
        <div className="flex min-h-screen flex-col md:ml-[220px]">
          <main className="flex-1 px-4 pt-20 pb-6 md:px-10 md:py-10">
            {children}
          </main>

          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
