import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Upcube — Platform Overview",
  description: "Build, deploy, and scale AI products with the Upcube platform.",
}

type Section = { id: string; title: string; content: React.ReactNode }

function Toc({ items }: { items: Section[] }) {
  return (
    <nav className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="text-sm font-semibold text-white/90">On this page</div>
      <ol className="mt-3 space-y-2 text-sm">
        {items.map((s, idx) => (
          <li key={s.id} className="leading-snug">
            <a
              href={`#${s.id}`}
              className="text-white/70 hover:text-white transition"
            >
              {idx + 1}) {s.title}
            </a>
          </li>
        ))}
      </ol>
      <div className="mt-4 border-t border-white/10 pt-3">
        <a
          href="#contact"
          className="text-sm text-white/70 hover:text-white transition"
        >
          Contact Upcube
        </a>
      </div>
    </nav>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
      {children}
    </span>
  )
}

function Card({
  title,
  desc,
  bullets,
  cta,
}: {
  title: string
  desc?: string
  bullets?: string[]
  cta?: { label: string; href: string }
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="text-sm font-semibold text-white">{title}</div>
      {desc ? <p className="mt-2 text-sm text-white/70">{desc}</p> : null}
      {bullets?.length ? (
        <ul className="mt-3 space-y-1 text-sm text-white/70">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      ) : null}
      {cta ? (
        <a
          href={cta.href}
          className="mt-4 inline-flex rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/15 transition"
        >
          {cta.label}
        </a>
      ) : null}
    </div>
  )
}

