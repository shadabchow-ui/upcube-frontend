import React from 'react'

export default function LongformLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 pb-20 pt-10">
      {children}
    </main>
  )
}
