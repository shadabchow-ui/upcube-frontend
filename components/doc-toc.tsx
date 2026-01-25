'use client'

import { useEffect, useMemo, useState } from 'react'

export type TocItem = { id: string; label: string }

export default function DocToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items?.[0]?.id ?? '')

  const ids = useMemo(() => items.map(i => i.id), [items])

  useEffect(() => {
    const els = ids
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!els.length) return

    const obs = new IntersectionObserver(
      entries => {
        // pick the most “visible” intersecting heading
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // bias toward what’s near top
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [ids])

  return (
    <div className="sticky top-24">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <div className="text-xs uppercase tracking-wide text-white/60 mb-3">On this page</div>
        <nav className="space-y-1">
          {items.map(item => {
            const active = item.id === activeId
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={[
                  'block rounded-lg px-2 py-1.5 text-sm transition',
                  active ? 'text-white bg-white/10' : 'text-white/75 hover:text-white hover:bg-white/5',
                ].join(' ')}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
