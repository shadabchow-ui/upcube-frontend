import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Upcube',
  description:
    'Upcube Terms of Service covering accounts, acceptable use, content, AI features, API usage, warranties, liability, disputes, and more.',
}

type NavItem = {
  id: string
  label: string
}

const NAV: NavItem[] = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'who-we-are', label: '1) Who we are & contact' },
  { id: 'eligibility', label: '2) Eligibility & accounts' },
  { id: 'what-you-can-expect', label: '3) What you can expect from us' },
  { id: 'what-we-expect', label: '4) What we expect from you' },
  { id: 'your-content', label: '5) Your content & permissions' },
  { id: 'ai-features', label: '6) AI features & professional-advice disclaimer' },
  { id: 'software-apis', label: '7) Software, APIs, and updates' },
  { id: 'third-party', label: '8) Third-party content and links' },
  { id: 'service-changes', label: '9) Service changes; availability; data export' },
  { id: 'enforcement', label: '10) Enforcement, removals, suspension, termination' },
  { id: 'ip-brand', label: '11) Intellectual property; brand use' },
  { id: 'warranty', label: '12) Warranty disclaimer' },
  { id: 'liability', label: '13) Limitation of liability' },
  { id: 'indemnification', label: '14) Indemnification' },
  { id: 'dmca', label: '15) DMCA & IP complaints' },
  { id: 'disputes', label: '16) Dispute resolution; governing law; venue' },
  { id: 'changes', label: '17) Changes to these Terms' },
  { id: 'misc', label: '18) Miscellaneous' },
  { id: 'definitions', label: '19) Definitions' },
  { id: 'contact', label: 'Contact Upcube' },
]

