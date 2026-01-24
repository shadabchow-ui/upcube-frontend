// app/terms-of-service/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service — Upcube",
  description:
    "Terms of Service for Upcube — rules for using our products, services, and website.",
}

const toc = [
  { id: "summary", label: "Plain-English summary" },
  { id: "who-we-are", label: "Who we are" },
  { id: "eligibility", label: "Eligibility & accounts" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "content", label: "Your content & outputs" },
  { id: "privacy", label: "Privacy & security" },
  { id: "paid", label: "Paid services (if applicable)" },
  { id: "availability", label: "Availability & changes" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "limits", label: "Limitation of liability" },
  { id: "termination", label: "Termination" },
  { id: "legal", label: "Governing law & disputes" },
  { id: "contact", label: "Contact" },
]

function Toc() {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardContent className="p-4">
        <div className="text-sm font-semibold text-white/90">On this page</div>
        <div className="mt-3 space-y-2 text-sm">
          {toc.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="block text-white/70 hover:text-white transition"
            >
              {t.label}
            </a>
          ))}
        </div>

        <div className="mt-4 border-t border-white/10 pt-4 text-xs text-white/55">
          Looking for privacy details?{" "}
          <Link href="/privacy-policy" className="text-white/80 hover:text-white underline">
            Privacy Policy
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  )
}

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/6 to-white/0 p-8">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative grid gap-8 md:grid-cols-[1fr_320px]">
          <div>
            <div className="flex flex-wrap gap-2">
              <Pill>Terms & Policies</Pill>
              <Pill>Last updated: Jan 24, 2026</Pill>
              <Pill>Version: 1.0</Pill>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight">
              Terms of Service
            </h1>

            <p className="mt-3 max-w-2xl text-white/70">
              These Terms govern your access to and use of Upcube’s websites,
              products, and services (collectively, the “Services”). If you don’t
              agree, please don’t use the Services.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <a href="#summary">Read the summary</a>
              </Button>

              <Button asChild variant="outline" className="border-white/15 text-white hover:bg-white/5">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>

            <div className="mt-5 text-xs text-white/50">
              Note: This page is a product-friendly terms template and should be reviewed by counsel before you treat it as final.
            </div>
          </div>

          {/* AT A GLANCE */}
          <Card className="relative bg-white/5 border-white/10">
            <CardContent className="p-5">
              <div className="text-sm font-semibold text-white/90">At a glance</div>

              <div className="mt-4 space-y-3 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                  <div>
                    <span className="text-white/85 font-medium">Be respectful.</span>{" "}
                    No illegal activity, exploitation, harassment, or attempts to bypass safety.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                  <div>
                    <span className="text-white/85 font-medium">You control what you share.</span>{" "}
                    Don’t upload secrets you can’t risk exposing.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                  <div>
                    <span className="text-white/85 font-medium">We work to stay reliable.</span>{" "}
                    But services can change, and outputs may be imperfect.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                  <div>
                    <span className="text-white/85 font-medium">Privacy matters.</span>{" "}
                    See our <Link href="/privacy-policy" className="underline hover:text-white">Privacy Policy</Link>.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* BODY */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
        <div className="lg:sticky lg:top-8 h-fit">
          <Toc />
        </div>

        <div className="space-y-10">
          {/* SUMMARY */}
          <section id="summary" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Plain-English summary</h2>
            <p className="mt-2 text-white/70">
              Here’s the intent of these Terms (not a replacement for the full legal text):
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Use the Services responsibly",
                  body: "No illegal activity, abuse, exploitation, or attempts to bypass safeguards or access other users’ data.",
                },
                {
                  title: "Be careful with what you submit",
                  body: "If you paste sensitive information, you assume the risk. Use redaction and least-privilege habits.",
                },
                {
                  title: "Outputs aren’t guaranteed perfect",
                  body: "AI systems can be wrong. Verify critical facts. Don’t treat outputs as professional advice.",
                },
                {
                  title: "We may update the Services",
                  body: "We improve, change, or discontinue features. Material Terms changes will be posted with an updated date.",
                },
              ].map((c) => (
                <Card key={c.title} className="bg-white/5 border-white/10">
                  <CardContent className="p-5">
                    <div className="text-sm font-semibold text-white/90">{c.title}</div>
                    <div className="mt-2 text-sm text-white/70">{c.body}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* WHO WE ARE */}
          <section id="who-we-are" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Who we are</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <div className="text-sm font-semibold text-white/90">Provider</div>
                  <div className="mt-2 text-sm text-white/70">
                    Upcube Inc. (“Upcube”, “we”, “us”, “our”)
                  </div>
                  <div className="mt-3 text-sm text-white/70">
                    HQ: New York, NY 10005, USA
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <div className="text-sm font-semibold text-white/90">Services covered</div>
                  <div className="mt-2 text-sm text-white/70">
                    Websites, apps, APIs, models, research pages, and any related tools we operate.
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ELIGIBILITY */}
          <section id="eligibility" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Eligibility & accounts</h2>
            <div className="mt-3 space-y-3 text-white/70">
              <p>
                You must be legally able to form a binding contract where you live. If you’re using the Services
                on behalf of an organization, you represent that you have authority to bind that organization.
              </p>
              <p>
                You’re responsible for your account credentials and all activity under your account.
                Notify us promptly if you suspect unauthorized access.
              </p>
            </div>

            <Card className="mt-5 bg-white/5 border-white/10">
              <CardContent className="p-5">
                <div className="text-sm font-semibold text-white/90">Security basics we expect</div>
                <div className="mt-3 grid gap-3 md:grid-cols-3 text-sm text-white/70">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    Use strong passwords + MFA where available.
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    Don’t share credentials or API keys in public repos.
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    Limit access: least-privilege users and scopes.
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ACCEPTABLE USE */}
          <section id="acceptable-use" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Acceptable use</h2>
            <p className="mt-2 text-white/70">
              You agree not to misuse the Services. Examples of prohibited behavior include:
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Illegal or harmful activity",
                  items: [
                    "Facilitating violence, exploitation, or wrongdoing",
                    "Attempting to obtain unauthorized access",
                    "Distributing malware or performing phishing",
                  ],
                },
                {
                  title: "Abuse of systems or users",
                  items: [
                    "Harassment, hate, or targeted abuse",
                    "Coordinated manipulation or deception",
                    "Doxxing or sharing private data without consent",
                  ],
                },
                {
                  title: "Bypassing safety",
                  items: [
                    "Prompt-injection attempts against toolchains",
                    "Jailbreaks intended to violate policy",
                    "Circumventing rate limits or restrictions",
                  ],
                },
                {
                  title: "Platform integrity",
                  items: [
                    "Scraping at scale without permission",
                    "Reverse engineering where prohibited by law",
                    "Interfering with service availability or monitoring",
                  ],
                },
              ].map((b) => (
                <Card key={b.title} className="bg-white/5 border-white/10">
                  <CardContent className="p-5">
                    <div className="text-sm font-semibold text-white/90">{b.title}</div>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                      {b.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-sm text-white/60">
              If you’re unsure whether something is allowed, use the safest interpretation and contact us.
            </div>
          </section>

          {/* CONTENT */}
          <section id="content" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Your content & outputs</h2>
            <div className="mt-3 space-y-3 text-white/70">
              <p>
                You may submit text, files, prompts, or other materials (“Input”). You’re responsible for having
                the rights to submit Input and for ensuring it doesn’t violate law or these Terms.
              </p>
              <p>
                The Services may generate responses, media, or other results (“Output”). Output may be inaccurate
                or incomplete. You are responsible for evaluating Output before using it.
              </p>
            </div>

            <Card className="mt-5 bg-white/5 border-white/10">
              <CardContent className="p-5">
                <div className="text-sm font-semibold text-white/90">Safety + ownership note</div>
                <div className="mt-2 text-sm text-white/70">
                  Upcube does not claim ownership of your Input. Rights in Output depend on the specific product and
                  applicable law. For brand, compliance, and enterprise requirements, request our Trust Portal artifacts.
                </div>
              </CardContent>
            </Card>
          </section>

          {/* PRIVACY */}
          <section id="privacy" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Privacy & security</h2>
            <p className="mt-2 text-white/70">
              Our handling of personal information is described in our{" "}
              <Link href="/privacy-policy" className="underline hover:text-white">
                Privacy Policy
              </Link>
              . We design systems with data-minimization and security controls, but no system is perfectly secure.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                { title: "Data minimization", body: "Collect only what we need to run and improve the Services." },
                { title: "Scoped access", body: "Prefer least-privilege roles, audit logs, and access reviews." },
                { title: "Secure defaults", body: "Encryption in transit, hardened endpoints, and monitoring." },
              ].map((c) => (
                <Card key={c.title} className="bg-white/5 border-white/10">
                  <CardContent className="p-5">
                    <div className="text-sm font-semibold text-white/90">{c.title}</div>
                    <div className="mt-2 text-sm text-white/70">{c.body}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* PAID */}
          <section id="paid" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Paid services (if applicable)</h2>
            <div className="mt-3 space-y-3 text-white/70">
              <p>
                Some Services may be paid. If you purchase a subscription or credits, pricing, billing cycle, and
                included limits will be shown at checkout or in your plan details.
              </p>
              <p>
                Unless required by law, fees are non-refundable once a billing period begins. We may suspend or
                downgrade service for unpaid balances.
              </p>
            </div>
          </section>

          {/* AVAILABILITY */}
          <section id="availability" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Availability & changes</h2>
            <div className="mt-3 space-y-3 text-white/70">
              <p>
                We aim for reliable operation, but downtime can happen (maintenance, incidents, upstream outages).
                We may change, add, or remove features over time.
              </p>
              <p>
                If we make material changes to these Terms, we will post the updated version with a new “Last updated”
                date. Continued use after changes means you accept the updated Terms.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <div className="text-sm font-semibold text-white/90">Enterprise changes</div>
                  <div className="mt-2 text-sm text-white/70">
                    Enterprise customers may have a separate agreement that controls where it conflicts with these Terms.
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <div className="text-sm font-semibold text-white/90">API rate limits</div>
                  <div className="mt-2 text-sm text-white/70">
                    We may enforce or update limits to protect platform stability and fair use.
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* DISCLAIMERS */}
          <section id="disclaimers" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Disclaimers</h2>
            <div className="mt-3 space-y-3 text-white/70">
              <p>
                The Services are provided “as is” and “as available.” To the extent permitted by law, we disclaim
                warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p>
                Do not rely on Output as professional advice (medical, legal, financial, or safety-critical). Verify
                independently and consult qualified professionals when needed.
              </p>
            </div>
          </section>

          {/* LIMITS */}
          <section id="limits" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Limitation of liability</h2>
            <div className="mt-3 space-y-3 text-white/70">
              <p>
                To the maximum extent permitted by law, Upcube will not be liable for indirect, incidental, special,
                consequential, or punitive damages, or loss of profits, revenue, data, or goodwill.
              </p>
              <p>
                Our total liability for any claim relating to the Services will not exceed the amount you paid to Upcube
                for the Services in the 12 months before the event giving rise to the claim (or $100 if you paid nothing).
              </p>
            </div>
          </section>

          {/* TERMINATION */}
          <section id="termination" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Termination</h2>
            <div className="mt-3 space-y-3 text-white/70">
              <p>
                You may stop using the Services at any time. We may suspend or terminate access if we reasonably believe
                you violated these Terms, posed a security risk, or used the Services unlawfully.
              </p>
              <p>
                Upon termination, your right to use the Services ends. Certain sections of these Terms survive, including
                disclaimers, limitation of liability, and dispute provisions.
              </p>
            </div>

            <Card className="mt-5 bg-white/5 border-white/10">
              <CardContent className="p-5">
                <div className="text-sm font-semibold text-white/90">Appeals</div>
                <div className="mt-2 text-sm text-white/70">
                  If you believe enforcement was mistaken, contact us with context, timestamps, and any relevant IDs so we
                  can review.
                </div>
              </CardContent>
            </Card>
          </section>

          {/* LEGAL */}
          <section id="legal" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Governing law & disputes</h2>
            <div className="mt-3 space-y-3 text-white/70">
              <p>
                These Terms are governed by the laws of the State of New York, excluding conflict-of-laws rules.
              </p>
              <p>
                Any dispute will be brought in the state or federal courts located in New York County, New York, and you
                consent to their jurisdiction, except where prohibited by law.
              </p>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Contact</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <div className="text-sm font-semibold text-white/90">General</div>
                  <div className="mt-2 text-sm text-white/70">
                    Email:{" "}
                    <a className="underline hover:text-white" href="mailto:upcubeco@gmail.com">
                      upcubeco@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <div className="text-sm font-semibold text-white/90">Security reports</div>
                  <div className="mt-2 text-sm text-white/70">
                    Email:{" "}
                    <a className="underline hover:text-white" href="mailto:upcubeco@gmail.com?subject=Security%20Report">
                      upcubeco@gmail.com
                    </a>{" "}
                    (subject: <span className="text-white/80">Security Report</span>)
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <a href="#top" className="text-sm text-white/70 hover:text-white underline">
                Back to top
              </a>

              <div className="text-xs text-white/50">
                Related:{" "}
                <Link href="/privacy-policy" className="underline hover:text-white">
                  Privacy Policy
                </Link>{" "}
                ·{" "}
                <Link href="/trust-transparency" className="underline hover:text-white">
                  Trust & Transparency
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* anchor for Back to top */}
      <div id="top" />
    </div>
  )
}
