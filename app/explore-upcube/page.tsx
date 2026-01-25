// app/explore-upcube/page.tsx

const quickStarts = [
  "How come orange juice prices have dropped?",
  "Give me ideas for what to do with my kids' art",
  "Help me study vocabulary for a college entrance exam",
  "How are oil prices impacting global energy markets?",
  "Test my knowledge on ancient civilizations",
  "Write a text asking a friend to be my plus-one at a wedding",
  "Looking for an eco-friendly yoga mat that won't slip",
  "Champions League top scorers and match highlights",
  "I want a noise-canceling headset for long flights",
  "Help me pick an outfit that will look good on camera",
  "Write an email to request a quote from local plumbers",
  "Cycling groups open to beginners",
  "Write a Python script to automate sending daily email reports",
  "What's going on with the asteroid sample NASA brought back?",
  "Create a morning routine to boost my productivity",
  'Plan a "mental health day" to help me relax',
  "Design a programming game to teach basics in a fun way",
  "NBA draft prospects and scouting report",
  "Explain nostalgia to a kindergartener",
  "Plan a trip to experience Seoul like a local",
  "Create a content calendar for a TikTok account",
  "Latest EU inflation data and economic forecast",
  "Make a sandwich using ingredients from my kitchen",
  "Good brunch spots near me with outdoor seating",
]

const capabilities = [
  {
    title: "Type or talk",
    desc: "Real-time voice on mobile and desktop. Interrupt naturally, get clear replies.",
  },
  {
    title: "Search the web",
    desc: "Get timely answers with sources you can verify.",
  },
  {
    title: "Canvas for collaboration",
    desc: "Write and edit together for documents, code, and designs — with version history.",
  },
  {
    title: "Analyze data & chart",
    desc: "Upload files and ask questions. Tables, summaries, and charts on demand.",
  },
  {
    title: "Talk about images",
    desc: "Snap or upload an image and ask for explanations, ideas, or fixes.",
  },
  {
    title: "Offload tasks with an agent",
    desc: "Research, plan, and act on the web for you — with receipts.",
  },
  {
    title: "Create images",
    desc: "Generate photorealistic or stylized visuals from a sentence or a brief.",
  },
  {
    title: "Create videos",
    desc: "Turn scripts and storyboards into short clips. Control timing, motion, and style.",
  },
  {
    title: "Integrations",
    desc: "Works across web, iOS, Android — and connects to your favorite tools.",
  },
]

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "",
    headline: "Intelligence for everyday tasks",
    bullets: [
      "Advanced reasoning on core tasks",
      "Limited messages & uploads",
      "Limited & slower image generation",
      "Limited deep research",
      "Limited memory & context",
    ],
    cta: "Get Free",
    subtle: "Have an existing plan? See billing help.",
  },
  {
    name: "Plus",
    price: "$20",
    cadence: "per month",
    headline: "More access to advanced intelligence",
    bullets: [
      "Advanced reasoning",
      "Expanded messages & uploads",
      "Faster image creation",
      "Expanded deep research & agent mode",
      "Expanded memory & context",
      "Projects, tasks & custom GPTs",
      "Limited access to video generation",
      "Codex coding agent",
    ],
    cta: "Get Plus",
    subtle: "Limits apply.",
  },
  {
    name: "Pro",
    price: "$200",
    cadence: "per month",
    headline: "Full access to the best of Upcube",
    bullets: [
      "Pro reasoning",
      "Unlimited messages & uploads (subject to abuse guardrails)",
      "Unlimited & faster image creation",
      "Maximum deep research & agent mode",
      "Maximum memory & context",
      "Expanded projects, tasks & custom GPTs",
      "Extended video generation access",
      "Expanded Codex agent",
      "Research preview of new features",
    ],
    cta: "Get Pro",
    subtle: "",
  },
]

