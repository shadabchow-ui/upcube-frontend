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

  const offerings = useMemo(
    () => [
      {
        n: '1) Operating System for a Small Team',
        lead: 'Turn chaos into a repeatable cadence.',
        bullets: [
          ['Weekly ops brief', 'priorities, owners, blockers, deadlines'],
          ['SOP generator', 'tight, taskable steps with “stop/ask” points'],
          ['Handoff templates', 'what changed, what’s pending, what’s risky'],
          ['Meeting-to-actions', 'agenda, notes, decisions, follow-ups'],
          ['“Definition of done”', 'clear acceptance criteria for work'],
        ],
        example: 'Example: a lightweight weekly ops review agenda + action list format',
      },
      {
        n: '2) Customer Support & Quality',
        lead: 'Answer faster without losing accuracy.',
        bullets: [
          ['Triage scripts', 'capture minimum info without interrogations'],
          ['Runbook linking', 'answers tied to internal docs + known fixes'],
          ['Escalation rules', 'when to route to engineering and why'],
          ['Post-incident summaries', 'what happened, impact, prevention'],
          ['QA checklists', 'consistency in replies and refunds'],
        ],
        example: 'Example: support triage decision tree (refund vs bug vs how-to)',
      },
      {
        n: '3) Sales Enablement (without cringe)',
        lead: 'Clear, honest collateral that matches reality.',
        bullets: [
          ['One-pager drafts', 'what it is, who it’s for, constraints'],
          ['Security & privacy FAQ', 'plain language + boundaries'],
          ['Objection handling', 'truthful responses with limitations'],
          ['Case study scaffolds', 'what changed, evidence, caveats'],
          ['Proposal templates', 'scope, timelines, risks, assumptions'],
        ],
        example: 'Example: a clean product one-pager structure with “limits” section',
      },
      {
        n: '4) Product Specs & Execution',
        lead: 'Ship with fewer miscommunications.',
        bullets: [
          ['PRDs that don’t bloat', 'goals, non-goals, decisions, metrics'],
          ['Edge-case inventory', 'what breaks, what we’re not doing'],
          ['Test plan scaffolds', 'measurable pass/fail criteria'],
          ['Launch checklists', 'rollback plan, comms, monitoring'],
          ['Changelog discipline', 'what changed and why—no fluff'],
        ],
        example: 'Example: “minimum PRD” template that engineers actually use',
      },
      {
        n: '5) Knowledge Base & Internal Docs',
        lead: 'Make “tribal knowledge” searchable and durable.',
        bullets: [
          ['Doc refactors', 'turn messy notes into clean runbooks'],
          ['Single-source pages', 'one canonical answer per topic'],
          ['Onboarding packs', 'first week plan + key workflows'],
          ['Naming conventions', 'consistent tags and doc structure'],
          ['Policy templates', 'access, retention, incident response'],
        ],
        example: 'Example: onboarding checklist for a new hire (week 1 → week 4)',
      },
      {
        n: '6) Analytics Narratives (not dashboard worship)',
        lead: 'Explain what numbers mean and what they don’t.',
        bullets: [
          ['Metric definitions', 'tight wording + what’s excluded'],
          ['Data caveats', 'missing data, bias, confidence limits'],
          ['Monthly narrative', 'wins, misses, what changed, next bets'],
          ['Experiment writeups', 'hypothesis, method, result, next step'],
          ['Decision memos', 'what we’re doing and why now'],
        ],
        example: 'Example: monthly metrics narrative with “uncertainty” section',
      },
      {
        n: '7) Compliance-aware Guardrails',
        lead: 'Boundaries that keep teams safe by default.',
        bullets: [
          ['PII minimization', 'collect only what you truly need'],
          ['Retention rules', 'what to keep, what to delete, when'],
          ['Human review gates', 'high-stakes actions require a person'],
          ['Audit trail patterns', 'what happened, who approved'],
          ['No surveillance posture', 'avoid “monitor everything” defaults'],
        ],
        example: 'Example: a simple data handling policy (collection → retention)',
      },
    ],
    []
  )

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10">
      {/* HERO */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <div className="flex flex-wrap items-center gap-2">
          <Pill>Small teams</Pill>
          <Pill>Startups</Pill>
          <Pill>Operators</Pill>
          <Pill>Docs-first</Pill>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Upcube for Small Teams & Startups
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
          Small teams don’t need more software—they need fewer dropped balls. Upcube helps you run
          repeatable operations, ship clearer specs, and support customers consistently, without
          turning people into tickets or building a surveillance culture.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <TabButton active={tab === 'offerings'} onClick={() => setTab('offerings')}>
            Offerings
          </TabButton>
          <TabButton active={tab === 'how'} onClick={() => setTab('how')}>
            How it works
          </TabButton>
          <TabButton active={tab === 'guardrails'} onClick={() => setTab('guardrails')}>
            Guardrails
          </TabButton>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <MiniTag>Make work legible</MiniTag>
          <MiniTag>Reduce rework</MiniTag>
          <MiniTag>Keep humans accountable</MiniTag>
          <MiniTag>Ship with confidence</MiniTag>
        </div>
      </div>

      {/* POSITION */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="text-xs font-medium tracking-wide text-white/50">Position</div>
        <div className="mt-2 text-sm text-white/75">
          AI should reduce operational friction and improve clarity—not replace ownership, not invent
          facts, and not turn your company into a monitoring machine.
        </div>
      </div>

      {/* SNAPSHOT */}
      <div className="mt-10">
        <SectionTitle
          title="Snapshot"
          desc="Four fast ways teams use Upcube when they’re trying to move quickly without breaking trust."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {snapshot.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white">{s.title}</div>
              <div className="mt-2 text-sm text-white/70">{s.desc}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <MiniTag key={t}>{t}</MiniTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* TAB CONTENT */}
      {tab === 'offerings' ? (
        <div>
          <SectionTitle
            title="Offerings"
            desc="Use these as modules. Adopt one at a time, or stitch them into a team operating system."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {offerings.slice(0, 3).map((o) => (
              <CardShell
                key={o.n}
                title={o.n}
                subtitle={o.lead}
                footer={
                  <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-white/70">
                    ▸ {o.example}
                  </div>
                }
              >
                <ul className="space-y-2">
                  {o.bullets.map(([a, b]) => (
                    <li key={a} className="leading-relaxed">
                      <span className="font-medium text-white/90">{a}:</span>{' '}
                      <span className="text-white/70">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardShell>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {offerings.slice(3, 5).map((o) => (
              <CardShell
                key={o.n}
                title={o.n}
                subtitle={o.lead}
                footer={
                  <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-white/70">
                    ▸ {o.example}
                  </div>
                }
              >
                <ul className="space-y-2">
                  {o.bullets.map(([a, b]) => (
                    <li key={a} className="leading-relaxed">
                      <span className="font-medium text-white/90">{a}:</span>{' '}
                      <span className="text-white/70">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardShell>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {offerings.slice(5, 7).map((o) => (
              <CardShell
                key={o.n}
                title={o.n}
                subtitle={o.lead}
                footer={
                  <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-white/70">
                    ▸ {o.example}
                  </div>
                }
              >
                <ul className="space-y-2">
                  {o.bullets.map(([a, b]) => (
                    <li key={a} className="leading-relaxed">
                      <span className="font-medium text-white/90">{a}:</span>{' '}
                      <span className="text-white/70">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardShell>
            ))}
          </div>

          <div className="mt-6">
            <Collapsible title='Example: what “docs-first ops” looks like in practice'>
              A small team can run clean operations with a few artifacts:
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Weekly ops brief (owners, blockers, deadlines, risks)</li>
                <li>Decision log (what we decided, why, and what we’re assuming)</li>
                <li>Runbooks for the top 10 repeat issues (support + engineering)</li>
                <li>Launch checklist + rollback plan for every deploy</li>
              </ul>
            </Collapsible>
          </div>
        </div>
      ) : null}

      {tab === 'how' ? (
        <div>
          <SectionTitle
            title="How it works"
            desc="A simple loop: define the target, draft the artifacts, review like a professional, and ship the structure—not vibes."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            <CardShell
              title="Step 1 — Define the work boundary"
              subtitle="Make the request crisp before generating anything."
            >
              <ul className="list-disc space-y-1 pl-5 text-white/75">
                <li>What outcome do we need this week?</li>
                <li>What constraints matter (time, tools, policy, risk)?</li>
                <li>What do we explicitly NOT want?</li>
                <li>What would change our mind?</li>
              </ul>
              <div className="mt-3 text-xs text-white/55">
                If the boundary is vague, output quality becomes guesswork.
              </div>
            </CardShell>

            <CardShell
              title="Step 2 — Generate the right artifact"
              subtitle="SOP, PRD, runbook, template, agenda, or triage tree."
            >
              <ul className="list-disc space-y-1 pl-5 text-white/75">
                <li>Choose the artifact type that matches the job.</li>
                <li>Draft in a structure your team can actually reuse.</li>
                <li>Surface assumptions and missing info explicitly.</li>
                <li>Keep it minimal: less text, more clarity.</li>
              </ul>
              <div className="mt-3 text-xs text-white/55">
                The goal is durable structure, not long documents.
              </div>
            </CardShell>

            <CardShell title="Step 3 — Human review gates" subtitle="Small checks prevent big mistakes.">
              <ul className="list-disc space-y-1 pl-5 text-white/75">
                <li>Are definitions tight (what counts / doesn’t count)?</li>
                <li>Is ownership explicit (who decides, who executes)?</li>
                <li>Are risks and “stop/ask” points stated?</li>
                <li>Is this compatible with policy and reality?</li>
              </ul>
              <div className="mt-3 text-xs text-white/55">
                High-stakes actions always require a person to approve.
              </div>
            </CardShell>

            <CardShell title="Step 4 — Ship and reuse" subtitle="Once it works, make it a standard.">
              <ul className="list-disc space-y-1 pl-5 text-white/75">
                <li>Store artifacts in a canonical location.</li>
                <li>Tag them so they’re searchable.</li>
                <li>Track changes with short changelog notes.</li>
                <li>Review quarterly: update or retire.</li>
              </ul>
              <div className="mt-3 text-xs text-white/55">
                Reuse is how small teams compound capacity.
              </div>
            </CardShell>
          </div>

          <div className="mt-6">
            <Collapsible title="Example: a clean support cycle for a small team">
              Minimal but effective:
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Intake form captures the minimum info needed to route.</li>
                <li>Triage tree: bug vs how-to vs billing vs product gap.</li>
                <li>Runbook links: canonical answers, known fixes, escalation rules.</li>
                <li>Weekly review: top issues → update docs/runbooks → reduce repeats.</li>
              </ul>
            </Collapsible>
          </div>
        </div>
      ) : null}

      {tab === 'guardrails' ? (
        <div>
          <SectionTitle
            title="Guardrails"
            desc="Small teams move fast—so defaults matter. These rules keep quality and trust intact while you scale."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <CardShell
              title="No invented facts"
              subtitle="If something can’t be confirmed, it’s labeled as unknown."
            >
              Speculation stays clearly separated from confirmed information. Assumptions are written
              down so they can be challenged or replaced.
            </CardShell>

            <CardShell title="No surveillance posture" subtitle="Avoid “monitor everything” models by default.">
              Upcube is designed for workflows and artifacts—not continuous observation. Privacy
              comes first, especially for employees and customers.
            </CardShell>

            <CardShell title="Human-owned responsibility" subtitle="AI drafts; humans decide.">
              Critical actions require review. Ownership stays visible: who approved, what changed,
              and why.
            </CardShell>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <CardShell
              title="Design target"
              subtitle="Give small teams leverage without changing the culture into paperwork."
            >
              The point is to reduce rework and ambiguity, so humans can spend more time on
              judgment, customer empathy, and building.
            </CardShell>

            <details className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-white/90">
                What Upcube will not do <span className="ml-2 text-white/50">⌄</span>
              </summary>
              <div className="mt-3 text-sm text-white/75">
                <ul className="list-disc space-y-1 pl-5">
                  <li>It won’t generate confident answers without clear support.</li>
                  <li>It won’t recommend “monitor employees” as a default solution.</li>
                  <li>It won’t hide limitations—constraints are part of the output.</li>
                  <li>It won’t replace accountability—owners stay visible.</li>
                  <li>It won’t encourage dark patterns in customer communication.</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      ) : null}

      <Divider />

      {/* CTA STRIP */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Design target</div>
            <div className="mt-1 max-w-3xl text-sm text-white/70">
              Run like a bigger team without becoming a bigger team—by making methods, ownership,
              and constraints visible.
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
            >
              Back to overview
            </a>
            <a
              href="https://chat.upcube.ai/"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
            >
              Try Upcube
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

