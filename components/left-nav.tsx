import Link from "next/link"
import Image from "next/image"

const NAV_ITEMS = [
  { label: "Research", href: "/research" },
  { label: "Safety", href: "/safety" },
  { label: "For Business", href: "/business" },
  { label: "For Developers", href: "/developers" },
  { label: "Chat", href: "/chat" },
  { label: "Images", href: "/images" },
  { label: "Stories", href: "/stories" },
  { label: "Company", href: "/company" },
  { label: "News", href: "/news" },
]

export default function LeftNav() {
  return (
    <>
      {/* Mobile: keep it simple now (collapse later) */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md md:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo-mark.png"
              alt="Upcube"
              width={24}
              height={24}
              priority
              className="transition duration-300 hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.22)]"
            />
          </Link>

          {/* Placeholder for future mobile drawer (no icons, no JS yet) */}
          <Link
            href="/menu"
            className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white/90"
          >
            Menu
          </Link>
        </div>
      </header>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[220px] border-r border-white/10 bg-black px-6 md:block">
        {/* Brand (OpenAI-like: tight, simple, centered in its row) */}
        <div className="flex h-16 items-center">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo-mark.png"
              alt="Upcube"
              width={26}
              height={26}
              priority
              className="transition duration-300 hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.24)]"
            />
          </Link>
        </div>

        {/* Nav */}
        <nav className="mt-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                block rounded-md px-2 py-2 text-[13px]
                text-white/55 transition
                hover:bg-white/5 hover:text-white/90
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-6 left-6 right-6 border-t border-white/10 pt-4">
          <Link
            href="/login"
            className="
              block rounded-md px-2 py-2 text-[13px]
              text-white/55 transition
              hover:bg-white/5 hover:text-white/90
            "
          >
            Log in
          </Link>
        </div>
      </aside>
    </>
  )
}

