import Link from 'next/link'
import { Button } from '@/components/ui/button'

const cols = [
  {
    title: 'Upcube',
    links: [
      { label: 'Product', href: '/product' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Docs', href: '/docs' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Chat', href: '/chat' },
      { label: 'Images', href: '/images' },
      { label: 'API status', href: '/status' },
      { label: 'Security', href: '/security' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Brand', href: '/brand' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-medium">{c.title}</div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <Link key={l.href} href={l.href} className="hover:text-foreground">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Upcube • <Link className="hover:text-foreground" href="/cookies">Manage cookies</Link>
          </div>

          <Button variant="outline" className="h-9 rounded-full px-4 text-xs">
            English <span className="text-muted-foreground">United States</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
