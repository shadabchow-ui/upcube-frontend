'use client'

import Link from 'next/link'
import { cn } from '@/lib/cn'
import { useActiveId } from '@/lib/use-active-id'

export type TocItem = { id: string; label: string }

export default function Toc({
  title = 'On this page',
  items,
}: {
  title?: string
  items: TocItem[]
}) {
  const ids = items.map((i) => i.id)
  const activeId = useActiveId(ids)

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-sm">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60">
        {title}
      </div>

      <nav className="space-y-1">
        {items.map((item) => {
          const isActive = item.id === activeId
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'block rounded-lg px-3 py-2 text-sm transition',
                'hover:bg-white/[0.05]',
                isActive
                  ? 'bg-white/[0.06] text-white'
                  : 'text-white/70 hover:text-white'
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
