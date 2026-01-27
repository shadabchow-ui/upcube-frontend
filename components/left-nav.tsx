'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  // keep your on-site pages if you want
  { label: "Research", href: "/research-overview" },

  // subdomains (your actual apps)
  { label: "Chat", href: "https://chat.upcube.ai" },
  { label: "Images", href: "https://image.upcube.ai" },
  { label: "Headshots", href: "https://headshots.upcube.ai" },
  { label: "Voice", href: "https://voice.upcube.ai" },
  { label: "Video", href: "https://video.upcube.ai" },
  { label: "AI Detector", href: "https://detect.upcube.ai" },
  { label: "Grammer", href: "https://script.upcube.ai" },

  // keep these internal if they exist
  { label: "For Business", href: "/business" },
  { label: "Company", href: "/about-us" },
  { label: "News", href: "/news" },
]

export default function LeftNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1 text-sm">
      {nav.map((item) => {
        const isExternal = item.href.startsWith("http")
        const active = !isExternal && pathname === item.href

        return (
          <Link
            key={item.label}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer noopener" : undefined}
            className={[
              "rounded-md px-3 py-2 transition-colors",
              active ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white hover:bg-white/5",
            ].join(" ")}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

