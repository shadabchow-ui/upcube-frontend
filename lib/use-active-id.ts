'use client'

import { useEffect, useMemo, useState } from 'react'

export function useActiveId(ids: string[], rootMargin = '0px 0px -70% 0px') {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  const stableIds = useMemo(() => ids.filter(Boolean), [ids])

  useEffect(() => {
    if (!stableIds.length) return

    const elements = stableIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the highest (closest to top) intersecting section
        const visible = entries.filter((e) => e.isIntersecting)
        if (!visible.length) return

        visible.sort((a, b) => {
          const ay = (a.target as HTMLElement).getBoundingClientRect().top
          const by = (b.target as HTMLElement).getBoundingClientRect().top
          return ay - by
        })

        setActiveId((visible[0].target as HTMLElement).id)
      },
      { rootMargin, threshold: [0.1, 0.2, 0.3] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [stableIds, rootMargin])

  return activeId
}
