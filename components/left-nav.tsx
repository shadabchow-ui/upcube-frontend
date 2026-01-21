import Link from "next/link"

const NAV_ITEMS = [
  { label: "Products", href: "/products" },
  { label: "Chat", href: "/chat" },
  { label: "Image Generator", href: "/image-generator" },
  { label: "API", href: "/api" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Company", href: "/company" },
]

export default function LeftNav() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[260px] border-r border-white/10 bg-black px-6 py-6">
      {/* Brand */}
      <div className="mb-10">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Upcube
        </Link>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="
              block rounded-lg px-3 py-2 text-sm
              text-white/70
              transition
              hover:bg-white/5
              hover:text-white
            "
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="absolute bottom-6 left-6 right-6 border-t border-white/10 pt-4">
        <Link
          href="/account"
          className="
            block rounded-lg px-3 py-2 text-sm
            text-white/60
            transition
            hover:bg-white/5
            hover:text-white
          "
        >
          Account
        </Link>
      </div>
    </aside>
  )
}

