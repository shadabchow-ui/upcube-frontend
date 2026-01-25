import { ReactNode } from 'react'
import Toc, { TocItem } from './toc'

export default function DocsShell({
  toc,
  children,
}: {
  toc: TocItem[]
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10">
        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          {/* Left sidebar */}
          <aside className="md:sticky md:top-6 md:self-start">
            <Toc items={toc} />
          </aside>

          {/* Main content column */}
          <main className="min-w-0">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm md:p-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
