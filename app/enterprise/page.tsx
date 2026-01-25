// app/enterprise/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise — Upcube',
  description:
    'Upcube for Enterprise: practical, governable AI for teams — knowledge copilots, workflows, automation, and reporting.',
}

const chips = ['Team-ready', 'Workflow-first', 'Audit-friendly', 'Human-approved']

const snapshot = [
  {
    title: 'Knowledge Copilot',
    desc: 'Find answers in internal docs fast.',
    foot: 'RAG · Citations · Permissions',
  },
  {
    title: 'AI Studio',
    desc: 'Text, voice, image, video pipelines.',
    foot: 'Draft · Produce · Review',
  },
  {
    title: 'Automation',
    desc: 'Repeatable tasks become workflows.',
    foot: 'Agents · Approvals · Logs',
  },
  {
    title: 'Analytics',
    desc: 'Measure adoption and impact.',
    foot: 'KPIs · QA · Reporting',
  },
]

const offeringsTop = [
  {
    kicker: '1) Enterprise Knowledge Copilot',
    subtitle: 'Your internal answers, grounded in your internal sources.',
    bullets: [
      'Document QA: ask questions and get answers with citations back to source passages',
      'Policy navigation: HR, IT, security, benefits, procurement, SOPs',
      'Playbooks: incident response, onboarding, operational runbooks',
      'Permission-aware: results follow access controls (role-based)',
      'Change visibility: version-aware answers and “what changed” summaries',
    ],
    toggle: 'Where this saves time',
    toggleItems: [
      'Cuts repeated questions by making answers self-serve and source-grounded.',
      'Speeds onboarding by turning policies + runbooks into guided Q&A.',
      'Reduces “tribal knowledge” risk with citations and version awareness.',
    ],
  },
  {
    kicker: '2) AI Studio for Teams (Text · Voice · Image · Video)',
    subtitle: 'Production-ready generation with review gates.',
    bullets: [
      'Text: proposals, briefs, SOPs, emails, support macros, product docs',
      'Voice: narration drafts, voiceover scripts, internal training audio',
      'Image: creative assets, product imagery, campaign variants, thumbnails',
      'Video planning: scripts, shot lists, storyboards, cut lists',
      'Brand consistency: style rules, tone guides, safe prompts, templates',
    ],
    toggle: 'Enterprise-ready workflows',
    toggleItems: [
      'Draft → Review → Approve pipelines for customer-facing outputs.',
      'Templates + guardrails to keep tone, claims, and formatting consistent.',
      'Asset checklists so teams ship the same “quality bar” every time.',
    ],
  },
  {
    kicker: '3) Automation & Agents (with approvals)',
    subtitle: 'Automate repeatable work without losing control.',
    bullets: [
      'Workflow automation: routing, formatting, extraction, conversions',
      'Ops agents: prepare reports, draft updates, summarize tickets, triage requests',
      'Human approval: required for customer-facing, financial, or production actions',
      'Run logs: who ran what, when, with what inputs and outputs',
      'Escalation: confidence thresholds and fallback rules',
    ],
    toggle: 'Examples of safe automation targets',
    toggleItems: [
      'Ticket summarization + suggested replies (human reviews before send).',
      'Weekly KPI draft reports grounded in metrics sources (review gate).',
      'Doc-to-template conversions (SOP → checklist, incident → postmortem draft).',
    ],
  },
]

const offeringsMore = [
  {
    kicker: '4) Sales, Marketing & Customer Success Workflows',
    subtitle: 'Make customer-facing work faster and more consistent.',
    bullets: [
      'Account research, call prep, and follow-up packs',
      'Proposals and decks (drafting support and outlines)',
      'Case studies and ROI narratives with guardrails',
      'Customer onboarding emails and training material',
      'Churn reduction: issue pattern analysis and playbooks',
    ],
    note: 'Rule: we don’t invent customer results. We keep assumptions explicit.',
  },
  {
    kicker: '5) Engineering, IT, and Security Productivity',
    subtitle: 'Less toil, faster fixes, clearer systems.',
    bullets: [
      'Runbooks and SOP acceleration',
      'Incident summaries and postmortem draft',
      'Config and script generation with review gates',
      'Internal tool documentation and onboarding',
      'Threat modeling and abuse-case checklists',
    ],
  },
  {
    kicker: '6) Research & Strategy Support',
    subtitle: 'Grounded research for decisions that matter.',
    bullets: [
      'Competitive comparisons and market maps',
      'Evidence-backed memos with source citations',
      'Scenario planning and risk framing',
      'Policy/standards summaries (where relevant)',
      'Experiment design and evaluation plans',
    ],
  },
  {
    kicker: '7) Adoption, QA & Measurable Impact',
    subtitle: 'AI that can’t be measured becomes chaos.',
    bullets: [
      'Prompt libraries and approved templates',
      'Quality checks for common failure modes',
      'Usage analytics: where value is real vs noise',
      'Human feedback loops to improve outputs over time',
      'Rollout plans and team training kits',
    ],
  },
]

const useCases = [
  {
    title: 'Use case A — “We have knowledge everywhere”',
    bullets: [
      'Index internal docs and policies',
      'Permission-aware Q&A with citations',
      'Reduce repeated questions and onboarding time',
      'Keep answers consistent as docs change',
    ],
  },
  {
    title: 'Use case B — “Our teams waste time on repetitive drafting”',
    bullets: [
      'Standard templates (SOPs, proposals, briefs)',
      'Draft → review → approve pipelines',
      'Central prompt governance',
      'Quality checks and style consistency',
    ],
  },
  {
    title: 'Use case C — “Support is overloaded”',
    bullets: [
      'Ticket summarization and suggested replies',
      'Auto-draft KB articles from resolved cases',
      'Root-cause clustering and trend reporting',
      'Better macros and fewer escalations',
    ],
  },
  {
    title: 'Use case D — “Leadership needs clean reporting”',
    bullets: [
      'Weekly KPI reporting drafts',
      'Executive summaries grounded in metrics',
      'Risk and tradeoff framing',
      'Decision memos with assumptions stated',
    ],
  },
]

