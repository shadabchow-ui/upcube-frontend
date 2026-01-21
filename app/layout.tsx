import type { Metadata } from "next"
import "./globals.css"

import LeftNav from "@/components/left-nav"
import SiteFooter from "@/components/site-footer"

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
        {/* Left navigation */}
        <LeftNav />

        {/* Main layout */}
        <div className="ml-[260px] flex min-h-screen flex-col">
          <main className="flex-1 px-10 py-10">
            {children}
          </main>

          {/* Footer */}
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}




