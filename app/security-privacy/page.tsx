import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  KeyRound,
  Lock,
  Mail,
  MapPin,
  ShieldCheck,
  ShieldAlert,
  UserCog,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Security & Privacy — Upcube",
  description:
    "How Upcube protects data, ships safe systems, and supports enterprise-grade controls and governance.",
}

const principles = [
  {
    title: "Secure by design",
    icon: Lock,
    points: [
      "Defense-in-depth across app, infra, and model integrations.",
      "Threat modeling for new surfaces (agents, tools, connectors).",
      "Least-privilege by default for actions and data access.",
    ],
  },
  {
    title: "Strong access controls",
    icon: KeyRound,
    points: [
      "Role-based access control (RBAC) and scoped permissions.",
      "Audit logs for admin actions, config changes, and tool calls.",
      "Rate limits and allow/deny lists for tool and web access.",
    ],
  },
  {
    title: "Privacy-first handling",
    icon: ShieldCheck,
    points: [
      "Data minimization, scoped retention, and purpose limitation.",
      "Separation of concerns with tenant isolation where applicable.",
      "User controls for visibility and safer defaults for sensitive topics.",
    ],
  },
] as const

const controls = [
  {
    title: "Customer controls",
    icon: UserCog,
    items: [
      {
        k: "Workspace / tenant policies",
        v: "Enforce allowed tools, connectors, and content boundaries.",
      },
      {
        k: "Visibility controls",
        v: "Where feasible: sources, citations, and activity summaries.",
      },
      {
        k: "Safer-mode toggles",
        v: "Extra friction and warnings for sensitive categories.",
      },
    ],
  },
  {
    title: "Monitoring & incident response",
    icon: ShieldAlert,
    items: [
      { k: "Telemetry + alerting", v: "Anomaly detection and abuse signals." },
      { k: "Triage SLAs", v: "Severity-based on-call and escalation paths." },
      { k: "Containment", v: "Scoped rollbacks, throttles, and kill-switches." },
      { k: "Postmortems", v: "Blameless reviews with tracked remediations." },
    ],
  },
  {
    title: "Governance & compliance support",
    icon: FileCheck2,
    items: [
      { k: "Security reviews", v: "Gated launches for risky capabilities." },
      { k: "Data governance", v: "Least privilege + logged elevations." },
      { k: "Compliance support", v: "DPA on request; aligned privacy workflows." },
    ],
  },
] as const

const baseline = [
  "Enable SSO (if available) and enforce MFA for admins.",
  "Lock down tool access: start with allow-lists, expand gradually.",
  "Turn on audit logs and review them during onboarding.",
  "Use scoped API keys and rotate on a schedule or after incidents.",
  "Set retention to the minimum that supports your workflow.",
  "Create an incident channel + runbook for escalation and comms.",
] as const

const posture = [
  {
    title: "Data protection",
    points: [
      "Encrypt in transit and at rest where applicable.",
      "Minimize stored content; limit logs to what you need.",
      "Separate customer content from system telemetry.",
    ],
  },
  {
    title: "Tooling safety",
    points: [
      "Explicit opt-in for tool calls and external side effects.",
      "Hard boundaries for high-risk actions (payments, deletion).",
      "Domain allow/deny lists for web-connected tools.",
    ],
  },
  {
    title: "Evaluation & drift control",
    points: [
      "Regression suites for jailbreaks, leakage, and prompt injection.",
      "Shadow launches for risky changes with monitoring gates.",
      "Continuous re-evals when models, tools, or policies change.",
    ],
  },
] as const

const faqs = [
  {
    q: "Do you train on my content?",
    a: "Upcube is designed to support privacy-preserving operation. For enterprise use, we aim for clear controls around retention, access, and isolation. If you need a specific data-handling posture, treat it as a contract requirement and validate it in evaluation.",
  },
  {
    q: "What happens when something goes wrong?",
    a: "We treat incidents like engineering problems: detect → triage → contain → remediate → learn. We prioritize fast containment (rate limits, scoped disables) and then publish tracked fixes and evaluation updates.",
  },
  {
    q: "How do you handle tool-call risk?",
    a: "Tool calls are gated by policy, permissions, and scope. We recommend least-privilege defaults, explicit opt-in for side effects, and audit logs for every external action path.",
  },
] as const

