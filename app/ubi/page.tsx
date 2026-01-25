// app/ubi/page.tsx
import Link from 'next/link';

type TocItem = { id: string; label: string };

const toc: TocItem[] = [
  { id: 'top', label: 'Overview' },
  { id: 'acknowledge', label: 'Acknowledge the reality (no denial)' },
  { id: 'risks', label: 'Psychological & social risks' },
  { id: 'position', label: "Upcube's position" },
  { id: 'supports', label: 'Practical supports' },
  { id: 'new-work', label: "New forms of 'work'" },
  { id: 'how-upcube-helps', label: 'How Upcube helps' },
  { id: 'messaging', label: 'Messaging strategy' },
  { id: 'roadmap', label: 'Phased roadmap' },
  { id: 'faq', label: 'FAQ' },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function Card({
  title,
  children,
  subtle,
}: {
  title?: string;
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <div
      className={[
        'rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]',
        subtle ? 'bg-white/[0.02]' : '',
      ].join(' ')}
    >
      {title ? <h3 className="text-sm font-semibold text-white">{title}</h3> : null}
      <div className={title ? 'mt-3 text-sm text-white/75' : 'text-sm text-white/75'}>
        {children}
      </div>
    </div>
  );
}

function MiniCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-white/70">{children}</div>
    </div>
  );
}

function SectionHeading({
  id,
  title,
  kicker,
}: {
  id: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      {kicker ? <div className="text-xs uppercase tracking-widest text-white/50">{kicker}</div> : null}
      <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
    </div>
  );
}

