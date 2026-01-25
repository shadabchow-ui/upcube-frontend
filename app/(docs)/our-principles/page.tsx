import DocsShell from '@/components/docs/docs-shell'

const toc = [
  { id: 'mission', label: 'Mission' },
  { id: 'benefits', label: '1) Broadly distributed benefits' },
  { id: 'safety', label: '2) Long-term safety' },
  { id: 'leadership', label: '3) Technical leadership' },
  { id: 'cooperative', label: '4) Cooperative orientation' },
  { id: 'practice', label: 'What this means in practice' },
  { id: 'pause', label: 'When we will pause' },
  { id: 'north-star', label: 'Our north star' },
  { id: 'contact', label: 'Contact Upcube' },
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

export default function OurPrinciplesPage() {
  return (
    <DocsShell toc={toc}>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Upcube — Charter</h1>
        <div className="text-xs text-white/60">
          Upcube Inc. · Updated: [Month Day, Year] · Headquarters: New York, NY
          10005, USA
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
          Our Charter describes the principles we use to build, deploy, and
          improve Upcube. It reflects feedback from teams, customers, and
          partners. We ship tools people actually use—chat, search, voice, and
          image generation—with long-context support and a focus on safety,
          transparency, and control.
        </div>
      </header>

      <div className="mt-8">
        <Section id="mission" title="Mission">
          <p>
            Our mission is to make advanced conversation and content tools—
            chatbot, search, voice, and image generation—available in a way that
            is safe, transparent, and broadly useful.
          </p>
        </Section>

        <Section id="benefits" title="1) Broadly distributed benefits">
          <p>
            We use any influence we gain over deployment to favor wide access,
            practical usefulness, and fair outcomes—avoiding uses that cause
            harm, concentrate control, or erode trust.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Prioritize clarity features (citations, logs, explainability).</li>
            <li>Avoid opaque gatekeeping over information.</li>
            <li>Keep obligations to real users ahead of short-term gains.</li>
          </ul>
        </Section>

        <Section id="safety" title="2) Long-term safety">
          <p>
            We commit to the technical and product work required to keep
            high-context systems reliable, reviewable, and abuse-resistant.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Ship guardrails, rate limits, audit trails, and RBAC.</li>
            <li>Favor grounded responses over unverifiable output.</li>
            <li>
              Treat multi-step tool behaviors as higher-risk and secure them
              accordingly.
            </li>
          </ul>
        </Section>

        <Section id="leadership" title="3) Technical leadership">
          <p>
            To be credible on safety, we must remain competent on capability.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Advance context length, grounded search, voice latency, and image
              quality—the surfaces customers actually use.
            </li>
            <li>
              Publish practices that help others run safer, more transparent
              systems (controls, logging, escalation).
            </li>
            <li>
              Focus on long-context chat, verifiable search, natural voice, and
              brand-consistent generation.
            </li>
          </ul>
          <p className="text-white/70">
            Policy, safety, and product guidance are necessary—but we also
            demonstrate working, production-grade systems.
          </p>
        </Section>

        <Section id="cooperative" title="4) Cooperative orientation">
          <p>
            We cooperate with teams, vendors, and policy groups to make
            conversational technology safer and more understandable.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Share patterns for tool calling, auditability, deployment.</li>
            <li>Participate in standards for disclosure and safety controls.</li>
            <li>
              As systems gain power, share more reliability learnings and fewer
              brittle internal details that put customers at risk.
            </li>
          </ul>
          <p className="text-white/70">
            Our goal is a wider ecosystem of trustworthy, controllable assistants—
            not a single point of control.
          </p>
        </Section>

        <Section id="practice" title="What this means in practice">
          <ul className="list-inside list-disc space-y-2">
            <li>
              Default to explainable outputs (sources, steps taken, actions
              called).
            </li>
            <li>
              Make it possible to turn features off if they don’t fit compliance.
            </li>
            <li>
              Treat customer data as customer-owned, with clear retention/export.
            </li>
            <li>
              Stage higher-risk features behind explicit opt-ins and permissions.
            </li>
          </ul>
        </Section>

        <Section id="pause" title="When we will pause">
          <p>If a capability, integration, or agentic behavior would likely:</p>
          <ol className="list-inside list-decimal space-y-2">
            <li>Reduce user safety or privacy,</li>
            <li>Enable large-scale misuse, or</li>
            <li>Create unreasonable dependency on a single provider,</li>
          </ol>
          <p>…we will delay or narrow the release until safeguards are in place.</p>
        </Section>

        <Section id="north-star" title="Our north star">
          <p>
            Upcube exists to help people understand more, decide faster, and
            present better—not replace their judgment. As capabilities grow, this
            Charter is how we keep the platform open, inspectable, and safe to
            build on.
          </p>
          <p className="font-semibold text-white">
            Upcube — chat, search, voice, images. Built to ship, governed to last.
          </p>
        </Section>

        <section id="contact" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Contact Upcube</h2>
          <div className="mt-3 text-sm leading-6 text-white/80">
            <div className="font-semibold text-white">Upcube Inc.</div>
            <div>New York, NY 10005, USA</div>
            <div className="underline underline-offset-4">upcubeco@gmail.com</div>
            <div className="mt-3 text-xs text-white/60">
              Questions or feedback about this Charter? Email and include “Charter
              feedback” in the subject.
            </div>
          </div>
        </section>
      </div>
    </DocsShell>
  )
}
