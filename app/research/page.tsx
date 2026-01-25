// app/research/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research — Upcube',
  description:
    'Upcube Research Engine — grounded briefs, evidence maps, and decision support with citations and guardrails.',
}

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-10 pb-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.55)]">
          <div className="flex flex-wrap gap-2 text-xs text-white/70">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">Research</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">Citations</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">Evidence maps</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">Decision support</span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Upcube Research Engine
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70">
            When decisions matter, “vibes” aren’t enough. Upcube turns messy inputs into grounded,
            citeable outputs: briefs, competitive comparisons, evidence maps, and stakeholder-ready
            narratives—without pretending uncertainty doesn’t exist.
          </p>

          {/* “Tabs” as anchored pills (no client JS) */}
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href="#offerings"
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
              aria-current="page"
            >
              Offerings
            </a>
            <a
              href="#workflow"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06]"
            >
              Research workflow
            </a>
            <a
              href="#standards"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06]"
            >
              Standards & guardrails
            </a>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/75">
            <span className="font-medium text-white">Position:</span> Upcube is a research-to-action layer:
            clarify the question → gather evidence → synthesize tradeoffs → ship a decision artifact. Not
            “one prompt = truth.” Real workflows with accountability.
          </div>
        </div>

        {/* Snapshot */}
        <h2 className="mt-10 text-xl font-semibold tracking-tight">Snapshot</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-medium">Research briefs</div>
            <div className="mt-1 text-sm text-white/70">Grounded summaries with citations.</div>
            <div className="mt-3 inline-flex rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
              Question • Evidence • Takeaways
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-medium">Competitive intel</div>
            <div className="mt-1 text-sm text-white/70">Comparisons and capability maps.</div>
            <div className="mt-3 inline-flex rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
              Alternatives • Gaps • Differentiators
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-medium">Decision memos</div>
            <div className="mt-1 text-sm text-white/70">Tradeoffs, assumptions, and risks.</div>
            <div className="mt-3 inline-flex rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
              Options • Risks • Recommendation
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-medium">Evidence maps</div>
            <div className="mt-1 text-sm text-white/70">What’s known, unknown, disputed.</div>
            <div className="mt-3 inline-flex rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
              Known • Unknown • Disputed
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="mx-auto w-full max-w-6xl px-4 pb-10">
        <h2 className="text-xl font-semibold tracking-tight">Offerings</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/70">
          Start with a single deliverable (a brief, a comparison, an evidence map), then expand into a
          repeatable research pipeline with review gates and clear provenance.
        </p>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-medium">1) Grounded research briefs</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Source-backed summaries with citation links</li>
              <li>• Key claims + supporting evidence + confidence notes</li>
              <li>• Stakeholder-ready “what changed” updates</li>
              <li>• Assumptions stated (no hidden leaps)</li>
            </ul>

            <details className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <summary className="cursor-pointer text-sm text-white/80">
                Example: “brief pack” output
              </summary>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <div>• One-page brief (exec summary + key claims)</div>
                <div>• Appendix: citations + quotes + links</div>
                <div>• Risk notes: what would change the conclusion</div>
              </div>
            </details>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-medium">2) Competitive comparisons</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Feature/capability matrices with traceable sources</li>
              <li>• Market maps and positioning narratives</li>
              <li>• “Switching costs” + integration considerations</li>
              <li>• Differentiation: what’s real vs marketing</li>
            </ul>

            <details className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <summary className="cursor-pointer text-sm text-white/80">
                Example: “comparison pack” output
              </summary>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <div>• 1-page scorecard + narrative</div>
                <div>• Capability table + links</div>
                <div>• “So what?” recommendations by persona</div>
              </div>
            </details>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-medium">3) Decision support</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Decision memos with options and tradeoffs</li>
              <li>• Risk framing and pre-mortems</li>
              <li>• Metrics definitions and measurement plans</li>
              <li>• Follow-up questions that de-risk the next step</li>
            </ul>

            <details className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <summary className="cursor-pointer text-sm text-white/80">
                Example: “decision memo” output
              </summary>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <div>• Context + constraints</div>
                <div>• Options table (pros/cons + costs)</div>
                <div>• Recommendation + assumptions</div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="mx-auto w-full max-w-6xl px-4 pb-10">
        <h2 className="text-xl font-semibold tracking-tight">The research workflow (question → evidence → artifact)</h2>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-medium">Phase 1 — Define the question</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• What decision is this supporting?</li>
              <li>• What constraints matter (time, cost, policy, safety)?</li>
              <li>• What would “good evidence” look like?</li>
              <li>• What are the known unknowns?</li>
            </ul>
            <div className="mt-3 text-xs text-white/60">
              A fuzzy question creates a fake-precise answer. Start sharp.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-medium">Phase 2 — Gather sources</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Primary sources first (docs, specs, filings, studies)</li>
              <li>• Cross-check claims across independent sources</li>
              <li>• Track citations and direct quotes</li>
              <li>• Mark contradictions instead of hiding them</li>
            </ul>
            <div className="mt-3 text-xs text-white/60">
              If it can’t be traced, it doesn’t ship.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-medium">Phase 3 — Synthesize and stress-test</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Pull out decision-relevant facts (not trivia)</li>
              <li>• Label confidence and uncertainty</li>
              <li>• Write counterarguments and failure modes</li>
              <li>• Separate “what’s true” from “what we assume”</li>
            </ul>
            <div className="mt-3 text-xs text-white/60">
              Don’t optimize for certainty. Optimize for correctness.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-medium">Phase 4 — Ship the artifact</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Briefs, memos, decks, FAQs, or internal docs</li>
              <li>• “What changed” update notes for new evidence</li>
              <li>• Next-step questions and experiment plans</li>
              <li>• Ownership: humans approve and publish</li>
            </ul>
            <div className="mt-3 text-xs text-white/60">
              Research that doesn’t land in a usable artifact is a hobby.
            </div>
          </div>
        </div>

        <details className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
          <summary className="cursor-pointer text-sm text-white/80">
            Example: “evidence map” export
          </summary>
          <div className="mt-3 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <div className="font-medium text-white/85">Known</div>
              <div className="mt-1">Claims with strong, consistent sources.</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <div className="font-medium text-white/85">Unknown</div>
              <div className="mt-1">Missing data or unclear measurement.</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <div className="font-medium text-white/85">Disputed</div>
              <div className="mt-1">Conflicting sources or interpretations.</div>
            </div>
          </div>
        </details>
      </section>

      {/* Standards */}
      <section id="standards" className="mx-auto w-full max-w-6xl px-4 pb-14">
        <h2 className="text-xl font-semibold tracking-tight">Standards & guardrails</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/70">
          Upcube supports speed, but it also supports responsibility. Research output is only valuable if
          it is traceable, reviewable, and honest about uncertainty.
        </p>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-medium">Citations by default</div>
            <div className="mt-2 text-sm text-white/70">
              Claims link back to sources or quotes. No “trust me” outputs.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-medium">Uncertainty labels</div>
            <div className="mt-2 text-sm text-white/70">
              Confidence is explicit. Unknowns and disputes are surfaced, not buried.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-medium">Human ownership</div>
            <div className="mt-2 text-sm text-white/70">
              Humans approve production-impacting conclusions and publish the final artifact.
            </div>
          </div>
        </div>

        <details className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
          <summary className="cursor-pointer text-sm text-white/80">What Upcube will not do</summary>
          <div className="mt-3 space-y-2 text-sm text-white/70">
            <div>• Fabricate sources, quotes, or citations.</div>
            <div>• Hide assumptions or present speculation as fact.</div>
            <div>• “Certainty theater” when the evidence is mixed or missing.</div>
            <div>• Replace accountable decision-makers with automated conclusions.</div>
          </div>
        </details>

        <div className="mt-6 text-sm text-white/70">
          Contact: <span className="text-white/85">upcubeai@gmail.com</span>
        </div>
      </section>
    </main>
  )
}
