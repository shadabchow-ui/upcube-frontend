'use client'

import { useMemo, useState } from 'react'

type TabKey = 'offerings' | 'workflow' | 'governance'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  )
}

function Card({
  title,
  desc,
  pill,
  children,
}: {
  title: string
  desc?: string
  pill?: string
  children?: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
          {desc ? <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p> : null}
        </div>
        {pill ? (
          <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            {pill}
          </span>
        ) : null}
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  )
}

function Section({
  kicker,
  title,
  desc,
  children,
}: {
  kicker?: string
  title: string
  desc?: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-10">
      {kicker ? (
        <div className="mb-3 text-xs font-medium uppercase tracking-wider text-white/50">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      {desc ? <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">{desc}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Tabs({
  active,
  setActive,
}: {
  active: TabKey
  setActive: (k: TabKey) => void
}) {
  const items: Array<{ key: TabKey; label: string }> = [
    { key: 'offerings', label: 'Offerings' },
    { key: 'workflow', label: 'Build workflow' },
    { key: 'governance', label: 'Security & governance' },
  ]

  return (
    <div className="inline-flex flex-wrap gap-2">
      {items.map((t) => (
        <button
          key={t.key}
          onClick={() => setActive(t.key)}
          className={cx(
            'rounded-full px-4 py-2 text-sm transition',
            'border border-white/10',
            active === t.key
              ? 'bg-white text-black'
              : 'bg-white/[0.04] text-white/80 hover:bg-white/[0.06]'
          )}
          aria-pressed={active === t.key}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}

function Divider() {
  return <div className="my-10 h-px w-full bg-white/10" />
}

export default function BuildersClient() {
  const [tab, setTab] = useState<TabKey>('offerings')

  const chips = useMemo(
    () => [
      'API-first',
      'Evals before deploy',
      'Observability',
      'Guardrails & policies',
      'Versioned prompts',
      'Reproducible runs',
    ],
    []
  )

  return (
    <main className="min-h-screen bg-black text-white">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),rgba(0,0,0,0))]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-12 sm:px-6">
        {/* HERO */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-10">
          <div className="flex flex-wrap gap-2">
            <Pill>Builders</Pill>
            <Pill>Developers</Pill>
            <Pill>Shipping discipline</Pill>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Upcube for Builders & Developers
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
            Ship AI features that behave like software: versioned, tested, monitored, and rollbackable.
            Upcube gives you clean APIs, eval gates, observability, and enforceable policy controls—so teams
            can move fast without turning production into a prompt experiment.
          </p>

          <div className="mt-6">
            <Tabs active={tab} setActive={setTab} />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <Pill key={c}>{c}</Pill>
            ))}
          </div>
        </div>

        {/* POSITION BAR */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/80">
          <span className="font-semibold text-white">Position:</span> AI in product should be treated like
          software—versioned, tested, monitored, and rollbackable.
        </div>

        {/* SNAPSHOT */}
        <Section
          title="Snapshot"
          desc="A practical stack for shipping AI features with reliability, measurability, and governance."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Card
              title="API & SDK layer"
              desc="Typed endpoints for chat, tools, retrieval, and structured outputs. Build features that stay stable as prompts and models evolve."
              pill="SDKs · Schemas"
            >
              <div className="flex flex-wrap gap-2">
                <Pill>Streaming</Pill>
                <Pill>Tool calling</Pill>
                <Pill>Structured outputs</Pill>
                <Pill>Webhooks</Pill>
              </div>
            </Card>

            <Card
              title="Eval harness"
              desc="Regression tests for prompts, tool chains, and retrieval—before users discover the failure mode."
              pill="Golden sets · CI"
            >
              <div className="flex flex-wrap gap-2">
                <Pill>Scorecards</Pill>
                <Pill>Rubrics</Pill>
                <Pill>Canary checks</Pill>
                <Pill>Release gates</Pill>
              </div>
            </Card>

            <Card
              title="Observability & replay"
              desc="Trace every run end-to-end, measure cost/latency, and replay incidents deterministically."
              pill="Traces · Replay"
            >
              <div className="flex flex-wrap gap-2">
                <Pill>Cost per run</Pill>
                <Pill>Latency</Pill>
                <Pill>Error taxonomy</Pill>
                <Pill>Repro manifests</Pill>
              </div>
            </Card>

            <Card
              title="Policy & guardrails"
              desc="Central rules for safety, data handling, and tool permissions—enforced at runtime."
              pill="Policies · Roles"
            >
              <div className="flex flex-wrap gap-2">
                <Pill>RBAC</Pill>
                <Pill>Tool allowlists</Pill>
                <Pill>Data boundaries</Pill>
                <Pill>Approvals</Pill>
              </div>
            </Card>
          </div>
        </Section>

        <Divider />

        {/* TAB PANELS */}
        {tab === 'offerings' ? (
          <div>
            <Section
              title="Offerings"
              desc="Modular building blocks. Start with one capability and expand to a disciplined AI layer across product and ops."
            >
              <div className="grid gap-4 lg:grid-cols-3">
                <Card
                  title="1) Product AI SDK (typed)"
                  desc="Build features that stay stable as prompts and models evolve—validation, retries, tool permissions, and structure are first-class."
                >
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• Structured outputs: schemas, validation, retries</li>
                    <li>• Tool calling: approved tools only, constrained params</li>
                    <li>• Retrieval: citations + source controls by default</li>
                    <li>• Streaming: fast UI with partial responses</li>
                    <li>• Multi-tenant ready: workspace scoping + quotas</li>
                  </ul>

                  <details className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <summary className="cursor-pointer select-none text-sm font-medium text-white/85">
                      Where this saves time
                    </summary>
                    <ul className="mt-3 space-y-2 text-sm text-white/70">
                      <li>• Fewer “worked yesterday” regressions</li>
                      <li>• Less glue code around validation and retries</li>
                      <li>• Faster debugging with consistent run artifacts</li>
                    </ul>
                  </details>
                </Card>

                <Card
                  title="2) Prompt & workflow registry (versioned)"
                  desc="Treat prompts and workflows like deployable assets—diffs, approvals, promotion flows, and rollbacks."
                >
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• Versions: change logs and ownership</li>
                    <li>• Templates: system rules + style packs</li>
                    <li>• Promotion: dev → staging → prod</li>
                    <li>• Diff view: what changed and why</li>
                    <li>• Access: who can edit vs publish</li>
                  </ul>

                  <details className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <summary className="cursor-pointer select-none text-sm font-medium text-white/85">
                      Example: promotion flow
                    </summary>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/70">
                      <li>Draft in dev → run eval suite</li>
                      <li>Review diff → approve to staging</li>
                      <li>Canary traffic → monitor score + cost</li>
                      <li>Promote to prod → keep rollback ready</li>
                    </ol>
                  </details>
                </Card>

                <Card
                  title="3) Evals & release gates"
                  desc="Stop shipping “hope.” Ship measurable behavior with scorecards, thresholds, canaries, and rollback triggers."
                >
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• Golden sets: curated inputs + expected behavior</li>
                    <li>• Rubrics: correctness, safety, tone, citations</li>
                    <li>• Scorecards: pass/fail thresholds per capability</li>
                    <li>• CI: block releases on regressions</li>
                    <li>• Canary + rollback: confidence thresholds and fallbacks</li>
                  </ul>

                  <details className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <summary className="cursor-pointer select-none text-sm font-medium text-white/85">
                      Minimum eval suite
                    </summary>
                    <ul className="mt-3 space-y-2 text-sm text-white/70">
                      <li>• 20 normal user requests (happy path)</li>
                      <li>• 10 edge cases (ambiguity, missing info)</li>
                      <li>• 10 adversarial prompts (injection, unsafe tools)</li>
                      <li>• 10 retrieval checks (citations + source correctness)</li>
                    </ul>
                  </details>
                </Card>
              </div>
            </Section>
          </div>
        ) : null}

        {tab === 'workflow' ? (
          <div>
            <Section
              title="Build workflow"
              desc="A clean, repeatable loop: define → constrain → evaluate → deploy → observe → improve."
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Card
                  title="Step 1 — Define the capability"
                  desc="Make the target explicit before touching prompts: what “good” means, what’s allowed, what must never happen."
                >
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• What user job are we solving?</li>
                    <li>• What counts as correct output?</li>
                    <li>• Which tools/data are allowed?</li>
                    <li>• What failures are unacceptable?</li>
                  </ul>
                </Card>

                <Card
                  title="Step 2 — Implement with constraints"
                  desc="Don’t rely on vibes. Enforce structure, permissions, budgets, and safe failure behaviors."
                >
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• Output schemas: validate, don’t guess</li>
                    <li>• Tool allowlists: constrained parameters</li>
                    <li>• Retrieval: require citations + permissions</li>
                    <li>• Budgets: time/cost limits + fallbacks</li>
                  </ul>
                </Card>

                <Card
                  title="Step 3 — Evaluate before shipping"
                  desc="Catch regressions and brittle behavior before prod traffic does."
                >
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• Golden test set + expected outcomes</li>
                    <li>• Rubrics + thresholds per capability</li>
                    <li>• Edge cases and adversarial prompts</li>
                    <li>• Compare vs last known-good version</li>
                  </ul>
                </Card>

                <Card
                  title="Step 4 — Deploy with observability"
                  desc="Trace everything. Replay failures. Roll back fast when metrics dip."
                >
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• End-to-end traces across tools + retrieval</li>
                    <li>• Cost/latency dashboards + alerts</li>
                    <li>• Deterministic replay for incidents</li>
                    <li>• Rollback and canary triggers</li>
                  </ul>
                </Card>
              </div>

              <details className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <summary className="cursor-pointer select-none text-sm font-medium text-white/85">
                  Example: what gets exported from a build cycle
                </summary>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  <li>• Prompt/workflow version + diff</li>
                  <li>• Eval report + scorecard</li>
                  <li>• Run manifest (tools, sources, parameters, environment)</li>
                  <li>• Dashboard links (latency, cost, errors)</li>
                  <li>• Incident notes + fixes (if applicable)</li>
                </ul>
              </details>
            </Section>
          </div>
        ) : null}

        {tab === 'governance' ? (
          <div>
            <Section
              title="Security & governance"
              desc="Developers need speed inside guardrails. Upcube makes rules enforceable, visible, and auditable."
            >
              <div className="grid gap-4 lg:grid-cols-3">
                <Card
                  title="Access control"
                  desc="Role-based permissions for prompts, tools, and datasets—least privilege by default."
                >
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• Workspace isolation and quotas</li>
                    <li>• Secrets scoped per environment</li>
                    <li>• Tool permissions: allowlist + constraints</li>
                  </ul>
                </Card>

                <Card
                  title="Auditability"
                  desc="Logs for prompts, outputs, tool calls, and approvals—so you can explain what happened."
                >
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• “Who changed what” history</li>
                    <li>• Approval gates for high-stakes workflows</li>
                    <li>• Reproducible runs for postmortems</li>
                  </ul>
                </Card>

                <Card
                  title="Data boundaries"
                  desc="Clear rules for what data can be used, where it can flow, and how long it’s retained."
                >
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• PII rules + redaction options</li>
                    <li>• Retrieval allowlists + source permissions</li>
                    <li>• Retention controls for logs and artifacts</li>
                  </ul>
                </Card>
              </div>

              <details className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <summary className="cursor-pointer select-none text-sm font-medium text-white/85">
                  What Upcube will not do
                </summary>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  <li>• No silent tool execution outside approved policies</li>
                  <li>• No “mystery edits” to production prompts</li>
                  <li>• No hidden data mixing across tenants</li>
                  <li>• No laundering speculation into “confirmed” facts</li>
                </ul>
              </details>
            </Section>
          </div>
        ) : null}

        {/* DESIGN TARGET + CONTACT */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/80">
          <span className="font-semibold text-white">Design target:</span> Make AI features easier to ship and
          harder to break—by making outputs testable, runs replayable, and governance enforceable.
          <div className="mt-3 text-white/70">
            Contact:{' '}
            <a className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60" href="mailto:upcubeco@gmail.com">
              upcubeco@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
