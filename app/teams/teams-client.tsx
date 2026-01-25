'use client'

import React, { useMemo, useState } from 'react'

type TabKey = 'offerings' | 'how' | 'guardrails'

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
      {children}
    </span>
  )
}

function CardShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string
  subtitle?: string
  children?: React.ReactNode
  footer?: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          {subtitle ? <div className="mt-1 text-xs text-white/60">{subtitle}</div> : null}
        </div>
      </div>
      {children ? <div className="mt-4 text-sm text-white/80">{children}</div> : null}
      {footer ? <div className="mt-4">{footer}</div> : null}
    </div>
  )
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string
  title: string
  desc?: string
}) {
  return (
    <div className="mb-5">
      {eyebrow ? (
        <div className="mb-2 text-xs font-medium tracking-wide text-white/50">{eyebrow}</div>
      ) : null}
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {desc ? <p className="mt-2 max-w-3xl text-sm text-white/65">{desc}</p> : null}
    </div>
  )
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-xl px-3 py-2 text-sm transition',
        active
          ? 'bg-white text-black'
          : 'border border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
      )}
      type="button"
    >
      {children}
    </button>
  )
}

function MiniTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70">
      {children}
    </span>
  )
}

function Divider() {
  return <div className="my-10 h-px w-full bg-white/10" />
}

function Collapsible({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/5 p-4">
      <summary className="cursor-pointer list-none select-none text-sm font-medium text-white/90">
        <span className="inline-flex items-center gap-2">
          <span className="rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70">
            Example
          </span>
          {title}
        </span>
        <span className="float-right mt-0.5 text-white/50 transition group-open:rotate-180">⌄</span>
      </summary>
      <div className="mt-3 text-sm text-white/75">{children}</div>
    </details>
  )
}

export default function TeamsClient() {
  const [tab, setTab] = useState<TabKey>('offerings')

  const snapshot = useMemo(
    () => [
      {
        title: 'Ops Copilot',
        desc: 'SOPs, checklists, handoffs, and “what happens next” clarity.',
        tags: ['SOPs', 'Handoffs', 'Checklists'],
      },
      {
        title: 'Support Desk',
        desc: 'Fast, consistent help without turning your team into macros.',
        tags: ['Triage', 'Runbooks', 'Escalations'],
      },
      {
        title: 'Decision Logs',
        desc: 'Lightweight records of decisions, assumptions, and tradeoffs.',
        tags: ['ADR-style', 'Risks', 'Owners'],
      },
      {
        title: 'Research & Analysis',
        desc: 'Evidence-aware summaries with clear uncertainty and sources.',
        tags: ['Notes', 'Comparisons', 'Caveats'],
      },
    ],
    []
  )

  // ⬇️ keep the rest of your JSX EXACTLY as-is
  // (everything from <main>...</main>)
  // nothing else needs to change

