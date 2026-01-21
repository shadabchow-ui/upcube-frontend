import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  ArrowUpRight,
} from 'lucide-react'

const nav = [
  { label: 'Research', href: '/research' },
  { label: 'Safety', href: '/safety' },
  { label: 'For Business', href: '/business' },
  { label: 'For Developers', href: '/developers' },
  { label: 'Chat', href: '/chat' },
  { label: 'Images', href: '/images' },
  { label: 'Stories', href: '/stories' },
  { label: 'Company', href: '/company' },
  { label: 'News', href: '/news' },
]

export function LeftNav() {
  return (
    <aside className="sticky top-0 h-dvh w-64 shrink-0 border-r bg-background/80 backdrop-blur">
      <div className="flex h-full flex-col px-4 py-4">
        {/* Brand */}
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            upcube
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
            <Link href="/menu" aria-label="Menu">
              <span className="text-lg leading-none">≡</span>
            </Link>
          </Button>
        </div>

        {/* Nav */}
        <nav className="mt-6 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-muted/40 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom links / social */}
        <div className="mt-auto pt-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>

            <div className="ml-auto text-xs text-muted-foreground">
              <a
                className="inline-flex items-center gap-1 hover:text-foreground"
                href="https://upcube.ai"
                target="_blank"
                rel="noreferrer"
              >
                Upcube <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
