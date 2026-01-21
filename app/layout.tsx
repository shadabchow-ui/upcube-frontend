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
        <LeftNav />

        {/* Main Content */}
        <div className="flex min-h-screen flex-col md:ml-[220px]">
          <main className="flex-1 px-6 py-10 pt-20 md:px-10 md:pt-10">
            {children}
          </main>

          <SiteFooter />
        </div>
      </body>
    </html>
  )
}





