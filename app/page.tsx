import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

const chips = ['Browse products', 'Search tools', 'Docs', 'Pricing', 'Updates', 'Support']

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-transparent">
      {/* Top-right login */}
      <div className="flex h-14 items-center justify-end px-6">
        <Button
          variant="outline"
          className="h-9 rounded-full border-white/15 bg-white/0 px-4 text-sm text-white/80 hover:bg-white/5 hover:text-white"
          asChild
        >
          <Link href="/login">Log in</Link>
        </Button>
      </div>

      {/* Center */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-2xl">
          <h1 className="text-center text-[30px] font-semibold tracking-tight text-white md:text-[36px]">
            What can I help with?
          </h1>

          {/* Prompt box */}
          <form className="mt-7" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <input
                className="h-6 flex-1 bg-transparent text-[13px] text-white/85 outline-none placeholder:text-white/35"
                placeholder="Search Upcube…"
                aria-label="Search Upcube"
              />
              <Button
                size="icon"
                variant="ghost"
                className="h-10 w-10 rounded-full text-white/70 hover:bg-white/8 hover:text-white"
                aria-label="Submit"
                type="submit"
              >
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
                className="h-9 rounded-full border-white/12 bg-white/0 px-4 text-[13px] text-white/55 hover:bg-white/5 hover:text-white"
                type="button"
              >
                {c}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="h-3 w-full bg-gradient-to-r from-pink-400/20 via-orange-300/15 to-blue-400/20" />
    </main>
  )
}
