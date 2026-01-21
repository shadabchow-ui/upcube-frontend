import Link from 'next/link'

const groups = [
  {
    title: 'Our Research',
    links: [
      { label: 'Research', href: '#' },
      { label: 'Overview', href: '#' },
    ],
  },
  {
    title: 'Safety',
    links: [
      { label: 'Safety', href: '#' },
      { label: 'Security & Privacy', href: '#' },
      { label: 'Trust & Transparency', href: '#' },
    ],
  },
  {
    title: 'Latest Advancements',
    links: [
      { label: 'Chat', href: '#' },
      { label: 'Image', href: '#' },
      { label: 'Video', href: '#' },
      { label: 'Search', href: '#' },
    ],
  },
  {
    title: 'Upcube',
    links: [
      { label: 'Explore Upcube', href: '#' },
      { label: 'Business', href: '#' },
      { label: 'Enterprise', href: '#' },
      { label: 'Education', href: '#' },
      { label: 'Researchers', href: '#' },
      { label: 'Nonprofits', href: '#' },
      { label: 'Government', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Our Principles', href: '#' },
      { label: 'Our Vision', href: '#' },
      { label: 'How Upcube Works', href: '#' },
      { label: 'UBI', href: '#' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Platform Overview', href: '#' },
      { label: 'Capabilities', href: '#' },
    ],
  },
  {
    title: 'Terms & Policies',
    links: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Contact Sales', href: '#' },
    ],
  },
]

const socials = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'X', href: '#' },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-10 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 */}
          <div className="space-y-10">
            {[groups[0], groups[1], groups[2]].map((g) => (
              <div key={g.title}>
                <h3 className="text-[13px] font-semibold tracking-tight text-white/90">
                  {g.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] text-white/60 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-10">
            {[groups[3], groups[4]].map((g) => (
              <div key={g.title}>
                <h3 className="text-[13px] font-semibold tracking-tight text-white/90">
                  {g.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] text-white/60 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="pt-2">
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="text-[13px] text-white/60 transition hover:text-white"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-10">
            {[groups[5], groups[6]].map((g) => (
              <div key={g.title}>
                <h3 className="text-[13px] font-semibold tracking-tight text-white/90">
                  {g.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] text-white/60 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="pt-6 text-[12px] text-white/45">
              © {new Date().getFullYear()} UpCube Technologies Inc.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-[12px] text-white/45">
            <Link href="#" className="hover:text-white">
              Manage cookies
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-full border border-white/15 px-4 text-[12px] text-white/70 transition hover:border-white/25 hover:text-white"
          >
            English <span className="ml-2 text-white/45">United States</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