function OnThisPageCard() {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/50 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
        <div className="text-xs font-medium tracking-wide text-zinc-300">On this page</div>
        <nav className="mt-3 space-y-1">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block rounded-lg px-2 py-1.5 text-[13px] leading-snug text-zinc-200/90 hover:bg-zinc-900/60 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-700"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}

function SectionTitle({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-[15px] font-semibold tracking-tight text-zinc-100"
    >
      {children}
    </h2>
  )
}

export default function TermsOfServicePage() {
  const effectiveDate = 'January 24, 2026'
  const company = 'Upcube Inc.'
  const hq = 'New York, NY 10005, USA'
  const contactEmail = 'upcube@gmail.com'

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/70 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300">
          <span className="text-zinc-100/90">{company}</span>
          <span className="text-zinc-600">•</span>
          <span>Effective: {effectiveDate}</span>
          <span className="text-zinc-600">•</span>
          <span>Headquarters: {hq}</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          Upcube — Terms of Service
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-300">
          These Terms form a binding agreement between you and {company} when you access or use our
          websites, apps, platforms, APIs, and AI tools (chat, search, voice, image generation, and
          related services) that link to these Terms.
        </p>

        <div className="mt-5 rounded-2xl border border-zinc-800/70 bg-zinc-950/50 p-4 text-sm text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
          <div className="font-medium text-zinc-100">Important</div>
          <p className="mt-1 leading-6">
            This is a general terms template for your product experience and policies. It is not a
            substitute for advice from a qualified attorney. If you operate in regulated markets or
            handle sensitive data, have counsel review this before launch.
          </p>
        </div>
      </div>

      {/* Layout */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
        <OnThisPageCard />

        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/50 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
          {/* Introduction */}
          <SectionTitle id="introduction">Introduction</SectionTitle>
          <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
            <p>
              By using the Services, you agree to these Terms. If you do not agree, do not use the
              Services.
            </p>
            <p>
              Please also review our Privacy Policy (and any service-specific policies or guidelines)
              which explain how we collect, use, and share information.
            </p>
            <p>
              Additional terms may apply to specific features (for example: APIs, enterprise plans,
              beta programs, or integrated third-party services). If those terms conflict with these
              Terms, the feature-specific terms control for that feature.
            </p>
          </div>

          <div className="mt-8 space-y-8">
            {/* 1 */}
            <section>
              <SectionTitle id="who-we-are">1) Who we are & contact</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  <span className="font-medium text-zinc-100">Service provider:</span> {company},
                  organized under the laws of the State of New York, USA.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Principal place of business:</span> {hq}
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Contact:</span> {contactEmail}
                </p>
              </div>
            </section>

            {/* 2 */}
            <section>
              <SectionTitle id="eligibility">2) Eligibility & accounts</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  <span className="font-medium text-zinc-100">Age.</span> You must be old enough to
                  form a binding contract in your location or use the Services with the consent and
                  supervision of a parent or legal guardian. If you are using the Services for an
                  organization, you represent you have authority to bind that organization.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Accounts.</span> Some features require
                  an account. You are responsible for your credentials and all activity under your
                  account. Notify us promptly of suspected compromise.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Administrators.</span> If your account
                  is managed by an organization (for example: a business or school), your
                  administrator may access and manage your account according to their policies.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <SectionTitle id="what-you-can-expect">3) What you can expect from us</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  <span className="font-medium text-zinc-100">A connected suite of Services.</span>{' '}
                  Upcube offers tools that may work together so you can move between tasks (planning,
                  drafting, research, and output creation).
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Continuous improvement.</span> We may
                  add, change, remove features, or launch/retire Services. We aim to provide
                  reasonable notice when changes materially affect usage.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Availability.</span> We strive for
                  reliable access, but we cannot guarantee uninterrupted or error-free operation.
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <SectionTitle id="what-we-expect">4) What we expect from you</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  <span className="font-medium text-zinc-100">Follow the rules.</span> Your permission
                  to use the Services continues only while you comply with these Terms, our Privacy
                  Policy, and any service-specific rules.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Respect others.</span> Comply with
                  applicable laws (including export controls), respect others’ rights (privacy,
                  publicity, IP), and do not abuse or harm anyone.
                </p>

                <div className="mt-3 rounded-xl border border-zinc-800/70 bg-zinc-950/60 p-4">
                  <div className="text-xs font-medium tracking-wide text-zinc-200">
                    Don’t abuse the Services
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                    <li>Introduce malware or attempt to hack, disrupt, or bypass security.</li>
                    <li>Engage in spamming, scraping where disallowed, phishing, or fake accounts.</li>
                    <li>Misrepresent your identity to violate these Terms.</li>
                    <li>Reverse engineer or extract trade secrets except as allowed by law.</li>
                    <li>Use automated means to access content contrary to machine-readable instructions.</li>
                    <li>Use outputs to build, train, or improve competing AI systems where explicitly prohibited.</li>
                    <li>Impersonate Upcube or create confusion about origin or endorsement.</li>
                    <li>Encourage or enable others to violate these Terms.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5 */}
            <section>
              <SectionTitle id="your-content">5) Your content & permissions</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  <span className="font-medium text-zinc-100">Your content remains yours.</span> You
                  retain any rights you have in content you upload, submit, store, send, receive, or
                  share through the Services (“User Content”).
                </p>
                <p>
                  <span className="font-medium text-zinc-100">License you grant to Upcube.</span> You
                  grant Upcube a worldwide, non-exclusive, royalty-free license to host, store,
                  reproduce, process, adapt, publish (only as directed by you), and display your User
                  Content solely to operate, maintain, and improve the Services, including:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-300">
                  <li>Operate the Services (including routing requests and backups).</li>
                  <li>Maintain safety, quality, analytics, troubleshooting, and reliability.</li>
                  <li>Enable features you turn on (sharing, collaboration, export).</li>
                </ul>
                <p>
                  <span className="font-medium text-zinc-100">Your responsibility.</span> You are
                  responsible for your User Content and ensuring you have rights to upload/share it
                  and that it is lawful.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Feedback.</span> If you send ideas or
                  suggestions, you grant Upcube permission to use them without restriction or
                  compensation.
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <SectionTitle id="ai-features">
                6) AI features & professional-advice disclaimer
              </SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  AI outputs may be inaccurate, incomplete, offensive, or otherwise unexpected. Do
                  not rely on outputs as a sole source of truth.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">No professional advice.</span> The
                  Services are not medical, legal, financial, or other professional advice. You are
                  responsible for verifying outputs before using them in real-world decisions.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Human in control.</span> You are
                  responsible for how you use outputs. Where required by law or policy, you must
                  disclose that AI was used.
                </p>
              </div>
            </section>

            {/* 7 */}
            <section>
              <SectionTitle id="software-apis">7) Software, APIs, and updates</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  Some Services include downloadable software or provide access via APIs/SDKs. Subject
                  to these Terms, Upcube grants you a personal, non-transferable, non-sublicensable,
                  revocable, royalty-free license to use them solely as part of the Services.
                </p>
                <p>
                  We may automatically update software to improve performance, security, or
                  compatibility. Some settings may let you control automatic updates.
                </p>
                <p>
                  Open-source components are licensed under their own terms and may override parts of
                  this section.
                </p>
              </div>
            </section>

            {/* 8 */}
            <section>
              <SectionTitle id="third-party">8) Third-party content and links</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  The Services may display or enable access to third-party content, products, or
                  services. We do not control third parties and are not responsible for them. Your
                  use may be governed by third-party terms and privacy policies.
                </p>
              </div>
            </section>

            {/* 9 */}
            <section>
              <SectionTitle id="service-changes">
                9) Service changes; availability; data export
              </SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  We may change, discontinue, or suspend features or Services. If a change materially
                  and adversely affects your use, we will provide reasonable notice when feasible.
                </p>
                <p>
                  Where feasible, we will offer reasonable ways to export your data stored with us.
                  Export options may vary by Service and plan.
                </p>
              </div>
            </section>

            {/* 10 */}
            <section>
              <SectionTitle id="enforcement">
                10) Enforcement, removals, suspension, termination
              </SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  Before taking action, we will, when reasonably possible, provide notice, describe
                  the reason, and offer an opportunity to resolve the issue unless doing so would
                  cause harm or violate law.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Content removals.</span> We may remove
                  or block content that violates these Terms, service-specific policies, or law
                  (including CSAM, trafficking, terrorist content, harassment, or infringing
                  material).
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Account action.</span> We may suspend
                  or terminate access (or delete accounts) for material or repeated violations,
                  illegal requirements, or harmful conduct.
                </p>
                <p>
                  If you believe we took action in error, contact {contactEmail}.
                </p>
              </div>
            </section>

            {/* 11 */}
            <section>
              <SectionTitle id="ip-brand">11) Intellectual property; brand use</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  Upcube and its licensors own the Services and related IP. These Terms do not grant
                  you rights to use our trademarks, logos, or branding except as permitted by our
                  brand guidelines or with prior written permission.
                </p>
                <p>
                  Do not remove or alter legal notices displayed in or with the Services.
                </p>
              </div>
            </section>

            {/* 12 */}
            <section>
              <SectionTitle id="warranty">12) Warranty disclaimer</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p className="uppercase text-zinc-200">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED “AS IS” AND “AS
                  AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY,
                  INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  TITLE, AND NON-INFRINGEMENT.
                </p>
                <p>
                  We do not warrant that the Services will be accurate, reliable, available, secure,
                  error-free, or uninterrupted, or that defects will be corrected.
                </p>
              </div>
            </section>

            {/* 13 */}
            <section>
              <SectionTitle id="liability">13) Limitation of liability</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p className="uppercase text-zinc-200">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, UPCUBE WILL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST
                  PROFITS, REVENUES, BUSINESS, GOODWILL, DATA, OR SAVINGS, EVEN IF ADVISED OF THE
                  POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="uppercase text-zinc-200">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR CLAIMS ARISING OUT
                  OF OR RELATING TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A)
                  US $100 OR (B) THE AMOUNTS YOU PAID TO UPCUBE FOR THE SERVICES THAT GAVE RISE TO THE
                  CLAIM DURING THE 12 MONTHS BEFORE THE EVENT.
                </p>
                <p>
                  Some jurisdictions do not allow certain limitations; in those cases, limitations
                  apply only to the extent permitted by law.
                </p>
              </div>
            </section>

            {/* 14 */}
            <section>
              <SectionTitle id="indemnification">14) Indemnification</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  If you use the Services on behalf of a business or organization, to the extent
                  permitted by law, you will indemnify and hold harmless Upcube and its officers,
                  directors, employees, agents, and contractors from any claims, liabilities, damages,
                  losses, and expenses (including reasonable attorneys’ fees) arising out of:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-300">
                  <li>Your use of the Services,</li>
                  <li>Your User Content,</li>
                  <li>Your violation of these Terms,</li>
                  <li>Your violation of any rights of another person or entity.</li>
                </ul>
              </div>
            </section>

            {/* 15 */}
            <section>
              <SectionTitle id="dmca">15) DMCA & IP complaints</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  We respect intellectual property rights. If you believe content on the Services
                  infringes your rights, send a notice to {contactEmail} with sufficient information
                  to identify the material and your claim. We may remove or disable access to the
                  material and, where appropriate, terminate repeat infringers.
                </p>
              </div>
            </section>

            {/* 16 */}
            <section>
              <SectionTitle id="disputes">16) Dispute resolution; governing law; venue</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  <span className="font-medium text-zinc-100">Contact us first.</span> Most issues can
                  be resolved informally. Please email {contactEmail} before starting a formal dispute.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Governing law.</span> These Terms and
                  disputes arising out of or relating to them or the Services are governed by the laws
                  of the State of New York, without regard to conflict-of-law rules.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Venue.</span> You and Upcube agree to the
                  exclusive jurisdiction and venue of the state and federal courts located in New York
                  County, New York, and consent to personal jurisdiction in those courts.
                </p>
                <p>
                  Nothing here limits either party’s ability to seek equitable relief to prevent
                  unauthorized use or misuse of the Services or IP infringement.
                </p>
              </div>
            </section>

            {/* 17 */}
            <section>
              <SectionTitle id="changes">17) Changes to these Terms</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  We may update these Terms from time to time. If we make material changes, we will
                  provide reasonable notice (for example, by email or in-product) and indicate the
                  effective date. Updated Terms will govern your use after they become effective. If
                  you do not agree, you must stop using the Services before the effective date.
                </p>
              </div>
            </section>

            {/* 18 */}
            <section>
              <SectionTitle id="misc">18) Miscellaneous</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-300">
                  <li>
                    <span className="font-medium text-zinc-100">Entire agreement.</span> These Terms,
                    service-specific terms, and the Privacy Policy form the entire agreement.
                  </li>
                  <li>
                    <span className="font-medium text-zinc-100">Severability.</span> If any provision
                    is unenforceable, the rest remains in effect.
                  </li>
                  <li>
                    <span className="font-medium text-zinc-100">No waiver.</span> Failure to enforce a
                    provision is not a waiver.
                  </li>
                  <li>
                    <span className="font-medium text-zinc-100">Assignment.</span> You may not assign
                    these Terms without consent. Upcube may assign them as part of a merger,
                    acquisition, sale of assets, or by operation of law.
                  </li>
                  <li>
                    <span className="font-medium text-zinc-100">Force majeure.</span> We are not liable
                    for delays or failures caused by events beyond reasonable control.
                  </li>
                  <li>
                    <span className="font-medium text-zinc-100">Export.</span> You must comply with all
                    applicable export control and sanctions laws.
                  </li>
                </ul>
              </div>
            </section>

            {/* 19 */}
            <section>
              <SectionTitle id="definitions">19) Definitions</SectionTitle>
              <div className="mt-2 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  <span className="font-medium text-zinc-100">“Services”</span> means Upcube’s websites,
                  apps, platforms, APIs, and AI features (chat, search, voice, image generation) that
                  link to these Terms.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">“User Content”</span> means any content
                  you upload, submit, store, send, receive, or share through the Services.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">“Including”</span> means including
                  without limitation.
                </p>
                <p>
                  <span className="font-medium text-zinc-100">Optional add-ons (if applicable)</span>{' '}
                  may include paid subscriptions, data portability/export tools, and brand permission
                  guidelines.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <SectionTitle id="contact">Contact Upcube</SectionTitle>
              <div className="mt-2 space-y-2 text-sm leading-6 text-zinc-300">
                <p className="font-medium text-zinc-100">{company}</p>
                <p>{hq}</p>
                <p>{contactEmail}</p>
                <p className="pt-2 text-xs text-zinc-500">Build the future. Stay human.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
