import DocPage from '@/components/doc-page'

export default function VisionPage() {
  return (
    <DocPage
      title="Upcube — Vision"
      metaLeft="Upcube.ai"
      metaRight="Updated: 2025-12-17 · Build the future. Stay human."
      intro="Upcube is built for humans, by humans — AI that expands agency, purpose, impact, and discovery, without replacing people."
      toc={[
        { id: 'for-humans', label: 'For humans, by humans' },
        { id: 'dont-replace', label: "We don’t replace humans" },
        { id: 'build-future', label: 'Build the future' },
        { id: 'impact', label: 'Impact: poverty & charity' },
        { id: 'meaning', label: 'Meaning & spirituality' },
        { id: 'quantum', label: 'AI + Quantum Initiative' },
      ]}
      sections={[
        {
          id: 'for-humans',
          title: 'For humans, by humans',
          body: (
            <>
              <p>
                Upcube exists for one reason: to expand human agency.
              </p>
              <p>
                Not to replace people. Not to erase work. Not to automate meaning out of life.
                As automation grows and society adapts, more people will have the freedom to choose
                what they do with their time — and that freedom should lead to purpose, not emptiness.
              </p>
              <p>
                Our vision is a future where technology increases human meaning, not human dependence.
              </p>
            </>
          ),
        },
        {
          id: 'dont-replace',
          title: 'We don’t replace humans. We expand what humans can do.',
          body: (
            <>
              <p>
                AI should remove friction, not remove dignity. So Upcube is built around a simple promise:
                humans stay in control.
              </p>
              <ul>
                <li><strong>You decide.</strong> AI proposes; humans approve, refine, and own outcomes.</li>
                <li><strong>Clarity over chaos.</strong> We turn intention into steps you can actually take.</li>
                <li><strong>Accountability.</strong> Tools should be reliable, explainable, and safe to use in real life.</li>
                <li><strong>Respect.</strong> Time saved should turn into meaning — not emptiness.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'build-future',
          title: 'Build the future',
          body: (
            <>
              <p>
                Most people don’t need “more content.” They need momentum. They need clarity.
                They need a reason to keep going.
              </p>
              <p>
                Upcube is being built to help people turn intention into action — especially in a world where survival
                may become less tied to a paycheck, and more tied to what you choose to create with your freedom.
              </p>
              <h3 className="text-lg font-semibold mt-6">Who we’re building for</h3>
              <ul>
                <li>Creators turning ideas into work that matters</li>
                <li>Students turning confusion into understanding</li>
                <li>Entrepreneurs turning vision into real systems</li>
                <li>Helpers turning compassion into impact</li>
                <li>Researchers turning questions into discovery</li>
              </ul>
              <p className="mt-4">
                The goal isn’t to make you “productive.” The goal is to help you become the kind of person who finishes what matters.
              </p>
            </>
          ),
        },
        {
          id: 'impact',
          title: 'Impact: poverty and charity',
          body: (
            <>
              <p>
                A future worth building is not one where a few people win and everyone else is managed.
                Technology should increase the power of ordinary people to help each other — especially those living under pressure.
              </p>
              <h3 className="text-lg font-semibold mt-6">What we aim to make easier</h3>
              <ul>
                <li>Finding real resources (food, housing, benefits, community programs)</li>
                <li>Turning “I don’t know where to start” into clear next steps</li>
                <li>Helping charities communicate needs and outcomes with transparency</li>
                <li>Coordinating volunteers and community projects</li>
                <li>Enabling contribution — even with limited time or money</li>
              </ul>
              <p className="mt-4">
                We don’t believe the future is built by speeches. It’s built by people showing up for each other.
              </p>
            </>
          ),
        },
        {
          id: 'meaning',
          title: 'Meaning and spirituality',
          body: (
            <>
              <p>
                Even in a world of abundance, people ask the same questions: Why am I here? What is my life for?
                How do I live with pain and still keep my heart open?
              </p>
              <p>
                Upcube will support the inner life — not by replacing faith, community, or tradition — but by helping people reflect,
                practice, and return to what’s true.
              </p>
              <h3 className="text-lg font-semibold mt-6">What we support</h3>
              <ul>
                <li>Guided journaling and self-reflection</li>
                <li>Practices for gratitude, discipline, forgiveness, and hope</li>
                <li>Values-based decision support (living aligned with what you believe)</li>
                <li>Tools that strengthen meaning, not addiction to screens</li>
              </ul>
              <p className="mt-4">
                <strong>Important boundary:</strong> Upcube does not claim spiritual authority. We aren’t here to tell anyone what to believe.
              </p>
            </>
          ),
        },
        {
          id: 'quantum',
          title: 'AI + Quantum Initiative: seeking deeper truth with humility',
          body: (
            <>
              <p>
                Humanity has carried questions for thousands of years: What is reality made of? Why does the universe exist?
                What is consciousness? What does “meaning” really mean?
              </p>
              <p>
                We believe the future of discovery will come from new kinds of collaboration between human minds and advanced computation.
                That’s why Upcube is planning a long-term initiative at the frontier of AI and quantum computing.
              </p>
              <h3 className="text-lg font-semibold mt-6">What this direction focuses on</h3>
              <ul>
                <li>Organizing and mapping knowledge across disciplines</li>
                <li>Helping researchers track evidence, assumptions, and uncertainty</li>
                <li>Accelerating hypothesis generation and testing workflows</li>
                <li>Building tools that support discovery without replacing human judgment</li>
                <li>Integrating quantum compute when the tech becomes practical and reliable</li>
              </ul>
              <p className="mt-4">
                If humanity is going to evolve, it must evolve in wisdom — not just power.
              </p>
            </>
          ),
        },
      ]}
    />
  )
}
