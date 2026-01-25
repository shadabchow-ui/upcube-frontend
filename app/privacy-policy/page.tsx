import type { Metadata } from "next"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Privacy Policy — Upcube",
  description:
    "Upcube Privacy Policy describing how we collect, use, disclose, and protect personal data.",
}

type TocItem = { id: string; label: string }

const TOC: TocItem[] = [
  { id: "who-we-are", label: "Who we are" },
  { id: "personal-data-we-collect", label: "1) Personal Data we collect" },
  { id: "how-we-use-personal-data", label: "2) How we use Personal Data" },
  { id: "disclosure-of-personal-data", label: "3) Disclosure of Personal Data" },
  { id: "retention", label: "4) Retention" },
  { id: "your-rights", label: "5) Your rights" },
  { id: "children", label: "6) Children" },
  { id: "security", label: "7) Security" },
  { id: "additional-us-state-disclosures", label: "8) Additional U.S. state disclosures" },
  { id: "cookies", label: "9) Cookies & similar technologies" },
  { id: "changes", label: "10) Changes to this Policy" },
  { id: "contact", label: "11) How to contact us" },
  { id: "regional-privacy-notice", label: "Regional Privacy Notice (EEA/UK/CH)" },
]

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-base font-semibold text-zinc-100">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-6 text-zinc-200">{children}</div>
    </section>
  )
}