export default function PlatformOverviewPage() {
  const sections: Section[] = [
    {
      id: "overview",
      title: "Platform overview",
      content: (
        <>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="text-xs text-white/60">Platform Overview</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Build leading AI products on the Upcube Platform
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Ship production-ready experiences across chat, search, image generation,
              and video generation. Upcube’s long-context models deliver grounded
              answers, multimodal creation, and safe tool use — with enterprise controls.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>256k context</Pill>
              <Pill>Grounded search + citations</Pill>
              <Pill>Tool calling + webhooks</Pill>
              <Pill>Voice, image, video</Pill>
              <Pill>RBAC + audit logs</Pill>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#get-started"
                className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 transition"
              >
                Start building
              </a>
              <a
                href="#contact"
                className="inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10 transition"
              >
                Contact sales
              </a>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            <strong className="text-white">Update (09:05)</strong> — We shipped upgraded
            weights enabling 256k context across chat, search, image, and video. Longer
            inputs, clearer answers, richer outputs.
          </div>
        </>
      ),
    },
    {
      id: "models",
      title: "Powered by our frontier models",
      content: (
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card
            title="Upcube — Instructor"
            desc="Drop-in assistant for chat, search, voice, images, and agentic tool use."
            bullets={[
              "MoE: ~32B activated (~1T total)",
              "Context: 256k tokens",
              "Max output: up to 64k tokens",
              "Strengths: grounded QA, multi-step workflows, code & math",
            ]}
            cta={{ label: "Use in API", href: "#get-started" }}
          />
          <Card
            title="Upcube — Base"
            desc="Foundation for custom fine-tunes, domain guardrails, and private deployments."
            bullets={[
              "MoE: ~32B activated (~1T total)",
              "Context: 256k tokens",
              "Tuning: SFT, DPO, adapters",
              "Deploy: vLLM + SG-Lang + TensorRT-LLM",
            ]}
            cta={{ label: "Fine-tune", href: "#get-started" }}
          />
          <Card
            title="Upcube — Mini"
            desc="Low-latency for edge & high-traffic endpoints; distilled behaviors."
            bullets={[
              "Params: compact (distilled)",
              "Context: 64–128k",
              "Best for: autosuggest, RAG rerank, routing",
              "Cost-efficient + fast",
            ]}
            cta={{ label: "Deploy at scale", href: "#enterprise" }}
          />
        </div>
      ),
    },
    {
      id: "workflows",
      title: "Start working with Upcube",
      content: (
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card
            title="Prompting guidance"
            desc="Patterns for long context, grounded search, and tool graphs."
          />
          <Card
            title="Front-end examples"
            desc="Chat, search, image & video widgets with clean UX."
          />
          <Card
            title="Migration support"
            desc="Swap providers without rewriting your stack."
          />
        </div>
      ),
    },
    {
      id: "experiences",
      title: "Bring AI experiences to life",
      content: (
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card
            title="Chatbot"
            bullets={[
              "256k memory for long threads",
              "Structured outputs (JSON/Markdown/Code)",
              "Tool calling for real work",
            ]}
          />
          <Card
            title="AI Search"
            bullets={[
              "Blend your KB + web",
              "Quote-level citations",
              "Uncertainty call-outs when sources conflict",
            ]}
          />
          <Card
            title="Image Generation"
            bullets={[
              "Photoreal + stylized presets",
              "Aspect/style controls",
              "Brand anchors, prompt/seed/config logs",
            ]}
          />
          <Card
            title="Video Generation"
            bullets={[
              "Storyboard → clip or text-to-video",
              "Timing, aspect, motion & camera cues",
              "Safety rails + disclosure prompts",
            ]}
          />
        </div>
      ),
    },
    {
      id: "use-cases",
      title: "Use cases powered by our platform",
      content: (
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card
            title="Coding"
            desc="Write, review, debug, refactor, and migrate code with tool access."
          />
          <Card
            title="Customer Support"
            desc="Automation + guided triage, with human handoff and full context."
          />
          <Card
            title="Personalized Recommendations"
            desc="Ground in inventory + behavior to boost engagement and LTV."
          />
          <Card
            title="Research & Data Analysis"
            desc="From messy data to findings—plots, stats, and exportable reports."
          />
          <Card
            title="Content Generation"
            desc="On-brand text, images, and videos for pages, ads, and campaigns."
          />
          <Card
            title="Education"
            desc="Lesson planning, tutoring, grading helpers—with RBAC and audit logs."
          />
        </div>
      ),
    },
    {
      id: "enterprise",
      title: "Enterprise-grade features to operate at scale",
      content: (
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card
            title="Security & data privacy"
            bullets={[
              "No training on your data by default",
              "Zero data retention mode (by request)",
              "Data residency controls",
              "SOC2 Type II-aligned controls",
              "IP allowlists, mTLS, SSO & MFA",
              "Encryption at rest (AES-256) + in transit (TLS 1.2+)",
            ]}
          />
          <Card
            title="Administrative controls"
            bullets={[
              "RBAC for tools, models, projects",
              "Billing & usage alerts; granular cost views",
              "Project-scoped keys; environment separation",
              "Audit logs and incident history",
            ]}
          />
          <Card
            title="Access to expertise"
            bullets={[
              "Dedicated account team + prioritized support",
              "Solution architecture & deployment guidance",
              "Opportunities for research collaboration",
            ]}
          />
          <Card
            title="Compliance support"
            bullets={[
              "Support for BAAs (eligible cases)",
              "Product compliance features + audit trails",
              "Data-processing addenda as needed",
            ]}
          />
        </div>
      ),
    },
    {
      id: "builders",
      title: "For builders",
      content: (
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card
            title="APIs"
            bullets={[
              "Chat, AI Search, Image, Video (JSON over HTTPS)",
              "Streaming tokens + streaming JSON",
              "Function schemas + tool calling",
            ]}
          />
          <Card
            title="Embeds"
            bullets={[
              "Drop-in widgets for chat, search, image, video",
              "Themeable, accessible, SSR-friendly",
            ]}
          />
          <Card
            title="Actions"
            bullets={[
              "Webhooks & connectors (files, DBs, dashboards)",
              "Role/system prompts to lock tone & safety rules",
            ]}
          />
        </div>
      ),
    },
    {
      id: "get-started",
      title: "Get started",
      content: (
        <div className="mt-2 rounded-2xl border border-white/10 bg-black/30 p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-white">Partner with us on your AI strategy</div>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• AI advisors to solve complex challenges.</li>
                <li>• Hands-on deployment guidance.</li>
                <li>• Priority processing & pricing options.</li>
              </ul>
              <a
                href="#contact"
                className="mt-4 inline-flex rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition"
              >
                Contact sales
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Build on your own</div>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Access Upcube models & APIs.</li>
                <li>• Quick-start templates & example apps.</li>
                <li>• Migration guides from other providers.</li>
              </ul>
              <a
                href="#builders"
                className="mt-4 inline-flex rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-white/90 transition"
              >
                Start building
              </a>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Upcube — Platform Overview
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-white/60">
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
            Upcube Platform
          </span>
          <span className="text-white/30">•</span>
          <span>Build, deploy, and scale AI products</span>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          A single platform for chat, search, image, and video — with grounded outputs,
          tool calling, and enterprise controls.
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
        <div className="lg:sticky lg:top-6 lg:self-start">
          <Toc items={sections} />
        </div>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="prose prose-invert max-w-none prose-p:text-white/70 prose-li:text-white/70 prose-strong:text-white prose-headings:text-white">
            {sections.map((s, idx) => (
              <section key={s.id} id={s.id} className={idx === 0 ? "" : "mt-10"}>
                <h2 className="text-lg font-semibold">
                  {idx + 1}) {s.title}
                </h2>
                <div className="mt-2">{s.content}</div>
              </section>
            ))}

            <section id="contact" className="mt-12">
              <h2 className="text-lg font-semibold">Contact Upcube</h2>
              <div className="mt-2 text-sm text-white/70">
                <div className="font-medium text-white">Upcube Inc.</div>
                <div>New York, NY 10005, USA</div>
                <div className="mt-2">
                  Email:{" "}
                  <a
                    className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/70"
                    href="mailto:upcubecc@gmail.com"
                  >
                    upcubecc@gmail.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  )
}
