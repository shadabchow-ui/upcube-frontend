// app/journalists/page.tsx
"use client"

import React, { useMemo, useState } from "react"
import Link from "next/link"

type TabKey = "offerings" | "workflows" | "guardrails"

type Pill = { label: string }
type SnapshotCard = { title: string; desc: string; chips: string[] }
type Card = { title: string; subtitle?: string; bullets: string[]; footer?: string }
type Workflow = { title: string; timeframe: string; steps: string[]; note?: string }
type Guardrail = { title: string; desc: string }

export default function JournalistsPage() {
  const [tab, setTab] = useState<TabKey>("offerings")

  const heroPills: Pill[] = useMemo(
    () => [
      { label: "Receipts-first" },
      { label: "Corrections-ready" },
      { label: "Source traceability" },
      { label: "Public trust" },
    ],
    []
  )

  const snapshot: SnapshotCard[] = useMemo(
    () => [
      {
        title: "Research assist",
        desc: "Build an evidence map fast — sources, quotes, claims, and what’s still unknown.",
        chips: ["Collect", "Trace", "Verify"],
      },
      {
        title: "Data clarity",
        desc: "Turn messy datasets into readable briefs: definitions, caveats, and how to interpret.",
        chips: ["Dictionaries", "Caveats", "Examples"],
      },
      {
        title: "Explainers",
        desc: "Draft plain-language public pages that preserve nuance and avoid overclaiming.",
        chips: ["Plain English", "FAQs", "Context"],
      },
      {
        title: "Corrections ledger",
        desc: "Publish updates consistently: what changed, why, and what remains unresolved.",
        chips: ["Change log", "Versioning", "Notes"],
      },
    ],
    []
  )

  const offerings: Card[] = useMemo(
    () => [
      {
        title: "1) Receipts-First Research Copilot",
        subtitle:
          "Turn a story idea into an evidence map you can defend — without vibe-based claims.",
        bullets: [
          "Source intake: upload links/docs and tag them (primary, secondary, opinion, unknown)",
          "Claim extraction: isolate factual claims and link each to supporting passages",
          "Quote hygiene: track exact wording + context window so quotes don’t get laundered",
          "Conflict surfacing: show contradictions, missing data, and weak supports",
          "Uncertainty log: label what can’t be confirmed yet (and why)",
        ],
        footer: "Output is a map, not a narrative — narrative comes after the map.",
      },
      {
        title: "2) Fact-Check Scaffolding (Not a Verdict Engine)",
        subtitle:
          "Speed up verification while keeping editorial responsibility human-owned.",
        bullets: [
          "Checklist generation: verify names, dates, locations, and attribution paths",
          "“Strong vs weak support” grading: separate direct evidence from inference",
          "Counter-claim capture: record the best opposing explanations (steelman mode)",
          "Timeline builder: stitch events with sources and confidence labels",
          "Red-flag detection: missing provenance, circular citations, screenshot-only evidence",
        ],
        footer: "Upcube supports the process; your newsroom owns the call.",
      },
      {
        title: "3) Public Dataset Readability Kits",
        subtitle:
          "Make numbers interpretable for citizens — definitions, limitations, and examples included.",
        bullets: [
          "Metric definitions: what counts, what doesn’t, and common misreads",
          "Limitations & caveats: what the data can’t show (and why)",
          "Method notes: collection method, gaps, and changes over time",
          "Interpretation guide: “how to read this chart/dashboard” in plain language",
          "Release notes: consistent monthly/weekly update format",
        ],
        footer: "Goal: reduce confusion and prevent accidental misinformation.",
      },
      {
        title: "4) Explainer & FAQ Builder",
        subtitle:
          "Draft pages that the public can actually use — without stripping nuance.",
        bullets: [
          "Policy-to-plain: convert dense text into clear steps and decision points",
          "FAQ design: real questions people ask (not internal jargon)",
          "Process maps: step-by-step flows (what to do first/next/if stuck)",
          "Translation-ready drafts: structure that survives localization",
          "Accessibility: readability-first formatting and scannable structure",
        ],
        footer: "Clarity is a product feature — not a press release.",
      },
      {
        title: "5) Corrections, Updates, and Change Logs",
        subtitle:
          "Publish changes with dignity: what changed, when, and what remains uncertain.",
        bullets: [
          "Corrections ledger: track revisions and maintain a public changelog format",
          "Disclosure templates: what was updated and why (no evasive language)",
          "Version pinning: snapshot source sets used for a given story cut",
          "“What we still don’t know” section: normalize uncertainty without collapsing trust",
          "Audit trail: keep internal notes on how decisions were made",
        ],
        footer: "Trust grows when updates are consistent and specific.",
      },
      {
        title: "6) Editorial Ops & Knowledge System",
        subtitle:
          "Turn newsroom know-how into reusable playbooks — so quality scales with the team.",
        bullets: [
          "Beat playbooks: recurring source lists, datasets, and verification checklists",
          "Templates: interview briefs, backgrounders, and pre-publication review steps",
          "Incident comms drafts: calm, factual, actionable (for public agencies too)",
          "Handoff packs: preserve context across writers/editors",
          "Post-mortems: capture what broke in the process and how to fix it",
        ],
        footer: "A small team can operate like a much larger one — without bureaucracy.",
      },
    ],
    []
  )

  const workflows: Workflow[] = useMemo(
    () => [
      {
        title: "Workflow A — Breaking news package",
        timeframe: "90 minutes",
        steps: [
          "Triage: list what is confirmed vs unconfirmed (and by whom)",
          "Source map: primary sources first; label secondary repetition",
          "Timeline: order events with timestamps + confidence tags",
          "Draft: publish with a “what we know / what we don’t” structure",
          "Update loop: corrections ledger + visible change log",
        ],
        note: "The goal is speed without laundering uncertainty into certainty.",
      },
      {
        title: "Workflow B — Data story that won’t get torn apart",
        timeframe: "3–5 days",
        steps: [
          "Define the metric: what counts and what doesn’t",
          "Validate the dataset: gaps, outliers, missing fields, collection changes",
          "Write the interpretation guide: how to read charts and what not to conclude",
          "Draft the narrative with caveats tied to specific claims",
          "Publish the “methods & limitations” panel + release notes format",
        ],
        note: "Readers don’t need fewer caveats — they need clearer ones.",
      },
      {
        title: "Workflow C — Investigative series foundation",
        timeframe: "2–3 weeks",
        steps: [
          "Evidence map: claims, documents, and dependency graph",
          "Contradiction surfacing: list competing explanations and weakest links",
          "Attribution discipline: separate direct evidence from inference",
          "Review gates: editor sign-off on claims table before narrative polish",
          "Publication pack: sources, methods, and corrections-ready update format",
        ],
        note: "If the method is weak, the story becomes a vibes debate.",
      },
    ],
    []
  )

  const guardrails: Guardrail[] = useMemo(
    () => [
      {
        title: "No invented facts",
        desc: "If something can’t be confirmed, it stays labeled as unknown/unverified.",
      },
      {
        title: "No quote laundering",
        desc: "Quotes require provenance: original source, context window, and timestamp.",
      },
      {
        title: "No anonymous smear automation",
        desc: "Upcube isn’t a reputation weapon. Editorial judgment stays human.",
      },
      {
        title: "No doxxing or personal data dumps",
        desc: "Sensitive info is minimized; publication decisions require explicit review.",
      },
      {
        title: "Human review gates",
        desc: "High-impact outputs (allegations, identity claims, legal-risk areas) require human approval.",
      },
      {
        title: "Corrections are a first-class feature",
        desc: "Updates are tracked with a change log so the public can see what changed and why.",
      },
    ],
    []
  )

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8">
        {/* Top breadcrumb-ish chips */}
        <div className="mb-4 flex flex-wrap gap-2 text-xs text-white/70">
          <Chip subtle>Journalists</Chip>
          <Chip subtle>Public information</Chip>
          <Chip subtle>Receipts-first</Chip>
          <Chip subtle>Corrections-ready</Chip>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 sm:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl">
              Upcube for Journalists & Public Information
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">
              News moves fast. Trust moves slow. Upcube helps you move quickly
              <span className="text-white"> without</span> laundering uncertainty into certainty —
              by making sources, claims, and corrections visible and consistent.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {heroPills.map((p) => (
                <Chip key={p.label}>{p.label}</Chip>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-7 flex flex-wrap gap-2">
              <TabButton active={tab === "offerings"} onClick={() => setTab("offerings")}>
                Offerings
              </TabButton>
              <TabButton active={tab === "workflows"} onClick={() => setTab("workflows")}>
                Workflows
              </TabButton>
              <TabButton active={tab === "guardrails"} onClick={() => setTab("guardrails")}>
                Guardrails
              </TabButton>

              <div className="ml-auto flex items-center gap-2">
                <Link
                  href="/contact"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/80 hover:bg-white/[0.06]"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Position strip */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-white/80">
            <span className="font-semibold text-white">Position:</span> Journalism needs structure
            under pressure — clearer sourcing, tighter claim discipline, and updates that don’t hide
            the ball. Upcube supports the workflow; humans own the responsibility.
          </p>
        </section>

        {/* Snapshot */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl">Snapshot</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {snapshot.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <div className="text-sm font-semibold">{c.title}</div>
                <div className="mt-2 text-sm leading-6 text-white/70">{c.desc}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.chips.map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/75"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main tab content */}
        <section className="mt-10">
          {tab === "offerings" && (
            <>
              <SectionHeader
                title="Offerings"
                desc="What Upcube does for newsrooms, journalists, and public-facing information teams."
              />
              <div className="mt-4 grid gap-3 lg:grid-cols-2">
                {offerings.map((c) => (
                  <BigCard key={c.title} title={c.title} subtitle={c.subtitle} bullets={c.bullets} footer={c.footer} />
                ))}
              </div>
              <Disclosure
                title="Example: what a “receipts-first story pack” includes"
                items={[
                  "Claims table: each claim + confidence label + linked supporting passages",
                  "Sources list: primary vs secondary, with timestamps and provenance notes",
                  "Timeline: key events + citations + what changed across updates",
                  "Methods panel: how data was collected/cleaned + what it cannot show",
                  "Corrections ledger: what changed, when, and why (public-facing)",
                ]}
              />
            </>
          )}

          {tab === "workflows" && (
            <>
              <SectionHeader
                title="Typical workflows"
                desc="Repeatable playbooks that keep your process tight when time is short."
              />
              <div className="mt-4 grid gap-3 lg:grid-cols-3">
                {workflows.map((w) => (
                  <WorkflowCard key={w.title} w={w} />
                ))}
              </div>

              <Disclosure
                title="Example: minimum pre-publish checklist (fast but real)"
                items={[
                  "Attribution: every key fact has a source (not “reported by others”)",
                  "Quote context: the surrounding context doesn’t invert the meaning",
                  "Time & place: timestamps and locations reconciled across sources",
                  "Numbers: definitions + denominator + time window + caveats included",
                  "Update plan: clear process for corrections and new info",
                ]}
              />
            </>
          )}

          {tab === "guardrails" && (
            <>
              <SectionHeader
                title="Guardrails"
                desc="Trust is fragile. These boundaries keep Upcube from becoming a misinformation accelerator."
              />

              <div className="mt-4 grid gap-3 lg:grid-cols-3">
                {guardrails.map((g) => (
                  <div
                    key={g.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                  >
                    <div className="text-sm font-semibold">{g.title}</div>
                    <div className="mt-2 text-sm leading-6 text-white/70">{g.desc}</div>
                  </div>
                ))}
              </div>

              <Disclosure
                title="What Upcube will not do"
                items={[
                  "Auto-generate allegations or definitive accusations without evidence mapping",
                  "Turn rumor chains into “confirmed” narratives via repetition",
                  "Assist with doxxing, harassment, or targeted personal-data publication",
                  "Act as a legal decision-maker or publish “verdicts” as truth",
                  "Replace editorial judgment — humans own accountability",
                ]}
              />
            </>
          )}
        </section>

        {/* Bottom CTA */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold sm:text-xl">Build trust with structure.</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                If you want newsroom-grade rigor — sources, claims, uncertainty, and corrections
                visible — this is the lane.
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/contact"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90"
              >
                Contact
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 text-sm text-white/85 hover:bg-white/[0.05]"
              >
                Back home
              </Link>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <div className="mt-6 text-xs text-white/45">
          Note: Upcube supports documentation and clarity. It is not a legal service and does not replace editorial judgment.
        </div>
      </div>
    </main>
  )
}

/* ----------------------------- UI helpers ----------------------------- */

function SectionHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold tracking-tight sm:text-xl">{title}</h2>
      <p className="max-w-3xl text-sm leading-6 text-white/70">{desc}</p>
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
      className={[
        "rounded-full px-4 py-2 text-xs transition",
        "border border-white/10",
        active ? "bg-white text-black" : "bg-white/[0.02] text-white/80 hover:bg-white/[0.05]",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  )
}

function Chip({ children, subtle }: { children: React.ReactNode; subtle?: boolean }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px]",
        subtle
          ? "border-white/10 bg-white/[0.02] text-white/60"
          : "border-white/10 bg-white/[0.04] text-white/75",
      ].join(" ")}
    >
      {children}
    </span>
  )
}

function BigCard({
  title,
  subtitle,
  bullets,
  footer,
}: {
  title: string
  subtitle?: string
  bullets: string[]
  footer?: string
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
      <div className="text-sm font-semibold">{title}</div>
      {subtitle && <div className="mt-2 text-sm leading-6 text-white/70">{subtitle}</div>}
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            <span className="leading-6 text-white/75">{b}</span>
          </li>
        ))}
      </ul>
      {footer && (
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/70">
          {footer}
        </div>
      )}
    </div>
  )
}

function WorkflowCard({ w }: { w: Workflow }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="text-sm font-semibold">{w.title}</div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/70">
          {w.timeframe}
        </span>
      </div>
      <ol className="mt-4 space-y-2 text-sm text-white/80">
        {w.steps.map((s, idx) => (
          <li key={s} className="flex gap-2">
            <span className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] text-white/70">
              {idx + 1}
            </span>
            <span className="leading-6 text-white/75">{s}</span>
          </li>
        ))}
      </ol>
      {w.note && (
        <div className="mt-5 text-sm leading-6 text-white/65">
          <span className="font-semibold text-white/80">Note:</span> {w.note}
        </div>
      )}
    </div>
  )
}

function Disclosure({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="text-sm font-semibold">{title}</div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/70">
          {open ? "Hide" : "Show"}
        </span>
      </button>
      {open && (
        <div className="border-t border-white/10 px-5 pb-5 pt-4">
          <ul className="space-y-2 text-sm text-white/75">
            {items.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                <span className="leading-6">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
