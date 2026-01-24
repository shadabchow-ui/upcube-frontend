import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Research Overview — Upcube",
  description:
    "Upcube Research builds useful, safe, long-context systems with grounded answers, strong evaluations, and reliable deployment.",
}

const focusAreas = [
  {
    title: "Language & Interaction (Upcube-Instruct)",
    points: [
      "Long-context dialogue and structured outputs (JSON/Markdown/LaTeX).",
      "Grounded answers with quote-level citations and uncertainty notes.",
      "Multi-turn state tracking across help, research, and build flows.",
    ],
  },
  {
    title: "Reasoning & Planning (Upcube-Base + Agents)",
    points: [
      "Tool choice and multi-step execution for real tasks.",
      "Program synthesis, code repair, and data pipelines.",
      "Evaluation suites for plan quality, robustness, and cost.",
    ],
  },
  {
    title: "Vision & Image Generation",
    points: [
      "Photorealistic & stylized outputs with subject/style controls.",
      "Brand anchors & captioning for accessibility.",
      "Auditability: prompt/seed/config provenance.",
    ],
  },
  {
    title: "Voice & Audio",
    points: [
      "Low-latency, full-duplex conversations with barge-in.",
      "Expressive synthesis with controllable prosody.",
      "ASR robustness, diarization, and privacy modes.",
    ],
  },
  {
    title: "Safety & Alignment",
    points: [
      "Policy-tuned prompts, refusal calibration, and evals.",
      "Red-teaming for sensitive domains; incident playbooks.",
      "Role-based controls, audit logs, and data governance.",
    ],
  },
  {
    title: "Systems & Efficiency",
    points: [
      "Mixture-of-Experts with ~32B activated parameters for efficiency.",
      "Token-efficient pretraining: stability via optimizer & clipping.",
      "Throughput/latency work on vLLM, TensorRT-LLM, and SGLang.",
    ],
  },
] as const

const methods = [
  {
    title: "Training & Post-training",
    points: [
      "Mixture-of-Experts with routing tuned for stability and cost.",
      "Post-training with preference data and rubric-based feedback.",
      "On-policy rollouts for verifiable rewards (math, coding) and rubric-judged tasks.",
    ],
  },
  {
    title: "Evaluations",
    points: [
      "Knowledge, reasoning, math/STEM, coding, and tool-use suites.",
      "Grounding: citation precision/recall, quote accuracy, coverage.",
      "Safety: refusal calibration, bias audits, privacy leak tests.",
    ],
  },
  {
    title: "Reproducibility & Reporting",
    points: [
      "Seeds, configs, and environment manifests captured per run.",
      "Action logs: tools called, parameters, and evidence paths.",
      "Exportable artifacts: HTML/PDF reports and .yaml pipelines.",
    ],
  },
  {
    title: "Deployment & Systems",
    points: [
      "Inference engines: vLLM, SGLang, KTransformers, TensorRT-LLM.",
      "Latency-first voice paths and streaming JSON outputs.",
      "Multi-channel delivery with RBAC and audit trails.",
    ],
  },
] as const

const highlights = [
  {
    title: "Upcube context upgrade",
    description:
      "New weights unlock 256K context across chat, search, voice, and images—longer threads, larger inputs, clearer answers.",
    cta: { label: "Update", href: "#" },
  },
  {
    title: "Agentic evaluation toolkit",
    description:
      "Benchmarks for tool selection, plan repair, and recovery from API errors—reporting success@k and cost curves.",
    cta: { label: "Toolkit", href: "#" },
  },
  {
    title: "Grounded search improvements",
    description:
      "Better quote attribution, duplicate collapse, and coverage metrics (precision/recall vs. curated corpora).",
    cta: { label: "Methods", href: "#" },
  },
] as const

const streams = [
  {
    title: "Language & Interaction",
    body:
      "Instruction following, structured outputs, long-context dialogue, and grounded generation with citations.",
  },
  {
    title: "Reasoning & Planning",
    body:
      "Tool-using agents, robust planning, program synthesis, and multi-step task execution.",
  },
  {
    title: "Vision & Image",
    body:
      "Image generation and editing with controllable style/subject constraints and provenance.",
  },
  {
    title: "Voice & Audio",
    body:
      "Realtime speech, diarization, low-latency turn-taking, and privacy-preserving pipelines.",
  },
  {
    title: "Safety & Alignment",
    body:
      "Policy calibration, red-team methods, governance, and incident readiness.",
  },
  {
    title: "Systems & Efficiency",
    body:
      "Serving stacks, optimization, cost-aware routing, and reliable deployment patterns.",
  },
] as const

