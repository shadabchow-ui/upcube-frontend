// app/how-upcube-works/page.tsx
import LongformLayout from "@/components/longform/longform-layout";

export const metadata = {
  title: "How Upcube Works | Upcube",
  description:
    "How Upcube Works — governed workflows, human-in-the-loop, and measurable outcomes.",
};

const toc = [
  { id: "core-principle", label: "The core principle" },
  { id: "intention-to-action", label: "From intention to action" },
  { id: "multimodal-connected", label: "Multimodal, connected" },
  { id: "human-in-the-loop", label: "Human-in-the-loop" },
  { id: "safety-boundaries", label: "Safety and boundaries" },
  { id: "measurement-outcomes", label: "Measurement and outcomes" },
  { id: "privacy-control", label: "Privacy & control" },
];

const chips = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Impact", href: "/impact" },
  { label: "Meaning", href: "/meaning" },
  { label: "Safety", href: "/safety" },
];

export default function Page() {
  return (
    <LongformLayout
      title="How Upcube Works"
      badge="Upcube.ai"
      meta={[
        { label: "Updated", value: "2025-12-17" },
        { label: "Note", value: "Humans stay in control" },
      ]}
      summary="Upcube is built around one promise: AI proposes, humans decide. We design for real-world use — governed workflows, safety boundaries, and measurable outcomes."
      chips={chips}
      toc={toc}
    >
      <section id="core-principle" className="scroll-mt-28">
        <h2 className="text-xl font-semibold tracking-tight">The core principle</h2>
        <p className="mt-3 text-sm leading-6 text-white/80">
          Upcube is not built to make people irrelevant. It’s built to make people more capable.
          AI can generate options, drafts, plans, and outputs at scale — but the outcomes that
          matter still require human responsibility: values, judgment, and accountability.
        </p>
        <p className="mt-3 text-sm leading-6 text-white/80">
          So we design Upcube around a simple rule: AI can help you move faster, but it should
          never remove your agency.
        </p>
      </section>

      <section id="intention-to-action" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-semibold tracking-tight">From intention to action</h2>
        <p className="mt-3 text-sm leading-6 text-white/80">
          The point isn’t output. The point is what you do next. Most tools stop at generating content.
          Upcube is built to help you move through the full cycle:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-white/80">
          <li>
            <span className="font-semibold text-white">Intent:</span> what you’re trying to build,
            learn, or solve
          </li>
          <li>
            <span className="font-semibold text-white">Clarity:</span> turning confusion into structure
          </li>
          <li>
            <span className="font-semibold text-white">Plan:</span> steps that can actually be followed
          </li>
          <li>
            <span className="font-semibold text-white">Execution:</span> outputs, iterations, and finishing
          </li>
          <li>
            <span className="font-semibold text-white">Reflection:</span> learning from results and improving
          </li>
        </ul>
        <p className="mt-4 text-sm leading-6 text-white/80">
          In a world with more freedom, the ability to create direction is everything. Upcube is built to
          strengthen that ability.
        </p>
      </section>

      <section id="multimodal-connected" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-semibold tracking-tight">Multimodal, connected</h2>
        <p className="mt-3 text-sm leading-6 text-white/80">
          Human life isn’t single-format. We speak, we write, we see, we teach, we record, we share.
          Upcube connects text, voice, image, and video so your work doesn’t get trapped in one tool or one format.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm font-semibold text-white">Idea → Plan</p>
            <p className="mt-1 text-sm text-white/75">
              Speak your idea, convert it to text, then turn it into a structured plan with milestones.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm font-semibold text-white">Plan → Teaching</p>
            <p className="mt-1 text-sm text-white/75">
              Turn a lesson outline into voice narration, visuals, and a video structure without losing clarity.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm font-semibold text-white">Research → Output</p>
            <p className="mt-1 text-sm text-white/75">
              Summarize sources, draft content, and generate supporting diagrams or visuals as one connected workflow.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm font-semibold text-white">Community → Impact</p>
            <p className="mt-1 text-sm text-white/75">
              Turn a community need into clear steps, communication, and coordination — then track outcomes.
            </p>
          </div>
        </div>
      </section>

      <section id="human-in-the-loop" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-semibold tracking-tight">Human-in-the-loop</h2>
        <p className="mt-2 text-xs text-white/60">Oversight is not an add-on. It’s the design.</p>

        <p className="mt-3 text-sm leading-6 text-white/80">
          Upcube is built so people can review, refine, and approve what matters — especially when stakes are real.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-white/80">
          <li>
            <span className="font-semibold text-white">Reviewable outputs:</span> you can edit, correct,
            and own the final result
          </li>
          <li>
            <span className="font-semibold text-white">Clear assumptions:</span> outputs shouldn’t hide what they depend on
          </li>
          <li>
            <span className="font-semibold text-white">Simple escalation:</span> when confidence is low, Upcube slows down — not pretend
          </li>
          <li>
            <span className="font-semibold text-white">Accountability:</span> humans remain responsible for decisions and impact
          </li>
        </ul>
      </section>

      <section id="safety-boundaries" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-semibold tracking-tight">Safety and boundaries</h2>
        <p className="mt-3 text-sm leading-6 text-white/80">
          Power without boundaries becomes noise at best, harm at worst. Upcube is built to support real people
          in real life — so we take safety seriously and avoid pretending certainty where it doesn’t exist.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-white/80">
          <li>
            <span className="font-semibold text-white">Honesty about uncertainty:</span> we don’t claim final answers
          </li>
          <li>
            <span className="font-semibold text-white">Respect for meaning:</span> we support reflection without claiming authority
          </li>
          <li>
            <span className="font-semibold text-white">Designed for real-world use:</span> stability, not shock value
          </li>
          <li>
            <span className="font-semibold text-white">Responsible workflows:</span> tools that encourage clarity, not addiction
          </li>
        </ul>

        <p className="mt-4 text-xs text-white/60 italic">
          If it isn’t safe to use in real life, it isn’t finished.
        </p>
      </section>

      <section id="measurement-outcomes" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-semibold tracking-tight">Measurement and outcomes</h2>
        <p className="mt-3 text-sm leading-6 text-white/80">
          Value should be provable after deployment. Upcube is built to emphasize results, not promises — that means
          supporting measurement over time:
        </p>

        <ul className="mt-4 space-y-2 text-sm text-white/80">
          <li>Progress tracking (plans completed, projects shipped)</li>
          <li>Learning outcomes (what you understand now vs before)</li>
          <li>Impact outcomes (help delivered, needs met, time saved)</li>
          <li>Clarity outcomes (decisions made with more confidence and less confusion)</li>
        </ul>

        <p className="mt-4 text-sm leading-6 text-white/80">
          In the future, trust will belong to systems that can show what they change in the real world.
          Upcube is built for that future.
        </p>
      </section>

      <section id="privacy-control" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-semibold tracking-tight">Privacy and control</h2>
        <p className="mt-3 text-sm leading-6 text-white/80">
          People can’t build a meaningful life inside a tool they don’t trust. Upcube is built with a long-term
          commitment to user control, clarity around data use, and choices that respect the human behind the account.
        </p>

        <p className="mt-6 text-xs text-white/60 italic">Build the future. Stay human.</p>
      </section>
    </LongformLayout>
  );
}
