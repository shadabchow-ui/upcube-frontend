import Link from "next/link";

const COLS = [
  {
    title: "Upcube",
    links: [
      { label: "Product", href: "/product" },
      { label: "Pricing", href: "/pricing" },
      { label: "Docs", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Chat", href: "/chat" },
      { label: "Images", href: "/images" },
      { label: "API status", href: "/status" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Brand", href: "/brand" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {COLS.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-medium tracking-wide text-white/60">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/50 transition hover:text-white/85"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} Upcube ·{" "}
            <Link href="/cookies" className="transition hover:text-white/80">
              Manage cookies
            </Link>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black px-3 py-2 text-xs text-white/55">
            English <span className="text-white/35">United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