const governance = [
  {
    title: 'Access control',
    desc: 'Role-based permissions and source-aware retrieval.',
  },
  {
    title: 'Auditability',
    desc: 'Logs for prompts, outputs, approvals, and actions.',
  },
  {
    title: 'Human approval',
    desc: 'Review gates for customer-facing and high-stakes workflows.',
  },
]

export default function EnterprisePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 md:px-6">
      {/* Hero */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 md:p-10">
        <div className="flex flex-wrap gap-2 text-xs text-white/70">
          {['Enterprise', 'Security', 'Governance', 'Automation'].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Upcube for Enterprise
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 md:text-base">
          Upcube brings practical AI into real operations: text, voice, image, and video
          workflows for teams—plus internal knowledge copilots, automation, and reporting.
          Built to reduce cycle time, improve quality, and keep humans in control.
        </p>

        {/* Section buttons */}
        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href="#offerings"
            className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white hover:bg-white/[0.10]"
          >
            Offerings
          </a>
          <a
            href="#use-cases"
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/90 hover:bg-white/[0.08]"
          >
            Use cases
          </a>
          <a
            href="#security"
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/90 hover:bg-white/[0.08]"
          >
            Security &amp; governance
          </a>
        </div>

        {/* Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Position */}
      <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
        <span className="font-medium text-white">Position:</span> enterprise AI should
        be predictable, governable, and measurable. Upcube focuses on operational value:
        faster execution, better documentation, fewer errors, and clearer decisions.
      </section>

      {/* Snapshot */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Snapshot</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {snapshot.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
              <div className="mt-4 inline-flex rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/75">
                {c.foot}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="mt-14 scroll-mt-24">
        <h2 className="text-xl font-semibold">Offerings</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/70">
          Upcube is modular: you can start with a single workflow (support, content,
          research, internal docs) and expand into a company-wide AI layer with governance
          and auditability.
        </p>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {offeringsTop.map((card) => (
            <div
              key={card.kicker}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <h3 className="text-base font-semibold">{card.kicker}</h3>
              <p className="mt-2 text-sm text-white/70">{card.subtitle}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
                {card.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <details className="mt-5">
                <summary className="cursor-pointer select-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/85 hover:bg-white/[0.06]">
                  {card.toggle}
                </summary>
                <div className="mt-3 space-y-2 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
                  {card.toggleItems.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {offeringsMore.map((card) => (
            <div
              key={card.kicker}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <h3 className="text-base font-semibold">{card.kicker}</h3>
              <p className="mt-2 text-sm text-white/70">{card.subtitle}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
                {card.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {card.note ? (
                <p className="mt-4 text-xs text-white/55">{card.note}</p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/70">
          <span className="font-medium text-white">Design target:</span> enterprise AI
          that is secure, auditable, and useful—without “black box” behavior.
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="mt-14 scroll-mt-24">
        <h2 className="text-xl font-semibold">High-value enterprise use cases</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {useCases.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <h3 className="text-base font-semibold">{c.title}</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
                {c.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <details className="mt-4">
          <summary className="cursor-pointer select-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/85 hover:bg-white/[0.06]">
            Example: enterprise rollout in phases
          </summary>
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-white/70">
            <p className="font-medium text-white">Phase 1 — Start narrow</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Pick 1–2 workflows (e.g., internal doc Q&amp;A + ticket summaries).</li>
              <li>Define success metrics (time saved, deflection rate, QA score).</li>
              <li>Establish review/approval gates and logging.</li>
            </ul>

            <p className="mt-4 font-medium text-white">Phase 2 — Expand safely</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Add approved templates and central prompt governance.</li>
              <li>Introduce permissions and source-scoped retrieval.</li>
              <li>Roll out training and “how we use this” playbooks.</li>
            </ul>

            <p className="mt-4 font-medium text-white">Phase 3 — Operationalize</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Automate repeatable steps with approvals for risky actions.</li>
              <li>Track adoption + impact with dashboards and QA reviews.</li>
              <li>Iterate based on measured outcomes, not vibes.</li>
            </ul>
          </div>
        </details>
      </section>

      {/* Security & governance */}
      <section id="security" className="mt-14 scroll-mt-24">
        <h2 className="text-xl font-semibold">Security &amp; governance</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/70">
          Enterprises need guardrails: who can access what, how outputs are reviewed,
          and how actions are logged. Upcube is designed to be governable.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {governance.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <h3 className="text-base font-semibold">{g.title}</h3>
              <p className="mt-2 text-sm text-white/70">{g.desc}</p>
            </div>
          ))}
        </div>

        <details className="mt-4">
          <summary className="cursor-pointer select-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/85 hover:bg-white/[0.06]">
            What Upcube will not do in enterprise settings
          </summary>
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>No silent execution of high-stakes actions without human approval.</li>
              <li>No pretending uncertain answers are certain (uncertainty stays visible).</li>
              <li>No bypassing access controls—results must respect permissions.</li>
              <li>No “magic metrics” without sources; reporting stays grounded.</li>
            </ul>
          </div>
        </details>

        <p className="mt-6 text-sm text-white/70">
          Contact:{' '}
          <a className="text-white underline underline-offset-4" href="mailto:upcubeai@gmail.com">
            upcubeai@gmail.com
          </a>
        </p>
      </section>
    </main>
  )
}
