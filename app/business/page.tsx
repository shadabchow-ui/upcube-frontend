import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business — Upcube',
  description: 'Upcube for Future Builders: offerings, builder flow, and standards & guardrails.',
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        {subtitle ? <p className="text-sm text-white/70">{subtitle}</p> : null}
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
      {footer ? <div className="mt-5">{footer}</div> : null}
    </div>
  )
}

function SectionHeader({
  id,
  kicker,
  title,
  desc,
}: {
  id?: string
  kicker?: string
  title: string
  desc?: string
}) {
  return (
    <div id={id} className="scroll-mt-24">
      {kicker ? (
        <div className="mb-2 text-xs font-medium tracking-wide text-white/60">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {desc ? <p className="mt-2 text-sm text-white/70">{desc}</p> : null}
    </div>
  )
}

export default function BusinessPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
      {/* Hero */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 md:p-10">
        <div className="flex flex-wrap gap-2">
          <Pill>Future Builders</Pill>
          <Pill>Creators</Pill>
          <Pill>Founders</Pill>
          <Pill>Engineers</Pill>
        </div>

        <h1 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-4xl">
          Upcube for Future Builders
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
          The future won’t be built by passive consumption. It will be built by people
          who ship: software, science, art, hardware, communities, and new institutions.
          Upcube exists to reduce the friction between an idea and a real deliverable —
          while keeping the builder in control.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href="#offerings"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Offerings
          </a>
          <a
            href="#builder-flow"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Builder flow
          </a>
          <a
            href="#standards"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Standards &amp; guardrails
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/80">
          <span className="font-medium text-white">Position:</span> Upcube is a builder’s AI layer:
          planning, execution support, and production tooling. Not hype. Not “one prompt to build a
          company.” Real workflows for real builders.
        </div>
      </div>

      {/* Snapshot */}
      <div className="mt-10">
        <SectionHeader title="Snapshot" />
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <Card
            title="Build Copilot"
            subtitle="Specs, architecture, code support, debugging."
            footer={<Pill>Plan · Build · Refactor</Pill>}
          />
          <Card
            title="Creative Studio"
            subtitle="Voice, images, scripts, storyboards, assets."
            footer={<Pill>Ideate · Draft · Produce</Pill>}
          />
          <Card
            title="Research Engine"
            subtitle="Grounded research, citations, experiment scaffolds."
            footer={<Pill>Map · Test · Iterate</Pill>}
          />
          <Card
            title="Ops & Launch"
            subtitle="Docs, onboarding, support, comms, rollout kits."
            footer={<Pill>Ship · Measure · Improve</Pill>}
          />
        </div>
      </div>

      {/* Offerings */}
      <div className="mt-14">
        <SectionHeader
          id="offerings"
          title="Offerings"
          desc="Future Builders includes founders, indie hackers, engineers, designers, artists, researchers, and community organizers. Upcube supports the full arc: idea → spec → build → test → ship → iterate."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card
            title="1) Product & System Design Studio"
            subtitle="Turn a fuzzy idea into a buildable system."
            footer={
              <details className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <summary className="cursor-pointer text-sm text-white/80">
                  Example deliverables
                </summary>
                <div className="mt-3 text-sm text-white/70 space-y-2">
                  <p>• Problem framing + target user + success definition</p>
                  <p>• PRD + constraints + acceptance criteria</p>
                  <p>• Architecture draft (services, data, flows, storage)</p>
                  <p>• Threat model + abuse cases + boundaries</p>
                  <p>• Roadmap with “what not to build yet” stated</p>
                </div>
              </details>
            }
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Problem framing: what you’re building, who it’s for, what success means</li>
              <li>• PRDs &amp; specs: scope, constraints, requirements, acceptance criteria</li>
              <li>• Architecture drafts: services, data models, event flows, storage choices</li>
              <li>• Threat modeling: risks, abuse cases, security boundaries</li>
              <li>• Roadmaps: phased plan with “what not to build yet” clearly stated</li>
            </ul>
          </Card>

          <Card
            title="2) Engineering Copilot (Build + Debug)"
            subtitle="Move faster without turning your codebase into chaos."
            footer={
              <details className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <summary className="cursor-pointer text-sm text-white/80">
                  Build-quality defaults we push
                </summary>
                <div className="mt-3 text-sm text-white/70 space-y-2">
                  <p>• Unit/integration tests where breakage is expensive</p>
                  <p>• Logs that explain outcomes, not noise</p>
                  <p>• Small PRs with clear acceptance criteria</p>
                  <p>• Refactors before the debt compounds</p>
                </div>
              </details>
            }
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Code generation: scripts, utilities, endpoints, tests, migrations</li>
              <li>• Debugging: trace errors, propose fixes, explain root cause</li>
              <li>• Refactors: improve structure, readability, performance, safety</li>
              <li>• Testing: unit tests, integration tests, E2E test scaffolds</li>
              <li>• Docs: READMEs, runbooks, onboarding guides, API docs</li>
            </ul>
          </Card>

          <Card
            title="3) Creator Studio (Voice, Image, Video Planning)"
            subtitle="Generate assets and production plans that actually ship."
            footer={
              <details className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <summary className="cursor-pointer text-sm text-white/80">
                  Example: a “video pack” output
                </summary>
                <div className="mt-3 text-sm text-white/70 space-y-2">
                  <p>• Hook + 3 angles + CTA variants</p>
                  <p>• Shot list + storyboard beats</p>
                  <p>• VO draft + timing markers</p>
                  <p>• Thumbnail directions + title tags</p>
                </div>
              </details>
            }
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Scriptwriting: hooks, pacing, structure, CTA variants</li>
              <li>• Voice workflows: narration drafts, segments, timing and tone</li>
              <li>• Image concepts: prompts, variants, brand consistency, product scenes</li>
              <li>• Video planning: shot lists, storyboards, scene-by-scene breakdowns</li>
              <li>• Publishing kits: titles, descriptions, tags, thumbnails direction</li>
            </ul>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card
            title="4) Research-to-Build Engine"
            subtitle="When you build something real, you need facts — not vibes."
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Grounded research briefs with citations</li>
              <li>• Competitive comparisons and capability maps</li>
              <li>• Design constraints derived from reality (cost, latency, safety, infra)</li>
              <li>• Experiment design and evaluation plans</li>
              <li>• Evidence maps: what’s known, unknown, and disputed</li>
            </ul>
          </Card>

          <Card title="5) Launch & Operations Pack" subtitle="Ship and keep it alive.">
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Runbooks, incident playbooks, escalation trees</li>
              <li>• Support macros, internal knowledge base, FAQ pages</li>
              <li>• Product onboarding flows and tutorials</li>
              <li>• Release notes and change logs</li>
              <li>• Metrics definitions and dashboards planning</li>
            </ul>
          </Card>

          <Card
            title="6) Builder Communities & Cohorts"
            subtitle="Turn solo builders into a high-output cohort."
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Cohort structure: cadence, norms, goals, accountability</li>
              <li>• Weekly sprint templates and demo-day kits</li>
              <li>• Peer review guides and feedback frameworks</li>
              <li>• Contributor onboarding for open/community projects</li>
              <li>• “Build tracks” for skills: coding, research, design, content, ops</li>
            </ul>
            <p className="mt-4 text-xs text-white/50">
              Note: this is for communities you run (or partner communities), not a replacement for
              human mentorship.
            </p>
          </Card>

          <Card
            title="7) Automation & Agents (Practical, Not Sci-Fi)"
            subtitle="Automate repeatable work while keeping humans in control."
            footer={
              <details className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <summary className="cursor-pointer text-sm text-white/80">
                  Agent boundary rule
                </summary>
                <div className="mt-3 text-sm text-white/70 space-y-2">
                  <p>Agents can draft, gather, format, and propose.</p>
                  <p>Humans approve production-impacting actions.</p>
                </div>
              </details>
            }
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Task automation: formatting, extraction, conversion (CSV/JSON/HTML)</li>
              <li>• Content pipelines: drafts → QA → publish</li>
              <li>• Research pipelines: gather → cite → summarize → export</li>
              <li>• Ops automation: reports, logs, alerts, summaries</li>
              <li>• Agent boundaries: approval steps for anything risky or expensive</li>
            </ul>
          </Card>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
          <span className="font-medium text-white">Design target:</span> Upcube makes builders faster and sharper —
          without taking ownership away from the humans building.
        </div>
      </div>

      {/* Builder flow */}
      <div className="mt-14">
        <SectionHeader
          id="builder-flow"
          title="The builder flow (idea → shipped)"
          desc="A repeatable path that keeps scope tight and quality high."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card
            title="Phase 1 — Define and scope"
            subtitle="Most projects fail from scope creep. This phase prevents that."
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Write the problem in plain language</li>
              <li>• Pick a narrow first milestone you can ship</li>
              <li>• List constraints (time, money, infra, legal, safety)</li>
              <li>• Define success metrics and “done” conditions</li>
            </ul>
          </Card>

          <Card
            title="Phase 2 — Design the system"
            subtitle="If you can’t explain the system, you can’t maintain it."
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Architecture outline + data model</li>
              <li>• API and UI boundaries</li>
              <li>• Threat model and abuse cases</li>
              <li>• Testing plan for core flows</li>
            </ul>
          </Card>

          <Card
            title="Phase 3 — Build and test"
            subtitle="Speed is useless if every change breaks the app."
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Implement core flows first</li>
              <li>• Write tests where breakage is expensive</li>
              <li>• Log what matters and remove noise</li>
              <li>• Refactor early to prevent complexity debt</li>
            </ul>
          </Card>

          <Card
            title="Phase 4 — Ship and iterate"
            subtitle="Shipping is the start of learning, not the end."
          >
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Release notes + change log</li>
              <li>• Support and onboarding pack</li>
              <li>• Metrics definitions and feedback loops</li>
              <li>• Next milestones based on real usage</li>
            </ul>
          </Card>
        </div>

        <details className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
          <summary className="cursor-pointer text-sm font-medium text-white/80">
            Example: a “builder pack” export
          </summary>
          <div className="mt-3 grid gap-3 text-sm text-white/70 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-white/85 font-medium">Artifacts</div>
              <div className="mt-2 space-y-1">
                <p>• PRD + constraints + acceptance criteria</p>
                <p>• Architecture + data model + APIs</p>
                <p>• Threat model + boundaries</p>
                <p>• Test plan + core flow cases</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-white/85 font-medium">Ops</div>
              <div className="mt-2 space-y-1">
                <p>• Runbook + escalation rules</p>
                <p>• Release checklist + rollout plan</p>
                <p>• Metrics + dashboard definitions</p>
                <p>• Support macros + FAQ seed</p>
              </div>
            </div>
          </div>
        </details>
      </div>

      {/* Standards */}
      <div className="mt-14">
        <SectionHeader
          id="standards"
          title="Standards & guardrails"
          desc="Builders shape the world. Upcube supports speed, but it also supports responsibility."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Truth over hype" subtitle="We encourage sourcing, testability, and clear uncertainty labels." />
          <Card title="Security by default" subtitle="Threat modeling, least privilege, and safe deployment practices." />
          <Card title="Human ownership" subtitle="Humans approve production-impacting actions. AI assists and drafts." />
        </div>

        <details className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
          <summary className="cursor-pointer text-sm font-medium text-white/80">
            What Upcube will not do
          </summary>
          <div className="mt-3 space-y-2 text-sm text-white/70">
            <p>• Pretend “autopilot” replaces ownership, judgment, or accountability.</p>
            <p>• Push risky actions without explicit human review.</p>
            <p>• Optimize for engagement at the cost of truth, safety, or clarity.</p>
          </div>
        </details>

        <div className="mt-4 text-sm text-white/70">
          Contact: <span className="text-white">upcubeco@gmail.com</span>
        </div>
      </div>
    </main>
  )
}