export default function SecurityPrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_25%_20%,rgba(255,255,255,0.10),transparent_60%)]" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/70">
              <BadgeCheck className="h-3.5 w-3.5" />
              Security & Privacy
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
              <ShieldCheck className="h-3.5 w-3.5" />
              Controls, audits, and least-privilege defaults
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Security and privacy you can operationalize
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
            Upcube is built to support safe deployment: strong access controls, scoped tooling,
            auditability, and privacy-minded data handling. This page outlines the controls we
            prioritize and the baseline we recommend for real-world use.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="h-10 rounded-full bg-white text-black hover:bg-white/90"
            >
              <Link href="#controls">
                See controls <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-10 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="#contact">Contact security</Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[
              "RBAC + audit logs",
              "Tool allow-lists",
              "Scoped retention",
              "Incident playbooks",
              "Evaluation gates",
            ].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mt-12" aria-label="Security principles">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Core principles
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-white/65">
          The security posture we optimize for: practical controls, measurable checks, and
          reliable incident response.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => {
            const Icon = p.icon
            return (
              <Card
                key={p.title}
                className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base text-white">
                    <Icon className="h-4 w-4 text-white/70" />
                    {p.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-white/70">
                    {p.points.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Controls */}
      <section className="mt-14" id="controls" aria-label="Controls">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Controls that matter
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-white/65">
          This is the stuff you actually use in production: policy boundaries, visibility,
          permissions, and fast containment when the world gets messy.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {controls.map((c) => {
            const Icon = c.icon
            return (
              <Card
                key={c.title}
                className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base text-white">
                    <Icon className="h-4 w-4 text-white/70" />
                    {c.title}
                  </CardTitle>
                  <CardDescription className="text-white/65">
                    Practical defaults you can enforce and audit.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 text-sm text-white/70">
                    {c.items.map((it) => (
                      <li key={it.k} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
                        <div>
                          <div className="text-white">{it.k}</div>
                          <div className="text-white/65">{it.v}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Admin baseline */}
      <section className="mt-14" aria-label="Recommended baseline">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <UserCog className="h-4 w-4 text-white/70" />
                Recommended admin baseline
              </CardTitle>
              <CardDescription className="text-white/65">
                If you do nothing else, do these first.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-sm text-white/70">
                {baseline.map((x) => (
                  <li key={x} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant="outline"
                className="h-9 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="/safety">View safety page</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <ShieldCheck className="h-4 w-4 text-white/70" />
                Operational posture
              </CardTitle>
              <CardDescription className="text-white/65">
                How we think about security in real deployments.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-5">
                {posture.map((s) => (
                  <div key={s.title}>
                    <div className="text-sm font-semibold text-white">
                      {s.title}
                    </div>
                    <ul className="mt-2 space-y-2 text-sm text-white/70">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14" aria-label="FAQ">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          FAQ
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {faqs.map((f) => (
            <Card
              key={f.q}
              className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-white">{f.q}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-white/70">
                {f.a}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-14" id="contact" aria-label="Contact security">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Report an issue / contact
        </h2>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">Security contact</CardTitle>
              <CardDescription className="text-white/65">
                For vulnerabilities or urgent reports, include reproduction steps and impact.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-white/50" />
                  <span>New York, NY 10005 · USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-white/50" />
                  <Link
                    href="mailto:upcubeco@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    upcubeco@gmail.com
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white/70">
                Include: affected pages/endpoints, timestamps, example inputs, logs (if safe), and the expected vs.
                observed behavior. If you have a suggested fix, attach it.
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Button className="h-9 rounded-full bg-white text-black hover:bg-white/90">
                Email security
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-9 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="/research-overview">Research overview</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">Related pages</CardTitle>
              <CardDescription className="text-white/65">
                Deep dives and operational guidance.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-white/60" />
                    <span className="text-white">Safety</span>
                  </div>
                  <Link href="/safety" className="text-white/70 hover:text-white">
                    View <span className="text-white/40">→</span>
                  </Link>
                </li>
                <li className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-white/60" />
                    <span className="text-white">Trust & transparency</span>
                  </div>
                  <Link href="/trust-transparency" className="text-white/70 hover:text-white">
                    View <span className="text-white/40">→</span>
                  </Link>
                </li>
                <li className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="h-4 w-4 text-white/60" />
                    <span className="text-white">Terms & policies</span>
                  </div>
                  <Link href="#" className="text-white/70 hover:text-white">
                    View <span className="text-white/40">→</span>
                  </Link>
                </li>
              </ul>

              <div className="mt-5 text-xs text-white/55">
                If you need enterprise controls (SSO, audit exports, custom retention), treat them as requirements and
                validate them during onboarding.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
