'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  LayoutGrid,
  Shield,
  Briefcase,
  Code2,
  MessageSquare,
  Image as ImageIcon,
  BookOpen,
  Building2,
  Newspaper,
  Menu,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

type NavItem = {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const nav: NavItem[] = [
  { label: 'Research', href: '/research', icon: LayoutGrid },
  { label: 'Safety', href: '/safety', icon: Shield },
  { label: 'For Business', href: '/business', icon: Briefcase },
  { label: 'For Developers', href: '/developers', icon: Code2 },
  { label: 'Chat', href: '/chat', icon: MessageSquare },
  { label: 'Images', href: '/images', icon: ImageIcon },
  { label: 'Stories', href: '/stories', icon: BookOpen },
  { label: 'Company', href: '/company', icon: Building2 },
  { label: 'News', href: '/news', icon: Newspaper },
]

export function LeftNav() {
  const pathname = usePathname()
  const storageKey = 'upcube:leftnav:collapsed'
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem(storageKey) : null
    if (saved === '1') setCollapsed(true)
  }, [])

  function toggle() {
    setCollapsed((v) => {
      const next = !v
      try {
        window.localStorage.setItem(storageKey, next ? '1' : '0')
      } catch {}
      return next
    })
  }

  const width = collapsed ? 'w-[72px]' : 'w-64'

  const activeHref = useMemo(() => {
    if (!pathname) return null
    const match = nav.find((n) => pathname === n.href)
    return match?.href ?? null
  }, [pathname])

  return (
    <aside
      className={cn(
        'sticky top-0 h-dvh shrink-0 border-r border-white/10 bg-black/40 backdrop-blur-xl',
        width
      )}
    >
      <div className="flex h-full flex-col px-3 py-3">
        {/* Top row */}
        <div className={cn('flex items-center', collapsed ? 'justify-center' : 'justify-between')}>
          <Link
            href="/"
            className={cn(
              'text-sm font-semibold tracking-tight text-white/90 hover:text-white',
              collapsed && 'hidden'
            )}
          >
            upcube
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full text-white/70 hover:bg-white/5 hover:text-white"
            onClick={toggle}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Nav */}
        <nav className={cn('mt-4 flex flex-col gap-1', collapsed && 'items-center')}>
          {nav.map((item) => {
            const Icon = item.icon
            const isActive = activeHref === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group flex items-center gap-3 rounded-lg px-3 py-2 text-[13px]',
                  'text-white/55 hover:text-white',
                  'hover:bg-white/5',
                  isActive && 'bg-white/6 text-white',
                  collapsed && 'w-10 justify-center px-0'
                )}
              >
                <Icon className={cn('h-4 w-4', isActive ? 'text-white' : 'text-white/60')} />
                <span className={cn('truncate', collapsed && 'hidden')}>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom-left subtle controls */}
        <div className="mt-auto pt-3">
          <div className={cn('flex items-center', collapsed ? 'justify-center' : 'justify-between')}>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full text-white/60 hover:bg-white/5 hover:text-white"
              aria-label="Menu"
              asChild
            >
              <Link href="/menu">
                <Menu className="h-4 w-4" />
              </Link>
            </Button>

            <span className={cn('text-[11px] text-white/40', collapsed && 'hidden')}>
              © Upcube
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}