export default function ResearchOverviewPage() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_20%,rgba(255,255,255,0.10),transparent_60%)]" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/70">
              <Sparkles className="h-3.5 w-3.5" />
              Upcube Research
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
              <ShieldCheck className="h-3.5 w-3.5" />
              Safety-first, reviewable systems
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Pioneering research toward useful, safe, long-context systems
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
            We explore models and methods that help people solve real problems: assistants that keep long context,
            cite sources, call tools, speak naturally, and generate on-brand visuals—while staying reviewable and safe.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="h-10 rounded-full bg-white text-black hover:bg-white/90"
            >
              <Link href="#streams">
                View research index <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-10 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="#safety">Learn about safety</Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[
              "256K context",
              "Grounded search & citations",
              "Tool calling & agents",
              "Voice & images",
              "Safety & evaluations",
            ].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="mt-12" aria-label="Focus areas">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-white">Focus areas</h2>
            <p className="mt-2 text-sm text-white/65">
              The streams we publish, evaluate, and ship—optimized for usefulness, reliability, and safety.
            </p>
          </div>
          <div className="hidden text-sm text-white/50 sm:block">
            Built for production, tested like research.
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <Card
              key={area.title}
              className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-white">{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-white/70">
                  {area.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How we do research */}
      <section className="mt-14" aria-label="How we do research">
        <h2 className="text-xl font-semibold tracking-tight text-white">How we do research</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/65">
          We treat safety and reliability as engineering disciplines—measurable, testable, and continuously improved.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {methods.map((m) => (
            <Card
              key={m.title}
              className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-white">{m.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-white/70">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-sm text-white/70">
          <p>
            <span className="text-white">Research perspective:</span> “Safely aligning capable systems is a scientific
            challenge and an engineering discipline. Our aim is practical reliability: assistants that cite sources, ask
            before acting, and make it easy to see what happened and why.”
          </p>
          <p className="mt-3 text-white/50">— Upcube Research Team</p>
        </div>
      </section>

      {/* Streams & artifacts */}
      <section className="mt-14" id="streams" aria-label="Streams and artifacts">
        <h2 className="text-xl font-semibold tracking-tight text-white">Streams & artifacts</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/65">
          Each stream ships repeatable artifacts—benchmarks, example pipelines, incident templates, and reproducible
          writeups.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {streams.map((s) => (
            <details
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
            >
              <summary className="cursor-pointer list-none text-sm font-medium text-white">
                <div className="flex items-center justify-between gap-3">
                  <span>{s.title}</span>
                  <span className="text-white/40 transition group-open:rotate-90">›</span>
                </div>
              </summary>
              <p className="mt-3 text-sm text-white/70">{s.body}</p>
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="h-9 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  Browse artifacts
                </Button>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="mt-14" aria-label="Recent research highlights">
        <h2 className="text-xl font-semibold tracking-tight text-white">Recent research highlights</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {highlights.map((h) => (
            <Card
              key={h.title}
              className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-white">{h.title}</CardTitle>
                <CardDescription className="text-white/65">{h.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  variant="outline"
                  className="h-9 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  {h.cta.label}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Get involved */}
      <section className="mt-14" aria-label="Get involved">
        <h2 className="text-xl font-semibold tracking-tight text-white">Get involved</h2>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">Collaborations</CardTitle>
              <CardDescription className="text-white/65">
                Join evaluations and build the tooling that makes systems safer and easier to audit.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  Research evaluations and red-team exercises.
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  Domain-specific datasets and ground truth building.
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  Tool/plugin ecosystems for agentic tasks.
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="h-9 rounded-full bg-white text-black hover:bg-white/90">
                Propose a collaboration
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">Open materials</CardTitle>
              <CardDescription className="text-white/65">
                Notes, benchmarks, and reproducible examples you can run and verify.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  Research notes, benchmarks, and example pipelines.
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  Reproduction guides and config packs.
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  Safety checklists and incident templates.
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="h-9 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                Browse the index
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-14" aria-label="Contact Upcube Research">
        <h2 className="text-xl font-semibold tracking-tight text-white">Contact Upcube Research</h2>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">Send a note</CardTitle>
              <CardDescription className="text-white/65">
                Share context, goals, and what you want to evaluate or build.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <form className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="space-y-1.5">
                    <span className="text-xs text-white/60">Organization / Lab</span>
                    <input
                      className="h-10 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25"
                      placeholder="Your organization or team"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-xs text-white/60">Work email</span>
                    <input
                      type="email"
                      className="h-10 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25"
                      placeholder="you@domain.com"
                    />
                  </label>
                </div>

                <label className="space-y-1.5">
                  <span className="text-xs text-white/60">Focus area</span>
                  <select className="h-10 w-full rounded-xl border border-white/10 bg-black/30 px-3 text-sm text-white outline-none focus:border-white/25">
                    <option value="">Please select</option>
                    {focusAreas.map((a) => (
                      <option key={a.title} value={a.title}>
                        {a.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="space-y-1.5">
                  <span className="text-xs text-white/60">Proposal or question</span>
                  <textarea
                    className="min-h-[120px] w-full resize-y rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25"
                    placeholder="Share context, goals, and how we can help."
                  />
                </label>

                <div className="flex items-center justify-between gap-4">
                  <Button className="h-10 rounded-full bg-white text-black hover:bg-white/90">
                    Send
                  </Button>
                  <p className="text-xs text-white/50">
                    No spam. We reply to serious requests.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card
            id="safety"
            className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">Where to find us</CardTitle>
              <CardDescription className="text-white/65">
                For safety, privacy, and evaluation requests, include your timeline and deployment context.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 space-y-6">
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-white/50" />
                  <span>New York, NY 10005 · USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-white/50" />
                  <Link
                    href="mailto:upcubeco@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    upcubeco@gmail.com
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">Quick links</h3>
                <ul className="mt-2 space-y-2 text-sm text-white/70">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Safety & evaluations
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Security & privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Trust & transparency
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white/70">
                If you’re reporting an issue, include: reproduction steps, affected endpoints/pages, timestamps, and
                any logs you can share.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
