"use client";

import { useState } from "react";

interface CheckResult {
  label: string;
  status: "pass" | "fail" | "warn";
  detail: string;
}

export default function ValidatePage() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"llms.txt" | "index.json">("llms.txt");
  const [results, setResults] = useState<CheckResult[] | null>(null);

  const validate = () => {
    if (!input.trim()) return;
    const checks: CheckResult[] = [];

    if (mode === "llms.txt") {
      checks.push({
        label: "site_name declared",
        status: input.includes("site_name") ? "pass" : "fail",
        detail: input.includes("site_name") ? "Found site_name field." : "Missing > site_name: field.",
      });
      checks.push({
        label: "description declared",
        status: input.includes("description") ? "pass" : "fail",
        detail: input.includes("description") ? "Found description field." : "Missing > description: field.",
      });
      checks.push({
        label: "at least one doc",
        status: input.includes("> doc:") ? "pass" : "fail",
        detail: input.includes("> doc:") ? `Found ${(input.match(/> doc:/g) || []).length} document(s).` : "No > doc: entries found.",
      });
      checks.push({
        label: "pricing endpoint",
        status: input.includes("pricing") ? "pass" : "warn",
        detail: input.includes("pricing") ? "Pricing reference found." : "No pricing endpoint. Recommended for 402 monetization.",
      });
      checks.push({
        label: "changelog endpoint",
        status: input.includes("changelog") ? "pass" : "warn",
        detail: input.includes("changelog") ? "Changelog reference found." : "No changelog. Helps agents detect content updates.",
      });
      checks.push({
        label: "uses > prefix syntax",
        status: input.includes("> ") ? "pass" : "fail",
        detail: input.includes("> ") ? "Correct key-value syntax." : "Lines should use > key: value format.",
      });
    } else {
      let parsed: Record<string, unknown> | null = null;
      try {
        parsed = JSON.parse(input);
        checks.push({ label: "valid JSON", status: "pass", detail: "Parsed successfully." });
      } catch {
        checks.push({ label: "valid JSON", status: "fail", detail: "Invalid JSON. Check syntax." });
      }
      if (parsed) {
        checks.push({
          label: "name field",
          status: "name" in parsed ? "pass" : "fail",
          detail: "name" in parsed ? `Site name: "${parsed.name}"` : "Missing required 'name' field.",
        });
        checks.push({
          label: "url field",
          status: "url" in parsed ? "pass" : "fail",
          detail: "url" in parsed ? `URL: ${parsed.url}` : "Missing required 'url' field.",
        });
        checks.push({
          label: "version field",
          status: "version" in parsed ? "pass" : "warn",
          detail: "version" in parsed ? `Version: ${parsed.version}` : "No version. Recommended for cache management.",
        });
        checks.push({
          label: "documents array",
          status: Array.isArray((parsed as Record<string, unknown>).documents) ? "pass" : "fail",
          detail: Array.isArray((parsed as Record<string, unknown>).documents)
            ? `Found ${((parsed as Record<string, unknown>).documents as unknown[]).length} document(s).`
            : "Missing or invalid 'documents' array.",
        });
      }
    }

    setResults(checks);
  };

  const statusIcon = (s: string) => s === "pass" ? "✓" : s === "fail" ? "✗" : "⚠";
  const statusColor = (s: string) => s === "pass" ? "var(--accent)" : s === "fail" ? "#f05a5a" : "#f0c05a";

  return (
    <>
      
      <div className="page-header">
        <div className="page-title">Validator</div>
        <p className="page-desc">
          Check your llms.txt or index.json for spec compliance and missing fields.
        </p>
      </div>

      <div className="section">
        <div className="tool-frame">
          <div className="tool-bar">
            <span className="tool-dot dot-red" />
            <span className="tool-dot dot-yellow" />
            <span className="tool-dot dot-green" />
            <span className="tool-file">validate.sh</span>
          </div>
          <div className="tool-content">
            <div className="form-group">
              <label className="form-label">mode</label>
              <div className="form-checks">
                <label className="form-check">
                  <input type="checkbox" checked={mode === "llms.txt"} onChange={() => setMode("llms.txt")} /> llms.txt
                </label>
                <label className="form-check">
                  <input type="checkbox" checked={mode === "index.json"} onChange={() => setMode("index.json")} /> index.json
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">paste your {mode}</label>
              <textarea
                className="form-textarea"
                style={{ minHeight: 180 }}
                placeholder={mode === "llms.txt" ? "# example.com\n> site_name: ...\n> doc: /agent/docs/..." : '{\n  "name": "...",\n  "url": "...",\n  "documents": []\n}'}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 8 }}>
              <button className="btn-primary" onClick={validate}>&gt; validate</button>
              <button className="btn-secondary" onClick={() => { setInput(""); setResults(null); }}>clear</button>
            </div>

            {results && (
              <div style={{ marginTop: 24, borderTop: "1px solid var(--border)", paddingTop: 24 }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--text-dim)", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 16 }}>
                  results — {results.filter((r) => r.status === "pass").length}/{results.length} checks passed
                </div>
                {results.map((r, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "baseline", gap: 10,
                    padding: "10px 0", borderBottom: "1px solid var(--border)",
                  }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", color: statusColor(r.status), width: 16, flexShrink: 0 }}>
                      {statusIcon(r.status)}
                    </span>
                    <div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "var(--text-bright)" }}>{r.label}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginTop: 2 }}>{r.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      
    </>
  );
}
