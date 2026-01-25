import Link from 'next/link'

type TocItem = { id: string; label: string }

const toc: TocItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'text', label: 'Text' },
  { id: 'speech', label: 'Speech' },
  { id: 'voice', label: 'Voice' },
  { id: 'image', label: 'Image' },
  { id: 'video', label: 'Video' },
  { id: 'humans', label: 'Humans stay in control' },
  { id: 'what-people-build', label: 'What people build with Upcube' },
]

function TocLink({ id, label }: TocItem) {
  return (
    <a
      href={`#${id}`}
      className="block rounded-md px-2 py-1 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
    >
      {label}
    </a>
  )
}

function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        'rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">
      {children}
    </span>
  )
}

function SectionTitle({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-base font-semibold text-white mt-10 first:mt-0"
    >
      {children}
    </h2>
  )
}

export default function CapabilitiesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
        {/* Left TOC */}
        <aside className="lg:sticky lg:top-20 h-fit">
          <Card className="p-3">
            <div className="text-xs font-medium text-white/70 px-2 pb-2">
              On this page
            </div>

            <div className="space-y-1">
              {toc.map((item) => (
                <TocLink key={item.id} {...item} />
              ))}
            </div>

            <div className="mt-3 border-t border-white/10 pt-3 px-2">
              <div className="text-xs text-white/60">Explore</div>
              <div className="mt-2 flex flex-col gap-1">
                <Link href="/platform-overview" className="text-sm text-white/70 hover:text-white">
                  Platform overview
                </Link>
                <Link href="/safety" className="text-sm text-white/70 hover:text-white">
                  Safety
                </Link>
              </div>
            </div>
          </Card>
        </aside>

        {/* Main */}
        <section className="space-y-6">
          {/* Header */}
          <Card className="p-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
              <Pill>Capabilities</Pill>
              <span className="text-white/30">•</span>
              <span>Updated: 2025-12-17</span>
              <span className="text-white/30">•</span>
              <span>Multimodal AI for humans</span>
            </div>

            <h1 className="mt-3 text-2xl font-semibold text-white">Capabilities</h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
              Upcube supports text, speech, voice, image, and video—built to expand
              agency, restore purpose, and multiply impact. Capabilities are not
              the goal. What humans do with them is.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>Vision</Pill>
              <Pill>Impact</Pill>
              <Pill>Meaning</Pill>
              <Pill>Roadmap</Pill>
            </div>
          </Card>

          {/* Body */}
          <Card className="p-6">
            <SectionTitle id="overview">Overview</SectionTitle>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Upcube is built for the full reality of creation. People don’t think
              in one format. We speak, we write, we visualize, we teach, we record,
              we build.
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Our capabilities are designed to work together so you can move from
              idea → plan → output → action without losing your voice or your values.
            </p>

            <SectionTitle id="text">Text</SectionTitle>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Clarity, structure, and progress. Text is where most plans are born.
              Upcube helps you turn scattered thoughts into a direction you can follow.
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
              <li>Planning: goals → steps → weekly actions</li>
              <li>Writing: drafts, structure, refinement, and voice consistency</li>
              <li>Research: summaries, comparisons, and organized notes</li>
              <li>Teaching: outlines, lessons, and explanations that land</li>
            </ul>
            <p className="mt-2 text-xs text-white/50">
              Text should move you forward—not trap you in endless rewriting.
            </p>

            <SectionTitle id="speech">Speech</SectionTitle>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Sometimes you don’t need a blank page. You need to talk. Upcube helps
              you get your thoughts out and turn them into something usable.
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
              <li>Speech-to-text for notes, meetings, and learning</li>
              <li>Summaries and next steps from spoken input</li>
              <li>Accessibility-first workflows for people who think out loud</li>
            </ul>

            <SectionTitle id="voice">Voice</SectionTitle>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Make your work feel alive and human. Upcube supports voice generation
              and voice-driven workflows so creators, teachers, and builders can
              communicate at scale while staying authentic.
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
              <li>Text-to-speech for narration and accessible content</li>
              <li>Voice checks to build consistency and momentum</li>
              <li>Audio-first creation for lessons, stories, and guidance</li>
            </ul>
            <p className="mt-2 text-xs text-white/50">
              Voice is not just output. It’s identity. Keep it human.
            </p>

            <SectionTitle id="image">Image</SectionTitle>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Visual thinking for builders. Images help people understand faster
              than paragraphs ever will. Upcube supports image creation and
              understanding to help you communicate, teach, and design.
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
              <li>Generate visuals to explain concepts and ideas</li>
              <li>Understand and describe images for accessibility</li>
              <li>Design support for creators, brands, and projects</li>
            </ul>

            <SectionTitle id="video">Video</SectionTitle>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Video is where ideas become real to other people. Upcube supports
              video workflows—from planning to structure to summaries—so you can
              teach and create with less friction.
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
              <li>Script and storyboard support</li>
              <li>Summarization and key-moment extraction</li>
              <li>Learning content generation and organization</li>
              <li>Turning long content into short, clear cuts</li>
            </ul>
            <p className="mt-2 text-xs text-white/50">
              Video should carry truth and meaning—not noise.
            </p>

            <SectionTitle id="humans">Humans stay in control</SectionTitle>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Capabilities mean nothing if people lose agency. Upcube is built so
              humans remain responsible for the outcome.
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
              <li>AI proposes. Humans decide.</li>
              <li>Tools serve purpose. Not endless distraction.</li>
              <li>Safety and boundaries. Designed for real life.</li>
              <li>Meaning over metrics. Time saved should become a better life.</li>
            </ul>

            <SectionTitle id="what-people-build">What people build with Upcube</SectionTitle>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm font-semibold text-white">Creators</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Scripts, narration, visuals, editing structure, and consistent
                  output that still feels human.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm font-semibold text-white">Students & learners</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Explanations, study plans, practice, summaries, and learning
                  systems that build confidence.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm font-semibold text-white">Builders & entrepreneurs</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Roadmaps, product docs, workflows, marketing assets, and
                  execution that turns vision into reality.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm font-semibold text-white">Helpers & communities</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Resource navigation, clear next steps, coordination, and
                  communication that makes help easier to deliver.
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-white/50">
              Upcube is a platform for creation, service, and discovery. Build the future. Stay human.
            </p>
          </Card>
        </section>
      </div>
    </main>
  )
}
