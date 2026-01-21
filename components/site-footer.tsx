import Link from "next/link"

type FooterLink = { label: string; href: string }

const SECTIONS: { title: string; links: FooterLink[] }[] = [
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
    title: "UpCube",
    links: [
      { label: "Explore UpCube", href: "#" },
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
      { label: "How UpCube Works", href: "#" },
      { label: "UBI", href: "#" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Platform Overview", href: "#" },
      { label: "Capabilities", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Docs", href: "#" },
      { label: "API Status", href: "#" },
      { label: "Security", href: "#" },
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
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-7">
          {SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-semibold tracking-tight text-white">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                {section.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} UpCube Technologies Inc. ·{" "}
            <Link href="#" className="transition-colors hover:text-white">
              Manage cookies
            </Link>
          </div>

          {/* text-only (no icons) */}
          <div className="flex items-center gap-4 text-sm text-white/60">
            <Link href="#" className="transition-colors hover:text-white">
              Facebook
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              LinkedIn
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              X
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">
            <span>English</span>
            <span className="text-white/30">·</span>
            <span>United States</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