function Card({
  title,
  desc,
  children,
}: {
  title?: string
  desc?: string
  children?: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
      {title ? <div className="text-base font-semibold text-white">{title}</div> : null}
      {desc ? <p className="mt-2 text-sm leading-6 text-white/70">{desc}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  )
}

export default function ExploreUpcubePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* subtle background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(900px 500px at 20% 10%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(255,255,255,0.06), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14">
        {/* HERO */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Upcube
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Now with our newest model
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Get answers. Find inspiration. Be more productive.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
            Upcube brings writing, search, coding, data analysis, voice, images, and video into one
            long-context workspace. Built for everyday work — fast thinking, grounded results, and
            richer outputs.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://chat.upcube.ai/"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              Start now
            </a>
            <a
              href="#model"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Learn about our model
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["256K context", "Grounded web search", "Voice • Images • Video", "Agents & actions"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        {/* QUICK STARTS */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold">Try these to get started</h2>
            <span className="text-xs text-white/50">Pick one and run with it.</span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {quickStarts.map((q) => (
              <a
                key={q}
                href="https://chat.upcube.ai/"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/80 hover:bg-white/[0.06]"
                title="Open chat"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="leading-6">{q}</span>
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 group-hover:text-white">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold">Explore more features in Upcube</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <Card key={c.title} title={c.title} desc={c.desc} />
            ))}
          </div>
        </section>

        {/* MODEL CALLOUT */}
        <section id="model" className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-xl font-semibold">Our newest model</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70">
              Faster reasoning, grounded web answers, and richer multimodal outputs — designed for
              writing, research, coding, data, voice, images, and video.
            </p>

            <details className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <summary className="cursor-pointer select-none text-sm font-medium text-white/80">
                What&apos;s improved
              </summary>
              <div className="mt-3 grid gap-3 text-sm text-white/70 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="font-medium text-white/80">Better reasoning</div>
                  <p className="mt-1 leading-6">
                    More reliable step-by-step thinking for hard problems and long workflows.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="font-medium text-white/80">Grounded answers</div>
                  <p className="mt-1 leading-6">
                    Web results and citations when you need verification and context.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="font-medium text-white/80">Stronger multimodal</div>
                  <p className="mt-1 leading-6">
                    Higher quality image understanding and more consistent visual output.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="font-medium text-white/80">Long-context work</div>
                  <p className="mt-1 leading-6">
                    Better continuity across longer tasks, projects, and multi-step plans.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* PRICING */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold">Get started with Upcube today</h2>

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="text-xs text-white/60">{p.name}</div>
                <div className="mt-2 text-sm font-medium text-white/80">{p.headline}</div>

                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-0.5 text-white/40">•</span>
                      <span className="leading-6">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <div className="text-4xl font-semibold tracking-tight">{p.price}</div>
                  {p.cadence ? <div className="text-xs text-white/50">{p.cadence}</div> : null}
                </div>

                <div className="mt-5">
                  <a
                    href="https://chat.upcube.ai/"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
                  >
                    {p.cta}
                  </a>
                  {p.subtle ? (
                    <div className="mt-3 text-xs text-white/45">{p.subtle}</div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Join millions of users and try Upcube</h3>
                <p className="mt-2 text-sm text-white/70">
                  Start with a prompt, upload a file, or ask for a plan — Upcube is built for speed
                  and clarity.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://chat.upcube.ai/"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
                >
                  Try Upcube on the web
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                >
                  Try it on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER (minimal; you can wire real links later) */}
        <footer className="mt-14 border-t border-white/10 py-10 text-sm text-white/60">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              © Upcube Inc. • New York, NY 10005 •{" "}
              <a className="underline hover:text-white" href="mailto:upcubeco@gmail.com">
                upcubeco@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a className="underline hover:text-white" href="/terms-of-service">
                Terms of Service
              </a>
              <a className="underline hover:text-white" href="/privacy-policy">
                Privacy Policy
              </a>
              <a className="underline hover:text-white" href="/security-privacy">
                Security & Privacy
              </a>
              <a className="underline hover:text-white" href="/trust-transparency">
                Trust & Transparency
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
