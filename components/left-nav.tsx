import Link from "next/link"
import Image from "next/image"

const nav = [
  { label: "Research", href: "#" },
  { label: "Safety", href: "#" },
  { label: "For Business", href: "#" },
  { label: "For Developers", href: "#" },
  { label: "Chat", href: "#" },
  { label: "Images", href: "#" },
  { label: "Stories", href: "#" },
  { label: "Company", href: "#" },
  { label: "News", href: "#" },
]

export default function LeftNav() {
  return (
    <aside className="fixed inset-y-0 left-0 w-[220px] border-r border-white/10 bg-black">
      <div className="flex h-full flex-col">
        <div className="h-16 flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl p-2 transition"
            aria-label="Upcube"
          >
            <Image
              src="/logo-mark.png"
              alt="Upcube"
              width={28}
              height={28}
              className="opacity-95 transition duration-200 hover:opacity-100 hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.20)]"
              priority
            />
          </Link>
        </div>

        <nav className="px-4 py-2">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto px-4 pb-4">
          <div className="h-px bg-white/10 mb-3" />
          <Link
            href="#"
            className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white transition"
          >
            Settings
          </Link>
        </div>
      </div>
    </aside>
  )
}
