"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const CONTENT_TYPES = ["documentation", "api reference", "blog/articles", "datasets", "research papers"];
const PRICING_MODELS = ["free tier", "per-request (402)", "subscription"];

export default function GeneratePage() {
  const [domain, setDomain] = useState("");
  const [siteName, setSiteName] = useState("");
  const [description, setDescription] = useState("");
  const [contentTypes, setContentTypes] = useState<string[]>(["documentation"]);
  const [pricingModels, setPricingModels] = useState<string[]>(["free tier"]);
  const [generated, setGenerated] = useState(false);
  const [activeTab, setActiveTab] = useState("llms.txt");

  const toggleCheck = (list: string[], item: string, setter: (v: string[]) => void) => {
    setter(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  const generate = () => {
    if (!domain) return;
    setGenerated(true);
  };

  const reset = () => {
    setDomain("");
    setSiteName("");
    setDescription("");
    setContentTypes(["documentation"]);
    setPricingModels(["free tier"]);
    setGenerated(false);
    setActiveTab("llms.txt");
  };

  const d = domain || "example.com";
  const sn = siteName || "My Knowledge Base";
  const desc = description || "Structured content for AI agents.";

  const previews: Record<string, string> = {
    "llms.txt": `# ${d}\n# Agent-facing content manifest\n\n> site_name: ${sn}\n> description: ${desc}\n\n# Documents\n> doc: /agent/docs/overview.md\n> doc: /agent/docs/getting-started.md\n\n# Endpoints\n> pricing: /agent/pricing.json\n> changelog: /agent/changelog.json`,
    "index.json": JSON.stringify({
      name: sn,
      url: `https://${d}`,
      version: "0.1.0",
      documents: [
        { id: "overview", title: "Overview", path: "/agent/docs/overview.md", format: "markdown" },
        { id: "getting-started", title: "Getting Started", path: "/agent/docs/getting-started.md", format: "markdown" },
      ],
    }, null, 2),
    "pricing.json": JSON.stringify({
      version: "0.1.0",
      currency: "USD",
      tiers: {
        free: {
          description: "Public documentation and discovery.",
          endpoints: ["/llms.txt", "/agent/index.json", "/agent/docs/*"],
          rate_limit: "100 requests/hour",
        },
        ...(pricingModels.includes("per-request (402)") ? {
          paid: {
            description: "Full content access. HTTP 402 enforced.",
            pricing_model: "per-request",
            price_range: { min: 0.0005, max: 0.005, unit: "USD per request" },
          },
        } : {}),
      },
    }, null, 2),
    "doc.md": `# Overview\n\n${sn} provides structured content for AI agents.\n\n## What's Available\n\n${contentTypes.map((t) => `- ${t}`).join("\n")}\n\n## Access\n\nAll content is served as Markdown from \`/agent/docs/\`. See \`/agent/index.json\` for the full document registry.`,
  };

  const files = [
    { name: "llms.txt", size: `${new Blob([previews["llms.txt"]]).size} B` },
    { name: "agent/index.json", size: `${new Blob([previews["index.json"]]).size} B` },
    { name: "agent/pricing.json", size: `${new Blob([previews["pricing.json"]]).size} B` },
    { name: "agent/docs/overview.md", size: `${new Blob([previews["doc.md"]]).size} B` },
  ];

  const handleDownload = () => {
    const blob = new Blob(
      [
        `=== llms.txt ===\n${previews["llms.txt"]}\n\n`,
        `=== agent/index.json ===\n${previews["index.json"]}\n\n`,
        `=== agent/pricing.json ===\n${previews["pricing.json"]}\n\n`,
        `=== agent/docs/overview.md ===\n${previews["doc.md"]}`,
      ],
      { type: "text/plain" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${d.replace(/\./g, "-")}-agent-files.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Nav active="tools" />
      <div className="page-header">
        <div className="page-title">Generator</div>
        <p className="page-desc">
          Create the agent-facing file structure for any site. Generates llms.txt,
          index.json, pricing.json, and markdown docs.
        </p>
      </div>

      <div className="section">
        <div className="tool-frame">
          <div className="tool-bar">
            <span className="tool-dot dot-red" />
            <span className="tool-dot dot-yellow" />
            <span className="tool-dot dot-green" />
            <span className="tool-file">generator.sh</span>
          </div>
          <div className="tool-content">
            <div className="form-group">
              <label className="form-label">domain</label>
              <input className="form-input" placeholder="example.com" value={domain} onChange={(e) => setDomain(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">site_name</label>
              <input className="form-input" placeholder="My Knowledge Base" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">description</label>
              <div className="form-hint">Brief description of the site&apos;s content for agents</div>
              <textarea className="form-textarea" placeholder="Structured documentation and API references for..." value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">content_types</label>
              <div className="form-hint">What kind of content will agents access?</div>
              <div className="form-checks">
                {CONTENT_TYPES.map((t) => (
                  <label key={t} className="form-check">
                    <input type="checkbox" checked={contentTypes.includes(t)} onChange={() => toggleCheck(contentTypes, t, setContentTypes)} /> {t}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">pricing_model</label>
              <div className="form-checks">
                {PRICING_MODELS.map((p) => (
                  <label key={p} className="form-check">
                    <input type="checkbox" checked={pricingModels.includes(p)} onChange={() => toggleCheck(pricingModels, p, setPricingModels)} /> {p}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 8 }}>
              <button className="btn-primary" onClick={generate}>&gt; generate</button>
              <button className="btn-secondary" onClick={reset}>reset</button>
            </div>

            {generated && (
              <div style={{ marginTop: 24, borderTop: "1px solid var(--border)", paddingTop: 24 }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--text-dim)", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 12 }}>
                  preview
                </div>
                <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--border)" }}>
                  {Object.keys(previews).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        fontFamily: "var(--mono)", fontSize: "0.7rem",
                        color: activeTab === tab ? "var(--accent)" : "var(--text-dim)",
                        background: "none", border: "none", padding: "8px 16px", cursor: "pointer",
                        borderBottom: activeTab === tab ? "2px solid var(--accent)" : "2px solid transparent",
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <pre style={{
                  background: "var(--bg-code)", border: "1px solid var(--border)", borderTop: "none",
                  borderRadius: "0 0 4px 4px", padding: "16px 20px", overflow: "auto",
                  fontFamily: "var(--mono)", fontSize: "0.78rem", color: "var(--text)", lineHeight: 1.6, whiteSpace: "pre-wrap",
                }}>
                  {previews[activeTab]}
                </pre>

                <div style={{ marginTop: 16, fontFamily: "var(--mono)", fontSize: "0.75rem", color: "var(--text-dim)", lineHeight: 1.8 }}>
                  {files.map((f) => (
                    <div key={f.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "var(--accent)", fontSize: "0.7rem" }}>📄</span>
                      <span style={{ color: "var(--text)" }}>{f.name}</span>
                      <span style={{ fontSize: "0.65rem" }}>— {f.size}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 16 }}>
                  <button className="btn-primary" onClick={handleDownload}>&gt; download</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
