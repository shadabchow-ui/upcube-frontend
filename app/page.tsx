import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

const chips = ["Browse products", "Search tools", "Docs", "Pricing", "Updates", "Support"]

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-transparent">
      {/* Top-right login */}
      <div className="flex h-14 items-center justify-end px-6">
        <Button
          variant="outline"
          className="h-9 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
        >
          Log in
        </Button>
      </div>

      {/* Center content */}
      <div className="flex flex-1 items-start justify-center px-6 pt-16">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            What can I help with?
          </h1>

          {/* Prompt box */}
          <form action="https://chat.upcube.ai/" method="GET" className="mt-7">
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur">
              <input
                name="q"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="Search Upcube…"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="h-9 w-9 rounded-full bg-white/10 text-white hover:bg-white/15"
                aria-label="Go"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {chips.map((c) => (
              <Button
                key={c}
                variant="outline"
                className="h-9 rounded-full border-white/10 bg-transparent text-xs text-white/70 hover:bg-white/5 hover:text-white"
                type="button"
              >
                {c}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