function Subhead({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-5 text-sm font-semibold text-zinc-100">{children}</h3>
}

function Bullets({ children }: { children: React.ReactNode }) {
  return <ul className="ml-5 list-disc space-y-1">{children}</ul>
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-zinc-900/60 px-1.5 py-0.5 text-[0.85em] text-zinc-100 ring-1 ring-zinc-800">
      {children}
    </code>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6">
      {/* Title */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
            Upcube — Privacy Policy
          </h1>

          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-zinc-900/70 text-zinc-200 ring-1 ring-zinc-800">
              Upcube Inc.
            </Badge>
            <Badge variant="secondary" className="bg-zinc-900/70 text-zinc-200 ring-1 ring-zinc-800">
              Effective: Month Day, Year
            </Badge>
            <Badge variant="secondary" className="bg-zinc-900/70 text-zinc-200 ring-1 ring-zinc-800">
              Headquarters: New York, NY 10005, USA
            </Badge>
          </div>
        </div>
      </div>

      {/* Notice bar */}
      <div className="mt-4">
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 backdrop-blur">
          If you are in the EEA, UK, or Switzerland, see our{" "}
          <Link href="#regional-privacy-notice" className="underline underline-offset-4 hover:text-white">
            Regional Privacy Notice
          </Link>{" "}
          for additional information and rights.
        </div>
      </div>

      {/* Layout */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">
        {/* Left: On this page */}
        <Card className="h-fit border-zinc-800 bg-zinc-950/50 backdrop-blur">
          <CardHeader className="pb-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
              On this page
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <nav className="space-y-2">
              {TOC.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-zinc-200 underline underline-offset-4 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Right: Content */}
        <Card className="border-zinc-800 bg-zinc-950/50 backdrop-blur">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-10">
              <Section id="who-we-are" title="Who we are">
                <p>
                  Upcube Inc. (“Upcube,” “we,” “our,” or “us”) is headquartered in New York,
                  NY 10005, USA. This Privacy Policy explains how we handle personal data
                  (“Personal Data”) when you use our websites, applications, and services—
                  including chatbot, search, voice, and image generation (the “Services”).
                </p>
                <p>
                  This Policy does not apply to data we process on behalf of business customers
                  under separate contracts (for example, enterprise plans or APIs), where we act
                  as a service provider/processor under that agreement.
                </p>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section id="personal-data-we-collect" title="1) Personal Data we collect">
                <Subhead>A. Data you provide</Subhead>
                <Bullets>
                  <li>
                    <span className="font-semibold text-zinc-100">Account info:</span>{" "}
                    name, contact details, login credentials, payment details, transaction history.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">User Content (“Content”):</span>{" "}
                    inputs you provide and outputs you receive (prompts, files, images, audio, chats),
                    depending on features used.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Communications:</span>{" "}
                    emails, support requests, social messages, and related metadata.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Other submissions:</span>{" "}
                    surveys, events, identity verification if required.
                  </li>
                </Bullets>

                <Subhead>B. Data from your use of the Services (Technical Information)</Subhead>
                <Bullets>
                  <li>
                    <span className="font-semibold text-zinc-100">Log data:</span>{" "}
                    IP address, browser type/settings, timestamps, pages/features used.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Usage data:</span>{" "}
                    feature usage, actions taken, time zone, country, device/OS, app version, user agent.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Device info:</span>{" "}
                    device identifiers, crash logs, performance diagnostics.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Location info:</span>{" "}
                    general location from IP for security/fraud prevention and service quality; some features
                    may request precise location with your permission.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Cookies & similar tech:</span>{" "}
                    sessions, preferences, analytics, and security (see{" "}
                    <Link href="#cookies" className="underline underline-offset-4 hover:text-white">
                      Cookies
                    </Link>
                    ).
                  </li>
                </Bullets>

                <Subhead>C. Data from other sources</Subhead>
                <Bullets>
                  <li>Security and fraud partners (to prevent abuse).</li>
                  <li>Marketing partners (prospect info for B2B outreach).</li>
                  <li>
                    Publicly available information used to improve Services (subject to law and our controls).
                  </li>
                </Bullets>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section id="how-we-use-personal-data" title="2) How we use Personal Data">
                <Bullets>
                  <li>
                    <span className="font-semibold text-zinc-100">Provide & operate</span> the Services (responses, search, voice, image features).
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Improve & develop</span> (quality, reliability, safety, research/testing).
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Communicate</span> (product updates, transactional messages, security notices, events).
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Protect</span> the Services and users (fraud, abuse, security incidents, policy enforcement).
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Comply</span> with law and protect rights, privacy, safety, and property.
                  </li>
                </Bullets>

                <p>
                  We may aggregate or de-identify Personal Data for analytics, research, and service improvement.
                  We will not re-identify de-identified data unless required by law.
                </p>

                <Subhead>Use of your Content to improve the Services</Subhead>
                <p>
                  We may use your Content (inputs/outputs) to maintain, develop, and improve the Services.
                  You may opt out of some improvement uses (where available) via account data controls or by
                  emailing <InlineCode>upcube@proton.me</InlineCode>. Opting out may reduce personalization
                  or feature quality.
                </p>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section id="disclosure-of-personal-data" title="3) Disclosure of Personal Data">
                <Bullets>
                  <li>
                    <span className="font-semibold text-zinc-100">Vendors / Service Providers</span> (hosting, support, safety monitoring, communications, analytics, payments, CDN).
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Affiliates</span> under common ownership/control (consistent with this Policy).
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Business account admins</span> may access/manage account and Content when you use an organization email or join an org space.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Legal / Safety</span> as required by law or to protect rights, safety, and security; investigate misuse.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Business transactions</span> (merger, acquisition, financing, asset transfer) with protections.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">With your direction</span> (integrations you use; links/outputs you share).
                  </li>
                </Bullets>

                <p>
                  We do not sell Personal Data or share it for cross-context behavioral advertising, and we do not
                  process sensitive Personal Data to infer characteristics as defined by certain U.S. state laws.
                </p>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section id="retention" title="4) Retention">
                <p>
                  We retain Personal Data only as long as needed to provide the Services and for legitimate business
                  purposes (e.g., security, dispute resolution, legal obligations). Retention depends on purpose,
                  sensitivity, risk, and legal requirements. Some retention can be controlled by you via settings or
                  by contacting <InlineCode>upcube@proton.me</InlineCode>.
                </p>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section id="your-rights" title="5) Your rights">
                <p>
                  Depending on your location, you may have rights to access, delete, correct, port, restrict/object,
                  withdraw consent (where applicable), and complain to a supervisory authority.
                </p>
                <p>
                  You can exercise many rights in account settings or by emailing{" "}
                  <InlineCode>upcube@proton.me</InlineCode>. We may need to verify your identity. Authorized-agent
                  requests may require proof of authority and additional verification.
                </p>

                <Subhead>About accuracy of outputs</Subhead>
                <p>
                  Outputs may be incomplete or inaccurate and should not be your sole source of truth or a
                  substitute for professional advice. If output includes information about you that you believe is
                  inaccurate and you want it corrected/removed, email <InlineCode>upcube@proton.me</InlineCode>{" "}
                  with applicable law and technical feasibility in mind.
                </p>

                <Subhead>International transfers</Subhead>
                <p>
                  Personal Data may be processed in the U.S. and other countries. We apply protections in this
                  Policy regardless of where data is processed and use lawful transfer mechanisms where required.
                </p>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section id="children" title="6) Children">
                <p>
                  The Services are not directed to children under 13. We do not knowingly collect Personal Data
                  from children under 13. If you believe a child under 13 has provided Personal Data, contact{" "}
                  <InlineCode>upcube@proton.me</InlineCode>; we will investigate and delete where appropriate.
                  Users under 18 must have parental/guardian permission.
                </p>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section id="security" title="7) Security">
                <p>
                  We implement administrative, technical, and organizational measures designed to protect Personal
                  Data against unauthorized access, loss, or misuse. No system is perfectly secure; use strong
                  passwords, enable MFA, and consider the sensitivity of what you share.
                </p>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section
                id="additional-us-state-disclosures"
                title="8) Additional U.S. state disclosures"
              >
                <p className="text-zinc-200">
                  The table below summarizes categories of Personal Data we may collect and purposes/disclosures.
                  This section is intended to help with state privacy law transparency requirements.
                </p>

                <div className="mt-4 overflow-hidden rounded-lg border border-zinc-800">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="border-b border-zinc-800 bg-zinc-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-300 md:border-b-0 md:border-r">
                      Categories collected
                    </div>
                    <div className="bg-zinc-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-300">
                      Purposes & disclosures
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="space-y-2 border-b border-zinc-800 px-4 py-3 text-sm text-zinc-200 md:border-b-0 md:border-r">
                      <Bullets>
                        <li>Identifiers (name, contact, IP, device IDs)</li>
                        <li>Commercial info (transactions)</li>
                        <li>Network activity (use of Services, Content)</li>
                        <li>Communications</li>
                        <li>Geolocation (general; precise with consent)</li>
                        <li>Credentials and payment info</li>
                      </Bullets>
                    </div>
                    <div className="space-y-2 px-4 py-3 text-sm text-zinc-200">
                      <Bullets>
                        <li>Provide/operate; improve/develop; communicate</li>
                        <li>Prevent fraud/abuse; comply with law</li>
                        <li>
                          Disclose to vendors/affiliates; legal/safety; business transactions; org admins; with your direction
                        </li>
                        <li>No sale/share for cross-context ads; no targeted advertising as defined by state law</li>
                      </Bullets>
                    </div>
                  </div>
                </div>

                <p className="mt-4">
                  Exercising rights / appeals: email <InlineCode>upcube@proton.me</InlineCode>. Verification may
                  be required.
                </p>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section id="cookies" title="9) Cookies & similar technologies">
                <p>
                  We use cookies and similar tech for sessions, preferences, analytics, and security. Manage
                  preferences in your browser and (where provided) via our Cookie Settings. See our Cookie Notice
                  for details.
                </p>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section id="changes" title="10) Changes to this Policy">
                <p>
                  We may update this Policy periodically. If we make material changes, we’ll provide notice (e.g.,
                  in-product or email) and update the effective date. Continued use after the effective date means
                  you accept the updated Policy.
                </p>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section id="contact" title="11) How to contact us">
                <p className="space-y-1">
                  <span className="block font-semibold text-zinc-100">Upcube Inc.</span>
                  <span className="block">New York, NY 10005, USA</span>
                  <span className="block">
                    Privacy & DSAR: <InlineCode>upcube@proton.me</InlineCode>
                  </span>
                </p>
                <p className="text-xs text-zinc-400">
                  Not legal advice. Please consult counsel before publishing.
                </p>
              </Section>

              <Separator className="bg-zinc-800" />

              <Section id="regional-privacy-notice" title="Regional Privacy Notice (EEA/UK/CH) — summary">
                <p>
                  This summary provides additional details for EEA/UK/Switzerland users. If there is a conflict
                  between this notice and the main Policy, this notice controls for those regions.
                </p>

                <Bullets>
                  <li>
                    <span className="font-semibold text-zinc-100">Controller:</span> Upcube Inc. (and any appointed EU/UK representative where required).
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Lawful bases:</span> contract; legitimate interests (security, fraud prevention, improvement); consent (where required, e.g., marketing or precise location); legal obligations.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Rights:</span> access, deletion, correction, portability, restriction/objection, consent withdrawal, complaint to DPA/ICO.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Transfers:</span> standard contractual clauses or other lawful mechanisms.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Retention:</span> based on purpose, sensitivity, risk, and law.
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-100">Contact:</span> <InlineCode>upcube@proton.me</InlineCode>
                  </li>
                </Bullets>
              </Section>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
