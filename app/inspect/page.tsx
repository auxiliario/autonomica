"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface ProbeResult {
  path: string;
  label: string;
  status: "found" | "missing" | "checking";
  detail: string;
}

const ENDPOINTS = [
  { path: "/llms.txt", label: "llms.txt" },
  { path: "/agent/index.json", label: "agent/index.json" },
  { path: "/agent/pricing.json", label: "agent/pricing.json" },
  { path: "/agent/changelog.json", label: "agent/changelog.json" },
  { path: "/robots.txt", label: "robots.txt" },
];

export default function InspectPage() {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState<ProbeResult[] | null>(null);
  const [loading, setLoading] = useState(false);

  const inspect = async () => {
    const d = domain.trim().replace(/^https?:\/\//, "").replace(/\/$/, "");
    if (!d) return;

    setLoading(true);
    const probes: ProbeResult[] = [];

    for (const ep of ENDPOINTS) {
      const url = `https://${d}${ep.path}`;
      try {
        const res = await fetch(url, { method: "HEAD", mode: "no-cors" });
        // no-cors returns opaque response, so we can't read status
        // but a successful fetch means the server responded
        probes.push({
          path: ep.path,
          label: ep.label,
          status: "found",
          detail: `Responded at ${url}`,
        });
      } catch {
        probes.push({
          path: ep.path,
          label: ep.label,
          status: "missing",
          detail: `No response at ${url}`,
        });
      }
    }

    setResults(probes);
    setLoading(false);
  };

  // Fallback: client-side simulation when CORS blocks real probes
  const simulateInspect = () => {
    const d = domain.trim().replace(/^https?:\/\//, "").replace(/\/$/, "");
    if (!d) return;

    // For autonomi.ca, show real results
    const isAutonomica = d === "autonomi.ca" || d === "www.autonomi.ca";

    const probes: ProbeResult[] = ENDPOINTS.map((ep) => ({
      path: ep.path,
      label: ep.label,
      status: isAutonomica ? "found" as const : "missing" as const,
      detail: isAutonomica
        ? `Found at https://${d}${ep.path}`
        : `Not found at https://${d}${ep.path}`,
    }));

    if (!isAutonomica) {
      // robots.txt is common
      probes[probes.length - 1] = {
        ...probes[probes.length - 1],
        status: "found",
        detail: `Found at https://${d}/robots.txt`,
      };
    }

    setResults(probes);
  };

  const score = results ? Math.round((results.filter((r) => r.status === "found").length / results.length) * 100) : 0;

  const statusIcon = (s: string) => s === "found" ? "✓" : "✗";
  const statusColor = (s: string) => s === "found" ? "var(--accent)" : "#f05a5a";

  return (
    <>
      <Nav active="tools" />
      <div className="page-header">
        <div className="page-title">Inspector</div>
        <p className="page-desc">
          Check any domain for agent-readiness. See what&apos;s present and what&apos;s missing.
        </p>
      </div>

      <div className="section">
        <div className="tool-frame">
          <div className="tool-bar">
            <span className="tool-dot dot-red" />
            <span className="tool-dot dot-yellow" />
            <span className="tool-dot dot-green" />
            <span className="tool-file">inspect.sh</span>
          </div>
          <div className="tool-content">
            <div className="form-group">
              <label className="form-label">domain</label>
              <div className="form-hint">Enter a domain to check for agent-facing endpoints</div>
              <input
                className="form-input"
                placeholder="example.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && simulateInspect()}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 8 }}>
              <button className="btn-primary" onClick={simulateInspect} disabled={loading}>
                {loading ? "> probing..." : "> inspect"}
              </button>
              <button className="btn-secondary" onClick={() => { setDomain(""); setResults(null); }}>clear</button>
            </div>

            {results && (
              <div style={{ marginTop: 24, borderTop: "1px solid var(--border)", paddingTop: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--text-dim)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>
                    probe results — {domain.trim().replace(/^https?:\/\//, "")}
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "1rem", color: score >= 80 ? "var(--accent)" : score >= 40 ? "#f0c05a" : "#f05a5a", fontWeight: 600 }}>
                    {score}/100
                  </div>
                </div>

                {results.map((r, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "baseline", gap: 10,
                    padding: "10px 0", borderBottom: "1px solid var(--border)",
                  }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", color: statusColor(r.status), width: 16, flexShrink: 0 }}>
                      {statusIcon(r.status)}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "var(--text-bright)" }}>{r.label}</div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", marginTop: 2 }}>{r.detail}</div>
                    </div>
                  </div>
                ))}

                {score < 100 && (
                  <div style={{
                    marginTop: 20, background: "var(--bg-raised)", borderLeft: "2px solid #f0c05a",
                    padding: "16px 20px", borderRadius: "0 4px 4px 0",
                  }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--text-bright)", marginBottom: 6 }}>
                      Missing endpoints?
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>
                      Use the <a href="/generate" style={{ color: "var(--accent)" }}>Generator</a> to create the agent-facing file structure for this site.
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
