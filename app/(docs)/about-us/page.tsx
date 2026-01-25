import DocsShell from '@/components/docs/docs-shell'

const toc = [
  { id: 'our-mission', label: 'Our mission' },
  { id: 'our-vision', label: 'Our vision' },
  { id: 'what-we-build', label: 'What we build' },
  { id: 'principles', label: 'Principles' },
  { id: 'how-upcube-works', label: 'How Upcube works' },
  { id: 'what-you-can-do', label: 'What you can do' },
  { id: 'impact', label: 'Impact: poverty & charity' },
  { id: 'meaning', label: 'Meaning & spirituality' },
  { id: 'ai-quantum', label: 'AI + Quantum Initiative' },
  { id: 'recent-highlights', label: 'Recent highlights' },
  { id: 'builders', label: 'For builders & partners' },
  { id: 'where-headed', label: "Where we're headed" },
  { id: 'careers', label: 'Careers' },
  { id: 'operate', label: 'How we operate' },
  { id: 'contact', label: 'Contact' },
]

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-6 text-white/80">
        {children}
      </div>
      <div className="my-8 h-px w-full bg-white/10" />
    </section>
  )
}

function CardGrid({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 grid gap-4 md:grid-cols-2">{children}</div>
}

function Card({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-6 text-white/75">{children}</div>
    </div>
  )
}

export default function AboutUsPage() {
  return (
    <DocsShell toc={toc}>
      <div className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">About Upcube</h1>
          <p className="text-sm leading-6 text-white/70">
            Upcube builds practical intelligence tools—chat, search, voice, and
            image workflows—designed to be controllable, inspectable, and useful
            in the real world.
          </p>
        </header>

        <Section id="our-mission" title="Our mission">
          <p>
            Build tools that help people think clearly, ship work faster, and
            stay in control—without turning judgment into a black box.
          </p>
        </Section>

        <Section id="our-vision" title="Our vision">
          <p>
            For humans, by humans. Upcube doesn’t replace people—we expand what
            people can do.
          </p>
          <CardGrid>
            <Card title="Long context">
              Stay in flow across docs, meetings, specs, and complex threads.
            </Card>
            <Card title="Grounded answers">
              Quotes, links, and receipts for claims that matter.
            </Card>
            <Card title="Unified modes">
              Text · Speech · Voice · Images · Video—one coherent loop.
            </Card>
          </CardGrid>
        </Section>

        <Section id="what-we-build" title="What we build">
          <CardGrid>
            <Card title="Chat + text intelligence">
              Assistants that follow instructions, keep state, and produce
              structured outputs you can inspect and edit.
            </Card>
            <Card title="Search (grounded)">
              Grounded answers with citations and links you can verify—no hand
              waving.
            </Card>
            <Card title="Speech + voice">
              Speech-to-text for fast capture and text-to-speech for clear
              narration and accessibility.
            </Card>
            <Card title="Image generation">
              Photorealistic or stylized outputs with presets and aspect control
              for consistent campaigns.
            </Card>
            <Card title="Video workflows">
              Tools to plan, script, summarize, and turn ideas into watchable
              content.
            </Card>
            <Card title="Purpose + momentum tools">
              Systems that turn “I want a better life” into steps you can
              actually take.
            </Card>
          </CardGrid>
        </Section>

        <Section id="principles" title="Our principles (Charter)">
          <CardGrid>
            <Card title="Human agency first">
              AI proposes; humans approve. Outputs stay editable and reviewable.
            </Card>
            <Card title="Safety by design">
              Guardrails for risky requests, staged rollouts, and red-team
              testing.
            </Card>
            <Card title="Privacy + stewardship">
              Least-privilege access. Clear retention/export. Customer data stays
              customer-owned.
            </Card>
            <Card title="Transparency">
              Sources and steps you can inspect. Grounded search over
              unverifiable claims.
            </Card>
            <Card title="Interoperability">
              Clean JSON APIs, webhooks, embeddable widgets, tool calling that
              works with your stack.
            </Card>
            <Card title="Reliability at scale">
              Built for high context and bursty traffic. Observability, quotas,
              fallbacks.
            </Card>
          </CardGrid>
        </Section>

        <Section id="how-upcube-works" title="How Upcube works">
          <ol className="list-inside list-decimal space-y-2">
            <li>Interpret intent and context.</li>
            <li>Decide the next action (answer, ask, search, call a tool).</li>
            <li>Respond while maintaining conversation state.</li>
            <li>Review with human oversight when stakes matter.</li>
          </ol>
        </Section>

        <Section id="what-you-can-do" title="What you can do with Upcube">
          <ul className="list-inside list-disc space-y-2">
            <li>Launch customer chat that resolves issues with clear handoffs.</li>
            <li>Research and draft with citations you can trust.</li>
            <li>Speak hands-free for support, learning, and accessibility.</li>
            <li>Produce on-brand visuals for pages, ads, and socials.</li>
            <li>Turn ideas into video: scripts, summaries, teachable cuts.</li>
            <li>Build momentum: plans that convert purpose into action.</li>
          </ul>
        </Section>

        <Section id="impact" title="Impact: poverty & charity">
          <p>
            A future worth building isn’t one where a few win and everyone else
            is managed. Upcube supports tools that help people show up for each
            other—especially where life is hardest.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Resource navigation with clear next steps.</li>
            <li>Charity coordination: communication, planning, outcomes.</li>
            <li>Community projects with transparency and accountability.</li>
            <li>Contribution paths that work even with limited time/money.</li>
          </ul>
        </Section>

        <Section id="meaning" title="Meaning & spirituality">
          <p>
            Upcube supports reflection and inner strength—not by replacing faith,
            community, or tradition, but by helping people clarify values and
            practice discipline.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
            <strong className="text-white">Boundary:</strong> Upcube doesn’t claim
            spiritual authority. We support reflection and practice; we don’t
            tell anyone what to believe.
          </div>
        </Section>

        <Section id="ai-quantum" title="AI + Quantum Initiative">
          <p>
            We plan long-term work at the frontier of AI and quantum computing—
            not to claim certainty, but to strengthen the search for truth with
            better tools.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Mapping knowledge across disciplines</li>
            <li>Tracking evidence, assumptions, and uncertainty</li>
            <li>Accelerating hypothesis workflows with human judgment central</li>
            <li>Integrating quantum capabilities when practical and reliable</li>
          </ul>
        </Section>

        <Section id="recent-highlights" title="Recent highlights">
          <CardGrid>
            <Card title="Long context">
              Built for deep threads, large docs, and complex projects.
            </Card>
            <Card title="Grounded search">
              Quote-level citations and linkable sources.
            </Card>
            <Card title="Unified modes">
              Text · Speech · Voice · Images · Video in one loop.
            </Card>
            <Card title="RBAC + audit">
              Role-based permissions and history for compliance-ready teams.
            </Card>
          </CardGrid>
        </Section>

        <Section id="builders" title="For builders & partners">
          <div className="flex flex-wrap gap-2 text-xs text-white/70">
            {[
              'APIs: chat, search, voice, images, video tooling',
              'Embeds & widgets',
              'Webhooks & tools',
              'System/role prompts',
              'Safety rules & brand voice locking',
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="pt-2">
            Docs: <span className="text-white/90">/docs</span> · Examples:{' '}
            <span className="text-white/90">/examples</span> · Partner:{' '}
            <span className="text-white/90">/partners</span>
          </p>
        </Section>

        <Section id="where-headed" title="Where we’re headed">
          <p>
            We’re expanding multimodal workflows, strengthening privacy
            controls, and deepening integrations—so Upcube fits naturally into
            systems you already use.
          </p>
          <p className="italic text-white/60">Build the future. Stay human.</p>
        </Section>

        <Section id="careers" title="Careers">
          <p>
            We’re product-driven across engineering, safety, design, and customer
            experience. If you care about clarity, reliability, and human-centered
            tech, we’d love to meet you.
          </p>
          <button className="mt-2 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white hover:bg-white/[0.09]">
            View open roles <span aria-hidden>→</span>
          </button>
        </Section>

        <Section id="operate" title="How we operate">
          <p>
            Ship practical capability with transparent controls. Move quickly,
            review rigorously, improve continuously based on real-world use.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
            <strong className="text-white">Operating belief:</strong> power without
            meaning becomes noise. Power with meaning becomes a future people want
            to live in.
          </div>
        </Section>

        <section id="contact" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <div className="mt-3 text-sm leading-6 text-white/80">
            <div className="font-semibold text-white">Upcube Inc.</div>
            <div>New York, NY 10005, USA</div>
            <div className="underline underline-offset-4">upcubeco@gmail.com</div>
            <div className="mt-3 text-xs text-white/60">
              Media & partnerships: <span className="underline">contact</span> ·
              Support: <span className="underline">support</span>
            </div>
          </div>
        </section>
      </div>
    </DocsShell>
  )
}
