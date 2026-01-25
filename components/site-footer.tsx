import Link from "next/link"

type FooterLink = { label: string; href: string }

const SECTIONS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Our Research",
    links: [
      { label: "Research", href: "/research" },
      { label: "Research overview", href: "/research-overview" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Platform overview", href: "/platform-overview" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Docs", href: "/docs" },
    ],
  },
  {
    title: "UpCube",
    links: [
      { label: "Explore UpCube", href: "/explore-upcube" },
      { label: "Business", href: "/business" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Teams", href: "/teams" },
      { label: "Builders", href: "/builders" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "How UpCube works", href: "/how-upcube-works" },
      { label: "UBI", href: "/ubi" },
      { label: "Journalists", href: "/journalists" },
    ],
  },
  {
    title: "Security",
    links: [
      { label: "Security & privacy", href: "/security-privacy" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of service", href: "/terms-of-service" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "Contact", href: "/contact" }],
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
