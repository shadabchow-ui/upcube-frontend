import React from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

type MetaItem = { label: string; value: string };
type Chip = { label: string; href: string };
type TocItem = { id: string; label: string };

export default function LongformLayout({
  title,
  badge,
  meta,
  summary,
  chips,
  toc,
  children,
  className,
}: {
  title: string;
  badge?: string;
  meta?: MetaItem[];
  summary?: string;
  chips?: Chip[];
  toc?: TocItem[];
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 py-10", className)}>
      <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
        <main>
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-white">{title}</h1>
              {badge ? (
                <Badge variant="secondary" className="bg-white/5 text-zinc-200 border-white/10">
                  {badge}
                </Badge>
              ) : null}
            </div>

            {meta?.length ? (
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-300">
                {meta.map((m) => (
                  <div key={`${m.label}:${m.value}`} className="flex items...">
                    <span className="text-zinc-400">{m.label}:</span>
                    <span className="ml-2">{m.value}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {summary ? <p className="mt-4 max-w-2xl text-zinc-300">{summary}</p> : null}

            {chips?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <Link
                    key={`${c.label}:${c.href}`}
                    href={c.href}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-zinc-200 hover:bg-white/[0.06]"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </header>

          <article className="prose prose-invert max-w-none prose-p:text-zinc-200 prose-li:text-zinc-200">
            {children}
          </article>
        </main>

        <aside className="hidden lg:block">
          {toc?.length ? (
            <div className="sticky top-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-sm font-semibold text-white">On this page</div>
              <nav className="mt-3 space-y-1">
                {toc.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className="block rounded-md px-2 py-1 text-sm text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                  >
                    {t.label}
                  </a>
                ))}
              </nav>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}


