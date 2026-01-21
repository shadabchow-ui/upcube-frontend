import Link from "next/link"
import { Button } from "@/components/ui/button"

const chips = [
  "Browse products",
  "Search tools",
  "Docs",
  "Pricing",
  "Updates",
  "Support",
]

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-transparent">
      {/* Top-right login */}
      <div className="flex h-14 items-center justify-end px-6">
        <Button
          variant="outline"
          className="h-9 rounded-full border-white/15 bg-black px-4 text-sm text-white/70 hover:bg-white/5 hover:text-white"
          asChild
        >
          <Link href="/login">Log in</Link>
        </Button>
      </div>

      {/* Center */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-2xl">
          <h1 className="text-center text-[30px] font-medium tracking-tight text-white/90 md:text-[36px]">
            What can I help with?
          </h1>

          {/* Prompt box */}
          <div className="mt-7">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <input
                className="h-6 flex-1 bg-transparent text-[13px] text-white/85 outline-none placeholder:text-white/35"
                placeholder="Search Upcube…"
                aria-label="Search Upcube"
              />
              <Button
                size="sm"
                variant="ghost"
                className="rounded-full px-4 text-xs text-white/60 hover:bg-white/5 hover:text-white"
                type="button"
              >
                Go
              </Button>
            </div>
          </div>

          {/* Chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {chips.map((c) => (
              <Button
                key={c}
                variant="outline"
                className="h-9 rounded-full border-white/12 bg-black px-4 text-[13px] text-white/50 hover:bg-white/5 hover:text-white"
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