function Divider() {
  return <div className="my-10 h-px w-full bg-white/10" />;
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Page container */}
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 lg:px-6">
        {/* Hero */}
        <div id="top" className="scroll-mt-28">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/55">
            <Badge>UBI & purpose</Badge>
            <Badge>No policy advocacy</Badge>
            <Badge>Humans stay in control</Badge>
            <span className="ml-1">Updated: 2025-12-17</span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            AI is changing work. Income may stabilize. Meaning still has to be built.
          </h1>

          <p className="mt-3 max-w-3xl text-sm text-white/70">
            Upcube acknowledges a hard reality: many traditional jobs will be compressed or eliminated by AI faster than
            society is prepared for. This page explains what’s happening, why income-floor programs may expand, and how
            people can stay purposeful and psychologically stable when employment is no longer the main organizing force.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#acknowledge"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              Understand the shift
            </a>
            <a
              href="#how-upcube-helps"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              How Upcube helps
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              FAQ
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70">
            <span className="font-semibold text-white">Important —</span> This is a systems-level guide. It is not legal,
            medical, or financial advice. It does not argue for a specific policy outcome and does not assume UBI will be
            implemented universally or successfully.
          </div>
        </div>

        {/* Layout: TOC + Content */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
          {/* TOC */}
          <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs font-semibold text-white/70">On this page</div>
              <nav className="mt-3 space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block rounded-lg px-2 py-1.5 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-4 h-px bg-white/10" />

              <div className="mt-4 space-y-2 text-sm text-white/65">
                <div className="text-xs font-semibold text-white/70">Quick links</div>
                <Link className="block hover:text-white" href="/our-principles">
                  Our principles
                </Link>
                <Link className="block hover:text-white" href="/vision">
                  Vision
                </Link>
                <Link className="block hover:text-white" href="/how-upcube-works">
                  How Upcube works
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <section className="space-y-10">
            {/* 1) Acknowledge */}
            <SectionHeading id="acknowledge" title="1) Acknowledge the reality (no denial)" />

            <div className="grid gap-4 md:grid-cols-2">
              <Card title="Why AI compresses roles">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <span className="font-semibold text-white">Automation of repeatable cognition:</span> tasks that can
                    be described, templated, or verified become cheaper to produce.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Marginal cost collapse:</span> once a workflow is
                    automated, producing “one more unit” (a draft, report, design, response) trends toward near-zero cost.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Agentic systems:</span> tools increasingly plan and
                    execute multi-step tasks, reducing humans-per-output.
                  </li>
                </ul>
                <p className="mt-3 text-xs text-white/55">
                  This doesn’t mean every job disappears. It means many jobs lose enough tasks that fewer people are
                  needed.
                </p>
              </Card>

              <Card title="Which categories are vulnerable first">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Customer support & ticket handling (triage, routine replies)</li>
                  <li>Back-office ops (data entry, scheduling, reconciliation)</li>
                  <li>Commodity content pipelines (basic copy, summaries, variants)</li>
                  <li>Standard analysis & reporting (first-pass insights, dashboards)</li>
                  <li>Entry-level coding & QA “glue work” (boilerplate, refactors)</li>
                </ul>
                <p className="mt-3 text-xs text-white/55">
                  Roles tied to physical presence, trust, and responsibility tend to shift more slowly (but still change).
                </p>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card title="Why retraining alone isn’t enough at scale" subtle>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <span className="font-semibold text-white">Speed mismatch:</span> displacement can outpace training
                    and job-creation cycles.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Absorption limits:</span> “new jobs” may not exist in
                    comparable volume.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Uneven capacity:</span> not everyone can pivot to
                    high-abstraction work on demand.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Credential drag:</span> institutions move slower than
                    labor disruption.
                  </li>
                </ul>
              </Card>

              <Card title="Why income-floor systems become more likely" subtle>
                <p>
                  When a large share of people face unstable employment or reduced wages, societies experiment with
                  income floors (UBI-like programs, expanded credits, wage supports, or other mechanisms). This is often
                  less about ideology and more about stability: widespread insecurity becomes expensive and destabilizing.
                </p>
                <p className="mt-3 text-xs text-white/55">
                  UBI is not guaranteed. It may be partial, uneven, delayed, or implemented poorly. Planning must assume
                  mixed outcomes.
                </p>
              </Card>
            </div>

            <Divider />

            {/* 2) Risks */}
            <SectionHeading id="risks" title="2) Psychological & social risks of a post-employment world" />

            <div className="grid gap-4 md:grid-cols-3">
              <MiniCard title="Identity loss">
                Work often functions as identity, structure, and belonging. Losing it can feel like losing “who you are.”
              </MiniCard>
              <MiniCard title="Learned helplessness">
                If effort stops feeling connected to outcomes, people disengage. Stability can coexist with stagnation.
              </MiniCard>
              <MiniCard title="Social fragmentation">
                Workplaces are social infrastructure. Removing them increases isolation unless something replaces that
                structure.
              </MiniCard>
              <MiniCard title="Status confusion">
                Status doesn’t disappear when income detaches from labor—it mutates (attention, aesthetics, influence,
                tribe).
              </MiniCard>
              <MiniCard title="Anxiety & resentment">
                Uneven disruption can produce fear, guilt, resentment, and a sense of replaceability.
              </MiniCard>
              <MiniCard title="Nihilism drift">
                Without structure, days blur. People need direction, challenge, and contribution—not just free time.
              </MiniCard>
            </div>

            <p className="text-xs text-white/55">
              Key point: income stability does not automatically create purpose stability.
            </p>

            <Divider />

            {/* 3) Position */}
            <SectionHeading id="position" title="3) Upcube’s position: AI that preserves meaning" />

            <div className="grid gap-4 md:grid-cols-2">
              <Card title="Our philosophy">
                <ul className="list-disc space-y-2 pl-5">
                  <li>AI should remove survival pressure, not erase human relevance.</li>
                  <li>Humans don’t need jobs to have value, but they do need direction, challenge, and contribution.</li>
                  <li>
                    The goal is liberation from coercive labor, not a future of passive consumption.
                  </li>
                </ul>
                <p className="mt-3 text-xs text-white/55">
                  Upcube is built to keep humans in control: tools propose, humans decide.
                </p>
              </Card>

              <Card title="What we reject">
                <ul className="list-disc space-y-2 pl-5">
                  <li>“Humans are obsolete” narratives</li>
                  <li>Tech nihilism (“nothing matters now”)</li>
                  <li>Leisure-only futures as the default social plan</li>
                  <li>Fear-based engagement and hype-based promises</li>
                </ul>
                <p className="mt-3 text-xs text-white/55">
                  We will not minimize fear. We also won’t exploit it.
                </p>
              </Card>
            </div>

            <Divider />

            {/* 4) Supports */}
            <SectionHeading
              id="supports"
              title="4) Practical, non-governmental supports (what Upcube can help enable)"
            />

            <p className="text-sm text-white/70">
              Upcube does not administer UBI and does not replace communities or institutions. Our role is to build
              voluntary tools that help people adapt: structure, learning, creation, service, and long-horizon projects.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <MiniCard title="Purpose mapping">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Values + interests → “tracks”</li>
                  <li>90-day plans with weekly structure</li>
                  <li>Clear, non-judgmental reflection prompts</li>
                </ul>
              </MiniCard>
              <MiniCard title="Skill exploration (without job pressure)">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Short “skill samplers” (2-week sprints)</li>
                  <li>End in a real artifact (project, guide, build)</li>
                  <li>Progress based on evidence, not credentials</li>
                </ul>
              </MiniCard>
              <MiniCard title="Micro-missions + long-arc projects">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Small tasks you can finish and feel proud of</li>
                  <li>Long projects that build identity over months</li>
                  <li>Contribution logs based on artifacts, not likes</li>
                </ul>
              </MiniCard>
              <MiniCard title="Community problem-solving kits">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Local coordination and documentation</li>
                  <li>Volunteer matching and transparency</li>
                  <li>Shared “project rooms” with clear outcomes</li>
                </ul>
              </MiniCard>
              <MiniCard title="Creative & educational tracks">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Teach what you learn</li>
                  <li>Make tools, explainers, and public resources</li>
                  <li>Turn curiosity into a structured practice</li>
                </ul>
              </MiniCard>
              <MiniCard title="Humanitarian & service tracks">
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Support pathways for helping others</li>
                  <li>Community needs → actionable steps</li>
                  <li>Reliability and care as first-class metrics</li>
                </ul>
              </MiniCard>
            </div>

            <Divider />

            {/* 5) New work */}
            <SectionHeading id="new-work" title="5) New forms of “work” without employment" />

            <div className="grid gap-4 md:grid-cols-2">
              <Card title="What replaces the old center">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Contribution over productivity</li>
                  <li>Learning over credentials</li>
                  <li>Creation over consumption</li>
                  <li>Stewardship over extraction</li>
                </ul>
              </Card>
              <Card title="What people need to stay well">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Structure: a week that has shape</li>
                  <li>Challenge: difficulty that grows with skill</li>
                  <li>Belonging: teams, cohorts, local circles</li>
                  <li>Pride: artifacts that prove “I contributed”</li>
                </ul>
              </Card>
            </div>

            <Divider />

            {/* 6) How Upcube helps */}
            <SectionHeading id="how-upcube-helps" title="6) How Upcube AI supports this transition" />

            <div className="grid gap-4 md:grid-cols-2">
              <Card title="What we build">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Guides + companions: tools that coach and amplify, not command</li>
                  <li>Long-term project support: planning, breakdowns, feedback loops</li>
                  <li>Evidence tracking: “what changed?” logs, artifacts, outcomes</li>
                  <li>Community workflows: coordination, documentation, transparency</li>
                </ul>
              </Card>
              <Card title="What we won’t control">
                <ul className="list-disc space-y-2 pl-5">
                  <li>We won’t assign you a “purpose.”</li>
                  <li>We won’t manipulate emotions to maximize engagement.</li>
                  <li>We won’t promise psychological outcomes.</li>
                  <li>We won’t replace your judgment or relationships.</li>
                </ul>
              </Card>
            </div>

            <Divider />

            {/* 7) Messaging strategy */}
            <SectionHeading id="messaging" title="7) Messaging strategy (truth + hope)" />

            <div className="grid gap-4 md:grid-cols-3">
              <MiniCard title="Truth">
                Job disruption is real, uneven, and emotionally heavy. We name it plainly. No denial. No spin.
              </MiniCard>
              <MiniCard title="Calm">
                We avoid timeline prophecy. We talk in scenarios and constraints, not certainty theater.
              </MiniCard>
              <MiniCard title="Earned hope">
                Hope is specific: structure, mastery, contribution, community. Not vague optimism.
              </MiniCard>
            </div>

            <p className="text-xs text-white/55">
              Firm line: humans are not obsolete. Meaning is not optional.
            </p>

            <Divider />

            {/* 8) Roadmap */}
            <SectionHeading id="roadmap" title="8) Phased roadmap" />

            <div className="grid gap-4 md:grid-cols-2">
              <Card title="Phase 1 — Awareness & preparation">
                <ul className="list-disc space-y-2 pl-5">
                  <li><span className="font-semibold text-white">Human risks:</span> panic, misinformation, freeze response</li>
                  <li><span className="font-semibold text-white">Upcube role:</span> grounded education, readiness tools, clear language</li>
                  <li><span className="font-semibold text-white">Boundary:</span> not policy advocacy; no promises</li>
                </ul>
              </Card>
              <Card title="Phase 2 — Transition support tools">
                <ul className="list-disc space-y-2 pl-5">
                  <li><span className="font-semibold text-white">Human risks:</span> identity shock, isolation, short-term instability</li>
                  <li><span className="font-semibold text-white">Upcube role:</span> purpose mapping + short sprints + project companions</li>
                  <li><span className="font-semibold text-white">Boundary:</span> not therapy; no employment guarantees</li>
                </ul>
              </Card>
              <Card title="Phase 3 — Purpose infrastructure">
                <ul className="list-disc space-y-2 pl-5">
                  <li><span className="font-semibold text-white">Human risks:</span> learned helplessness, fragmentation, status resentment</li>
                  <li><span className="font-semibold text-white">Upcube role:</span> contribution tracks + community kits + cohorts (opt-in)</li>
                  <li><span className="font-semibold text-white">Boundary:</span> voluntary participation; privacy-first</li>
                </ul>
              </Card>
              <Card title="Phase 4 — Post-employment support">
                <ul className="list-disc space-y-2 pl-5">
                  <li><span className="font-semibold text-white">Human risks:</span> meaning gap, polarization, “nothing matters” culture</li>
                  <li><span className="font-semibold text-white">Upcube role:</span> mature ecosystem of learning/creation/service paths</li>
                  <li><span className="font-semibold text-white">Boundary:</span> Upcube remains a toolmaker, not a moral authority</li>
                </ul>
              </Card>
            </div>

            <Divider />

            {/* FAQ */}
            <SectionHeading id="faq" title="FAQ" />

            <div className="space-y-3">
              <details className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <summary className="cursor-pointer select-none text-sm font-semibold text-white">
                  Are you saying UBI is guaranteed?
                </summary>
                <div className="mt-3 text-sm text-white/70">
                  No. We’re saying income-floor programs become more likely under certain conditions, but outcomes can be
                  partial, delayed, uneven, or poorly designed. You should plan for mixed scenarios.
                </div>
              </details>

              <details className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <summary className="cursor-pointer select-none text-sm font-semibold text-white">
                  Are humans going to stop working?
                </summary>
                <div className="mt-3 text-sm text-white/70">
                  People won’t stop striving. But “employment” may stop being the dominant structure for identity,
                  belonging, and contribution. The question becomes: what replaces that structure at scale?
                </div>
              </details>

              <details className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <summary className="cursor-pointer select-none text-sm font-semibold text-white">
                  What’s Upcube’s promise here?
                </summary>
                <div className="mt-3 text-sm text-white/70">
                  We build tools that increase agency without replacing judgment. AI proposes, humans decide. We focus on
                  real-world use: structure, learning, creation, service, and outcomes you can point to.
                </div>
              </details>
            </div>

            <div className="pt-6 text-xs text-white/55">Build the future. Stay human.</div>
          </section>
        </div>
      </div>

      {/* Footer spacer / minimal footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-white/55 lg:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Upcube</div>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
