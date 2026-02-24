import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import HomeSignals from "@/components/HomeSignals";
import { getAllSignals } from "@/lib/signals";

const TOOLS = [
  { file: "generator.sh", name: "Generator", desc: "Create the agent-facing file structure for any site. Download as .zip.", href: "/generate" },
  { file: "validate.sh", name: "Validator", desc: "Check your llms.txt and index.json for spec compliance and missing fields.", href: "/validate" },
  { file: "estimate.sh", name: "Token Estimator", desc: "Estimate token count and revenue projections for your agent-facing content.", href: "/estimate" },
  { file: "inspect.sh", name: "Inspector", desc: "Check any domain for agent-readiness. See what's present and what's missing.", href: "/inspect" },
];

export default function HomePage() {
  const signals = getAllSignals();

  return (
    <>
      

      {/* HERO */}
      <div className="hero">
        <h1 className="hero-title">
          The <span className="hero-accent">Agent Web</span> — live.
        </h1>
        <p className="hero-desc">
          Ecosystem signals, publisher tools, and the specification for
          structured AI agent content. Updated daily.
        </p>
        <div className="learn-callout-hero">
          <span className="learn-callout-text"># New to AI agents?</span>
          <Link href="/learn" className="learn-callout-link">Start here →</Link>
        </div>
      </div>

      {/* SIGNALS */}
      <div className="section" id="signals">
        <div className="section-header">
          <span className="section-title">Latest Signals</span>
          <Link href="/signals" className="section-link">View all →</Link>
        </div>
        <HomeSignals signals={signals} />
      </div>

      {/* TOOLS */}
      <div className="section" id="tools">
        <div className="section-header">
          <span className="section-title">Publisher Tools</span>
        </div>
        <div className="tools-grid">
          {TOOLS.map((t) => (
            <ToolCard key={t.name} {...t} />
          ))}
        </div>
      </div>

      {/* MANIFESTO */}
      <div className="manifesto" id="manifesto" style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 48px" }}>
        <div className="section-header">
          <span className="section-title">Manifesto</span>
        </div>
        <section>
          <p>The Agent Web is a structural shift in how the internet is consumed.</p>
          <p><strong>Humans browse pages. AI agents execute workflows.</strong></p>
          <p>This shift transforms everything:</p>

          <table className="comparison-table">
            <thead>
              <tr>
                <th className="th-dim"></th>
                <th className="th-dim">Human Web</th>
                <th className="th-accent">Agent Web</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Representation", "HTML", "Markdown / JSON"],
                ["Access control", "robots.txt", "Enforced edge policy"],
                ["Monetization", "Ads", "Pay-per-crawl / HTTP 402"],
                ["Execution", "Manual browsing", "Autonomous action"],
                ["Trust", "Implicit", "Cryptographic / provenance"],
              ].map(([label, human, agent]) => (
                <tr key={label}>
                  <td className="td-label">{label}</td>
                  <td className="td-dim">{human}</td>
                  <td className="td-bright">{agent}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>The Agent Web is not a UX evolution. It is an economic and infrastructural realignment.</p>
        </section>

        <hr className="manifesto-hr" />

        <section>
          <h2><span className="h2-prefix">## </span>Representation: HTML Is No Longer the Substrate</h2>
          <p>HTML is noisy, token-inefficient, layout-dependent, and injection-prone. An AI agent consuming HTML must:</p>
          <div className="flow">
            {["fetch", "extract", "sanitize", "convert", "chunk", "reason"].map((step, i, arr) => (
              <span key={step}>
                {step}
                {i < arr.length - 1 && <span className="flow-arrow">→</span>}
              </span>
            ))}
          </div>
          <p>Every step adds cost and unreliability. The conversion target is always <strong>Markdown</strong> (hierarchical, compact) or <strong>JSON</strong> (structured, deterministic).</p>

          <h3><span className="h3-prefix">### </span>Why Markdown Wins</h3>
          <ul>
            <li>Stable chunking by headings</li>
            <li>~3-5× fewer tokens than equivalent HTML</li>
            <li>Cleaner RAG ingestion</li>
            <li>Reduced prompt-injection surface</li>
            <li>Versionable as plain-text artifacts</li>
          </ul>
        </section>

        <hr className="manifesto-hr" />

        <section>
          <h2><span className="h2-prefix">## </span>Monetization: 402 as the Machine Handshake</h2>
          <p>Traditional web revenue depends on human attention: ads, impressions, affiliate clicks. AI agents eliminate the visit. Every AI-mediated answer that replaces a page load is lost publisher revenue.</p>

          <h3><span className="h3-prefix">### </span>The Agent Web Model</h3>
          <div className="highlight-box">
            <p>1. AI agent requests resource</p>
            <p>2. Server responds <code>402 Payment Required</code> with price metadata</p>
            <p>3. AI agent evaluates price against task value</p>
            <p>4. AI agent pays</p>
            <p>5. Server returns content + receipt</p>
          </div>

          <h3><span className="h3-prefix">### </span>Sample Economics</h3>
          <p>100,000 indexed pages. 1,000 AI crawls per page per month. 20% monetized. $0.002 per crawl.</p>
          <div className="revenue-callout">$480,000/year</div>
        </section>

        <hr className="manifesto-hr" />

        <section>
          <h2><span className="h2-prefix">## </span>Publisher Implementation Blueprint</h2>
          <pre><code>{`/llms.txt                    # Agent routing manifest
/agent/index.json            # Machine-readable document registry
/agent/docs/{doc-id}.md      # Structured content (markdown)
/agent/pricing.json          # Pricing boundaries and tiers
/agent/changelog.json        # Version history`}</code></pre>
          <div className="highlight-box">
            <p><strong>This site is a live example.</strong> Inspect <a href="/llms.txt">/llms.txt</a>, <a href="/agent/index.json">/agent/index.json</a>, and the <a href="/agent/docs/manifesto.md">source markdown</a> that generated this page.</p>
          </div>
        </section>

        <hr className="manifesto-hr" />

        <section>
          <h2><span className="h2-prefix">## </span>Security: The Instruction Authority Model</h2>
          <p>Agent-readable publishing creates a structural paradox: publishers want to provide instructions to AI agents. <em>Attackers also want to provide instructions to AI agents.</em></p>
          <div className="trust-levels">
            <div className="trust-level trust-level-1">
              <div className="trust-level-name">Level 1 — Root-Trusted</div>
              <p><code>/llms.txt</code> and declared agent endpoints. System-level authority.</p>
            </div>
            <div className="trust-level trust-level-2">
              <div className="trust-level-name">Level 2 — Authenticated-Trusted</div>
              <p>Session-bound instructions from verified publishers. Application-level authority.</p>
            </div>
            <div className="trust-level trust-level-3">
              <div className="trust-level-name">Level 3 — Untrusted</div>
              <p>HTML body content, user-generated text, third-party embeds. No instruction authority.</p>
            </div>
          </div>
        </section>

        <hr className="manifesto-hr" />

        <section>
          <h2><span className="h2-prefix">## </span>Strategic Insight</h2>
          <table className="shift-table">
            <tbody>
              {[
                ["Content", "Versioned Knowledge Objects"],
                ["Pages", "Billable Resources"],
                ["Crawling", "Negotiated Economic Interaction"],
                ["Instructions", "Authenticated Policy"],
              ].map(([old, nw]) => (
                <tr key={old}>
                  <td className="shift-old">{old}</td>
                  <td className="shift-arrow">→</td>
                  <td className="shift-new">{nw}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Markdown becomes the canonical agent payload. HTTP 402 becomes the canonical agent handshake. Trust signatures become inevitable.</p>
        </section>

        <hr className="manifesto-hr" />

        <section>
          <h2><span className="h2-prefix">## </span>Conclusion</h2>
          <p>The Agent Web is a parallel infrastructure emerging inside the existing internet. It is API-like, monetized, structured, adversarial, economically sensitive, and security constrained.</p>
          <p>Publishers who treat it as &quot;SEO for bots&quot; will fail.</p>
          <p>Publishers who treat it as <strong>a machine-facing knowledge API — with economic negotiation, versioned artifacts, and cryptographic trust</strong> — will define the next layer of the web.</p>
        </section>
      </div>

      {/* EMAIL */}
      <div className="section">
        <div className="email-section">
          <h3>Follow the spec</h3>
          <p>Get notified as the Agent Web specification evolves.</p>
          <div className="email-form">
            <input type="email" className="email-input" placeholder="you@domain.com" />
            <button className="email-btn">Subscribe</button>
          </div>
        </div>
      </div>

      
    </>
  );
}
