import DocPage from '@/components/doc-page'

export default function PrinciplesPage() {
  return (
    <DocPage
      title="Upcube — Charter"
      metaLeft="Upcube Inc."
      metaRight="Updated: [Month Day, Year] · Headquarters: New York, NY 10005, USA"
      intro="Our Charter describes the principles we use to build, deploy, and improve Upcube. We ship tools people actually use — chat, search, voice, and image generation — with long-context support and a focus on safety, transparency, and control."
      toc={[
        { id: 'mission', label: 'Mission' },
        { id: 'benefits', label: '1) Broadly distributed benefits' },
        { id: 'safety', label: '2) Long-term safety' },
        { id: 'leadership', label: '3) Technical leadership' },
        { id: 'coop', label: '4) Cooperative orientation' },
        { id: 'practice', label: 'What this means in practice' },
        { id: 'pause', label: 'When we will pause' },
        { id: 'north-star', label: 'Our north star' },
        { id: 'contact', label: 'Contact Upcube' },
      ]}
      sections={[
        {
          id: 'mission',
          title: 'Mission',
          body: (
            <p>
              Our mission is to make advanced conversation and content tools available in a way that is safe, transparent, and broadly useful —
              and to stay accountable as capabilities grow.
            </p>
          ),
        },
        {
          id: 'benefits',
          title: '1) Broadly distributed benefits',
          body: (
            <ul>
              <li>Prioritize clarity features (citations, sources, logs, explainability) over engagement-only features.</li>
              <li>Avoid choices that make Upcube an opaque gatekeeper over information.</li>
              <li>Keep our first obligation to the people and organizations relying on Upcube — not short-term gains.</li>
            </ul>
          ),
        },
        {
          id: 'safety',
          title: '2) Long-term safety',
          body: (
            <ul>
              <li>Ship guardrails, rate limits, audit trails, and role-based access as first-class features.</li>
              <li>Favor grounded search and source-linked responses over unverifiable output.</li>
              <li>Treat multi-step / agentic behaviors as higher-risk surfaces and secure them accordingly.</li>
            </ul>
          ),
        },
        {
          id: 'leadership',
          title: '3) Technical leadership',
          body: (
            <ul>
              <li>Advance context length, grounded search, voice latency, and image quality — the surfaces customers actually use.</li>
              <li>Publish practices that help others run safer, more transparent systems.</li>
              <li>Focus on brand-consistent, verifiable, production-grade behavior.</li>
            </ul>
          ),
        },
        {
          id: 'coop',
          title: '4) Cooperative orientation',
          body: (
            <ul>
              <li>Share patterns for tool calling, multi-channel deployment, and auditability where security allows.</li>
              <li>Participate in standardizing disclosures, safety controls, and labeling.</li>
              <li>As systems gain power, share more safety learning and reduce “mystery meat” behavior.</li>
            </ul>
          ),
        },
        {
          id: 'practice',
          title: 'What this means in practice',
          body: (
            <ul>
              <li>Default to explainable outputs (sources, steps taken, actions called).</li>
              <li>Make it possible to turn features off if they don’t fit compliance needs.</li>
              <li>Treat customer data as customer-owned, with clear retention and export options.</li>
              <li>Stage high-risk features behind explicit opt-ins and permissions.</li>
            </ul>
          ),
        },
        {
          id: 'pause',
          title: 'When we will pause',
          body: (
            <>
              <p>If a capability, integration, or agentic behavior would likely:</p>
              <ol>
                <li>Reduce user safety or privacy,</li>
                <li>Enable large-scale misuse, or</li>
                <li>Create unreasonable dependency on a single provider,</li>
              </ol>
              <p>…we will delay or narrow the release until safeguards are in place.</p>
            </>
          ),
        },
        {
          id: 'north-star',
          title: 'Our north star',
          body: (
            <>
              <p>
                Upcube exists to help people understand more, decide faster, and present better — not to replace their judgment.
                This Charter is how we keep the platform open, inspectable, and safe to build on.
              </p>
              <p><strong>Upcube — chat, search, voice, images. Built to ship, governed to last.</strong></p>
            </>
          ),
        },
        {
          id: 'contact',
          title: 'Contact Upcube',
          body: (
            <>
              <p>
                <strong>Upcube Inc.</strong><br />
                New York, NY 10005, USA<br />
                upcubeco@gmail.com
              </p>
              <p className="text-white/70">
                Questions or feedback about this Charter? Email us and include “Charter feedback” in the subject.
              </p>
            </>
          ),
        },
      ]}
    />
  )
}
