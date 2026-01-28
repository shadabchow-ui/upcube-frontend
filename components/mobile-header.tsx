"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function MobileHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur md:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-mark.png"
              alt="Upcube"
              width={26}
              height={26}
              priority
            />
            <span className="sr-only">Upcube</span>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="rounded p-2 text-xl"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-black border-r border-white/10 p-4 transform transition-transform md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-mark.png"
              alt="Upcube"
              width={28}
              height={28}
              priority
            />
            <span className="sr-only">Upcube</span>
          </div>
          <button onClick={() => setOpen(false)} className="text-xl">
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          <NavLink href="https://chat.upcube.ai">Chat</NavLink>
          <NavLink href="https://image.upcube.ai">Image</NavLink>
          <NavLink href="https://video.upcube.ai">Video</NavLink>
          <NavLink href="https://voice.upcube.ai">Voice</NavLink>
          <NavLink href="https://headshots.upcube.ai">Headshots</NavLink>
          <NavLink href="https://detect.upcube.ai">AI Detector</NavLink>
          <NavLink href="https://script.upcube.ai">Script</NavLink>
        </nav>
      </aside>
    </>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="rounded px-2 py-2 text-white/90 hover:bg-white/10"
      onClick={() => {
        // allow navigation; drawer closes via page reload
      }}
    >
      {children}
    </a>
  )
}


