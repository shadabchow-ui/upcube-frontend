import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

const chips = [
  'Learn about Upcube',
  'Search products',
  'Browse tools',
  'Docs',
  'Pricing',
  'More',
]

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Top-right login */}
      <div className="flex h-14 items-center justify-end px-6">
        <Button variant="outline" className="h-9 rounded-full px-4 text-sm" asChild>
          <Link href="/login">Log in</Link>
        </Button>
      </div>

      {/* Center content */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-2xl">
          <h1 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
            What can I help you build with Upcube?
          </h1>

          {/* Prompt box */}
          <form className="mt-8">
            <div className="flex items-center gap-3 rounded-2xl border bg-muted/30 px-4 py-4">
              <input
                className="h-6 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Search Upcube…"
                aria-label="Search Upcube"
              />
              <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full">
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {chips.map((c) => (
              <Button
                key={c}
                variant="outline"
                className="h-9 rounded-full px-4 text-sm text-muted-foreground hover:text-foreground"
                type="button"
              >
                {c}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient bar (OpenAI-ish) */}
      <div className="h-3 w-full bg-gradient-to-r from-pink-400/40 via-orange-300/40 to-blue-400/40" />
    </main>
  )
}
