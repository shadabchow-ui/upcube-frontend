import React from "react"

type MetaItem = { label: string; value: string }
type Chip = { label: string; href: string }
type TocItem = { id: string; label: string }

export type LongformLayoutProps = {
  title: string
  badge?: string
  meta?: MetaItem[]
  summary?: string
  chips?: Chip[]
  toc?: TocItem[]
  children: React.ReactNode
}

export default function LongformLayout({
  title,
  badge,
  meta = [],
  summary,
  chips = [],
  toc = [],
  children,
}: LongformLayoutProps) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-semibold">{title}</h1>
          {badge ? (
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              {badge}
            </span>
          ) : null}
        </div>

        {meta.length ? (
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            {meta.map((m) => (
              <div key={`${m.label}:${m.value}`}>
                <span className="text-white/50">{m.label}:</span> {m.value}
              </div>
            ))}
          </div>
        ) : null}

        {summary ? <p className="mt-4 text-white/75">{summary}</p> : null}

        {chips.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <a
                key={`${c.label}:${c.href}`}
                href={c.href}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
              >
                {c.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>{children}</div>

        {toc.length ? (
          <aside className="hidden lg:block">
            <div className="sticky top-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 text-sm font-medium text-white/90">On this page</div>
              <ul className="space-y-2 text-sm text-white/70">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="hover:text-white">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  )
}

