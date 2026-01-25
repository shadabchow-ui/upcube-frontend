import type { Metadata } from 'next'
import BuildersClient from './builders-client'

export const metadata: Metadata = {
  title: 'Builders & Developers — Upcube',
  description:
    'Ship AI features like software: versioned, tested, monitored, rollbackable. Upcube provides APIs, eval gates, observability, and enforceable policies.',
}

export default function BuildersPage() {
  return <BuildersClient />
}
