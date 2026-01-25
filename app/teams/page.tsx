import type { Metadata } from 'next'
import TeamsClient from './teams-client'

export const metadata: Metadata = {
  title: 'Upcube for Small Teams & Startups',
  description:
    'Upcube helps small teams run like bigger teams—docs, ops, support, analysis, and execution workflows—without turning people into tickets.',
}

export default function Page() {
  return <TeamsClient />
}
