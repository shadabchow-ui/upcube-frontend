import Link from "next/link"

const COLS: Array<{
  title: string
  links: Array<{ label: string; href: string }>
}> = [
  {
    title: "Our Research",
    links: [
      { label: "Research", href: "#" },
      { label: "Overview", href: "#" },
    ],
  },
  {
    title: "Safety",
    links: [
      { label: "Safety", href: "#" },
      { label: "Security & Privacy", href: "#" },
      { label: "Trust & Transparency", href: "#" },
    ],
  },
  {
    title: "Latest",
    links: [
      { label: "Advancements", href: "#" },
      { label: "Chat", href: "#" },
      { label: "Image", href: "#" },
      { label: "Video", href: "#" },
      { label: "Search", href: "#" },
    ],
  },
  {
    title: "Upcube",
    links: [
      { label: "Explore Upcube", href: "#" },
      { label: "Business", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "Education", href: "#" },
      { label: "Researchers", href: "#" },
      { label: "Nonprofits", href: "#" },
      { label: "Government", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Principles", href: "#" },
      { label: "Our Vision", href: "#" },
      { label: "How Upcube Works", href: "#" },
      { label: "UBI", href: "#" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Platform Overview", href: "#" },
      { label: "Capabilities", href: "#" },
    ],
  },
  {
    title: "Terms & Policies",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Contact Sales", href: "#" },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto w-full max-w-6xl px-10 py-14">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          {COLS.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold text-white">{col.title}</div>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>© {new Date().getFullYear()} Upcube Technologies Inc.</span>
            <Link href="#" className="hover:text-white">
              Manage cookies
            </Link>
          </div>

          <div className="flex items-center gap-4 text-sm text-white/60">
            <Link href="#" className="hover:text-white">
              X
            </Link>
            <Link href="#" className="hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="hover:text-white">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-white">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
