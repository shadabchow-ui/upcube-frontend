import Link from "next/link"
import Image from "next/image"

const nav = [
  { label: "Research", href: "/research" },
  { label: "Company", href: "/company" },
  { label: "News", href: "/news" },

  { label: "Chat", href: "https://chat.upcube.ai" },
  { label: "Images", href: "https://image.upcube.ai" },
  { label: "Headshots", href: "https://headshots.upcube.ai" },
  { label: "Voice", href: "https://voice.upcube.ai" },
  { label: "Video", href: "https://video.upcube.ai" },
  { label: "AI Detector", href: "https://detect.upcube.ai" },
  { label: "Grammar", href: "https://script.upcube.ai" },

  { label: "For Business", href: "/business" },
]

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

export default function LeftNav() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[220px] border-r border-white/10 bg-black">
      {/* Brand / header */}
      <div className="px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-mark.png"
            alt="Upcube"
            width={28}
            height={28}
            priority
          />
          <span className="sr-only">Upcube</span>
        </Link>
        <div className="mt-2 h-px w-full bg-white/10" />
      </div>

      <nav className="px-2 pb-6">
        <ul className="space-y-1">
          {nav.map((item) => {
            const external = isExternal(item.href)

            const classes =
              "block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/[0.04] hover:text-white"

            return (
              <li key={item.label}>
                {external ? (
                  <a
                    href={item.href}
                    className={classes}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={classes}>
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}



