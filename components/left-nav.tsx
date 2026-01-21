import Link from "next/link";

const NAV = [
  { label: "Research", href: "/research" },
  { label: "Safety", href: "/safety" },
  { label: "For Business", href: "/business" },
  { label: "For Developers", href: "/developers" },
  { label: "Chat", href: "/chat" },
  { label: "Images", href: "/images" },
  { label: "Stories", href: "/stories" },
  { label: "Company", href: "/company" },
  { label: "News", href: "/news" },
];

export default function LeftNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-white/10 bg-black/70 backdrop-blur md:flex">
      <div className="flex w-full flex-col">
        {/* Top */}
        <div className="flex items-center gap-2 px-5 py-4">
          <Link href="/" className="text-sm font-semibold tracking-tight text-white">
            upcube
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3">
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom */}
        <div className="px-5 py-4 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Upcube</span>
        </div>
      </div>
    </aside>
  );
}
