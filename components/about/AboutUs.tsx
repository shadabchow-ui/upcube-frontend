"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AboutUs.module.css";

type NavItem = { id: string; label: string };

export default function AboutUs() {
  const nav: NavItem[] = useMemo(
    () => [
      { id: "mission", label: "Our mission" },
      { id: "vision", label: "Our vision" },
      { id: "build", label: "What we build" },
      { id: "principles", label: "Principles" },
      { id: "how", label: "How Upcube works" },
      { id: "do", label: "What you can do" },
      { id: "impact", label: "Impact: poverty & charity" },
      { id: "meaning", label: "Meaning & spirituality" },
      { id: "quantum", label: "AI + Quantum Initiative" },
      { id: "highlights", label: "Recent highlights" },
      { id: "partners", label: "For builders & partners" },
      { id: "headed", label: "Where we’re headed" },
      { id: "careers", label: "Careers" },
      { id: "operate", label: "How we operate" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>("mission");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.45, 0.55],
        rootMargin: "-10% 0px -70% 0px",
      }
    );

    sections.forEach((s) => observerRef.current?.observe(s));

    return () => observerRef.current?.disconnect();
  }, [nav]);

  return (
    <div className={styles.wrap} id="up-about">
      <aside className={styles.nav} aria-label="On this page">
        <div className={styles.navCard}>
          <div className={styles.navTitle}>On this page</div>

          <nav className={styles.navLinks}>
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.navLink} ${activeId === item.id ? styles.active : ""}`}
                onClick={() => setActiveId(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      <main className={styles.main}>
        <section className={styles.section} id="mission" data-spy>
          <h2 className={styles.h2}>Our mission</h2>
          <p className={styles.p}>
            Build practical intelligence that helps people act—clearly, safely, and with control. Upcube exists to turn
            messy situations into good next steps: decisions you can explain, outputs you can edit, and work you can trust.
          </p>
          <p className={`${styles.p} ${styles.muted}`}>We don’t aim to replace people. We aim to expand what capable people can do.</p>
        </section>

        <section className={styles.section} id="vision" data-spy>
          <h2 className={styles.h2}>Our vision</h2>
          <p className={styles.p}><strong>For humans, by humans.</strong> Upcube is built on a simple promise: we don’t replace people—we expand what people can do.</p>
          <p className={styles.p}>
            As automation grows, more people will gain time. But time alone doesn’t create meaning. Upcube exists to help
            that freedom become purpose—creation, learning, service, and discovery—because you want to build, not because
            you’re forced to.
          </p>
          <p className={styles.p}>
            <strong>Software should understand context and help you act.</strong> With long-context systems (up to <strong>256K</strong> context when
            supported), Upcube keeps threads, documents, and complex projects in view—so you can ask better questions,
            get verifiable answers, and move from intention to action.
          </p>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Long context</div>
              <div className={styles.cardText}>Stay in the flow across meetings, specs, and briefs.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Grounded answers</div>
              <div className={styles.cardText}>Quotes, links, and receipts for claims that matter.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Unified modes</div>
              <div className={styles.cardText}>Text · Speech · Voice · Images · Video—one coherent loop.</div>
            </div>
          </div>

          <p className={`${styles.p} ${styles.italic}`}>Build the future. Stay human.</p>
        </section>

        <section className={styles.section} id="build" data-spy>
          <h2 className={styles.h2}>What we build</h2>

          <div className={styles.grid2}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Chat + text intelligence</div>
              <div className={styles.cardText}>
                Long-context assistants that follow instructions, keep state, and produce structured outputs (plans, docs,
                JSON, code) that you can inspect and edit.
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Search (grounded)</div>
              <div className={styles.cardText}>Grounded answers with citations and links you can verify—no black-box hand-waving.</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Speech & voice</div>
              <div className={styles.cardText}>Speech-to-text for capturing intent fast, and text-to-speech for clear narration, accessibility, and natural interaction.</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Image generation</div>
              <div className={styles.cardText}>Photorealistic or stylized outputs with presets, style anchors, and aspect controls for consistent campaigns.</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Video workflows</div>
              <div className={styles.cardText}>Tools to plan, script, summarize, and structure video—turning ideas into teachable, watchable content without losing clarity.</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Purpose & momentum tools</div>
              <div className={styles.cardText}>Systems that turn “I want a better life” into steps you can actually take—habits, projects, learning plans, and service goals.</div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="principles" data-spy>
          <h2 className={styles.h2}>Our principles (Charter)</h2>

          <div className={styles.grid2}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Human agency first</div>
              <ul className={styles.list}>
                <li>AI proposes; humans approve</li>
                <li>Outputs stay editable and reviewable</li>
                <li>We optimize for meaning, not addiction</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Safety by design</div>
              <ul className={styles.list}>
                <li>Guardrails and refusals for risky requests</li>
                <li>Role prompts, review tools, and audit trails</li>
                <li>Staged rollouts; red-team before wide release</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Privacy & stewardship</div>
              <ul className={styles.list}>
                <li>Least-privilege access and granular permissions</li>
                <li>Clear retention & export; customer data stays customer-owned</li>
                <li>Secure connectors and scoped tool access</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Transparency</div>
              <ul className={styles.list}>
                <li>Sources and steps you can inspect</li>
                <li>Grounded search over unverifiable claims</li>
                <li>Explainable actions and logs</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Interoperability</div>
              <ul className={styles.list}>
                <li>Clean JSON APIs and webhooks</li>
                <li>Embeddable widgets for web & product surfaces</li>
                <li>Tool calling that works with your stack</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Reliability at scale</div>
              <ul className={styles.list}>
                <li>Built for high context & bursty traffic</li>
                <li>Multi-channel deployment and routing</li>
                <li>Observability, quotas, and fallbacks</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section} id="how" data-spy>
          <h2 className={styles.h2}>How Upcube works</h2>

          <ol className={styles.steps}>
            <li><strong>Interpret intent</strong> and context.</li>
            <li><strong>Decide the next action</strong> (answer, ask, search, call a tool, speak back, generate images/video structure).</li>
            <li><strong>Respond</strong> while maintaining conversation state.</li>
            <li><strong>Review</strong> with human oversight when stakes matter.</li>
          </ol>

          <p className={styles.p}>
            This loop keeps interactions coherent across long sessions and high volume—text, search, voice, images, and
            video working as one system.
          </p>
        </section>

        <section className={styles.section} id="do" data-spy>
          <h2 className={styles.h2}>What you can do with Upcube</h2>
          <ul className={styles.bullets}>
            <li>Launch customer chat that actually resolves issues—instant routing, grounded answers, clear handoffs.</li>
            <li>Research & draft with citations you can trust—from your sources and the open web.</li>
            <li>Speak hands-free for support, field ops, learning, and accessibility.</li>
            <li>Produce on-brand visuals for product pages, ads, and social in minutes.</li>
            <li>Turn ideas into video: scripts, structure, summaries, and teachable cuts.</li>
            <li>Build momentum: plans that convert purpose into weekly action.</li>
          </ul>
        </section>

        <section className={styles.section} id="impact" data-spy>
          <h2 className={styles.h2}>Impact: poverty & charity</h2>
          <p className={styles.p}>
            A future worth building is not one where a few people win and everyone else is managed. Upcube is building toward
            tools that make it easier for people to show up for each other—especially where life is hardest: poverty,
            instability, loneliness, and lack of access.
          </p>
          <ul className={styles.bullets}>
            <li>Resource navigation: turning “I don’t know where to start” into clear next steps</li>
            <li>Charity coordination: communication, planning, and outcomes tracking</li>
            <li>Community projects: organizing help with transparency and accountability</li>
            <li>Contribution paths: ways to contribute even with limited time or money</li>
          </ul>
          <p className={`${styles.p} ${styles.italic}`}>Impact is not a feature. It’s a responsibility.</p>
        </section>

        <section className={styles.section} id="meaning" data-spy>
          <h2 className={styles.h2}>Meaning & spirituality</h2>
          <p className={styles.p}>
            Even in a world of abundance, people still ask the same questions: Why am I here? What is my life for? How do I
            live with pain and still build something good?
          </p>
          <p className={styles.p}>
            Upcube will support reflection and inner strength—not by replacing faith, community, or tradition—but by helping
            people clarify values, practice discipline, and return to what’s true.
          </p>
          <div className={styles.callout}>
            <strong>Boundary:</strong> Upcube does not claim spiritual authority. We support reflection and practice; we don’t
            tell anyone what to believe.
          </div>
        </section>

        <section className={styles.section} id="quantum" data-spy>
          <h2 className={styles.h2}>AI + Quantum Initiative</h2>
          <p className={styles.p}>
            Humanity carries questions that don’t fit into a spreadsheet: what reality is made of, why the universe exists,
            what consciousness is, and where meaning comes from.
          </p>
          <p className={styles.p}>
            Upcube is planning a long-term direction at the frontier of <strong>AI</strong> and <strong>quantum computing</strong>—not to claim certainty,
            but to strengthen the human search for truth with better tools.
          </p>
          <ul className={styles.bullets}>
            <li>Mapping knowledge across disciplines</li>
            <li>Tracking evidence, assumptions, and uncertainty</li>
            <li>Accelerating hypothesis workflows while keeping human judgment central</li>
            <li>Integrating quantum capabilities when practical and reliable</li>
          </ul>
          <p className={`${styles.p} ${styles.muted}`}>We explore with humility. We don’t claim final answers.</p>
        </section>

        <section className={styles.section} id="highlights" data-spy>
          <h2 className={styles.h2}>Recent highlights</h2>
          <div className={styles.grid2}>
            <div className={styles.card}><div className={styles.cardTitle}>Long context</div><div className={styles.cardText}>Built for deep threads, large docs, and complex projects.</div></div>
            <div className={styles.card}><div className={styles.cardTitle}>Grounded search</div><div className={styles.cardText}>Quote-level citations and linkable sources.</div></div>
            <div className={styles.card}><div className={styles.cardTitle}>Unified modes</div><div className={styles.cardText}>Text · Speech · Voice · Images · Video in one loop.</div></div>
            <div className={styles.card}><div className={styles.cardTitle}>RBAC & audit</div><div className={styles.cardText}>Role-based permissions and history for compliance-ready teams.</div></div>
          </div>
        </section>

        <section className={styles.section} id="partners" data-spy>
          <h2 className={styles.h2}>For builders & partners</h2>
          <div className={styles.pills}>
            <span className={styles.pill}>APIs: chat, search, voice, images, video tooling</span>
            <span className={styles.pill}>Embeds & widgets</span>
            <span className={styles.pill}>Webhooks & tools</span>
          </div>
          <div className={styles.pills} style={{ marginTop: 10 }}>
            <span className={styles.pill}>System/role prompts</span>
            <span className={styles.pill}>Safety rules & brand voice locking</span>
          </div>
          <p className={`${styles.p} ${styles.muted}`} style={{ marginTop: 10 }}>
            Docs: <a className={styles.inlineLink} href="/docs">/docs</a> · Examples: <a className={styles.inlineLink} href="/examples">/examples</a> · Partner:{" "}
            <a className={styles.inlineLink} href="/partners">/partners</a>
          </p>
        </section>

        <section className={styles.section} id="headed" data-spy>
          <h2 className={styles.h2}>Where we’re headed</h2>
          <p className={styles.p}>
            We’re expanding multimodal workflows, strengthening privacy controls, and deepening integrations—so Upcube fits
            naturally into the systems you already use. The goal isn’t more knobs; it’s more clarity. Fewer steps to reach a
            correct, actionable outcome.
          </p>
          <p className={`${styles.p} ${styles.italic}`}>Build the future. Stay human.</p>
        </section>

        <section className={styles.section} id="careers" data-spy>
          <h2 className={styles.h2}>Careers</h2>
          <p className={styles.p}>
            We’re product-driven across engineering, safety, design, and customer experience. If you care about clarity,
            reliability, and human-centered tech, we’d love to meet you.
          </p>
          <a className={styles.btn} href="/careers">View open roles <span aria-hidden="true">→</span></a>
        </section>

        <section className={styles.section} id="operate" data-spy>
          <h2 className={styles.h2}>How we operate</h2>
          <p className={styles.p}>
            <strong>Ship practical capability with transparent controls.</strong> We move quickly, review rigorously, and
            improve continuously based on real-world use. We favor explainability over mystery, and user control over lock-in.
          </p>
          <div className={styles.callout}>
            <strong>Operating belief:</strong> power without meaning becomes noise. Power with meaning becomes a future people want to live in.
          </div>
        </section>

        <section className={styles.section} id="contact" data-spy>
          <h2 className={styles.h2}>Contact</h2>
          <div className={styles.contact}>
            <div><strong>Upcube Inc.</strong></div>
            <div>New York, NY 10005, USA</div>
            <div><a className={styles.inlineLink} href="mailto:upcubeco@gmail.com">upcubeco@gmail.com</a></div>
          </div>
          <p className={`${styles.p} ${styles.muted}`} style={{ marginTop: 14 }}>
            Media & partnerships: <a className={styles.inlineLink} href="/contact">/contact</a> · Support:{" "}
            <a className={styles.inlineLink} href="/support">/support</a>
          </p>
        </section>
      </main>
    </div>
  );
}
