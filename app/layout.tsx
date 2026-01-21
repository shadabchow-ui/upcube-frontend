import type { Metadata } from "next";
import "./globals.css";

import LeftNav from "@/components/left-nav";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Upcube",
  description: "A clean frontend for discovering tools, products, and AI-powered workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-white">
        <LeftNav />

        {/* Main content area with left offset for sidebar */}
        <div className="min-h-screen md:pl-64">
          <div className="min-h-screen">
            {children}
          </div>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}


