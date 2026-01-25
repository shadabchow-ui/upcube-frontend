import DocToc, { TocItem } from '@/components/doc-toc'

export type DocSection = {
  id: string
  title: string
  body: React.ReactNode
}

export default function DocPage({
  title,
  metaLeft,
  metaRight,
  intro,
  toc,
  sections,
}: {
  title: string
  metaLeft: string
  metaRight?: string
  intro: string
  toc: TocItem[]
  sections: DocSection[]
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-24">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          <div className="mt-2 text-sm text-white/60">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {metaLeft}
            </span>
            {metaRight ? <span className="ml-3">{metaRight}</span> : null}
          </div>

          {/* Intro callout */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <p className="text-sm leading-6 text-white/85">{intro}</p>
          </div>
        </header>

        {/* Body grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          <DocToc items={toc} />

          <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="prose prose-invert max-w-none prose-p:text-white/85 prose-li:text-white/85 prose-strong:text-white">
              {sections.map((s, idx) => (
                <section key={s.id} className={idx ? 'mt-10' : ''}>
                  <h2 id={s.id} className="scroll-mt-28 text-2xl font-semibold">
                    {s.title}
                  </h2>
                  <div className="mt-3">{s.body}</div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
