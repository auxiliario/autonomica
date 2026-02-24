"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function EstimatePage() {
  const [pages, setPages] = useState("1000");
  const [avgWords, setAvgWords] = useState("500");
  const [crawlsPerPage, setCrawlsPerPage] = useState("100");
  const [pricePerCrawl, setPricePerCrawl] = useState("0.002");
  const [monetizedPct, setMonetizedPct] = useState("20");
  const [estimated, setEstimated] = useState(false);

  const numPages = parseInt(pages) || 0;
  const numWords = parseInt(avgWords) || 0;
  const numCrawls = parseInt(crawlsPerPage) || 0;
  const price = parseFloat(pricePerCrawl) || 0;
  const pct = parseInt(monetizedPct) || 0;

  const tokensPerPage = Math.round(numWords * 1.33);
  const totalTokens = numPages * tokensPerPage;
  const monthlyPaidCrawls = numPages * numCrawls * (pct / 100);
  const monthlyRevenue = monthlyPaidCrawls * price;
  const annualRevenue = monthlyRevenue * 12;

  const fmt = (n: number) => n >= 1000000 ? `${(n / 1000000).toFixed(1)}M` : n >= 1000 ? `${(n / 1000).toFixed(0)}K` : n.toString();
  const fmtUSD = (n: number) => n >= 1000 ? `$${(n / 1000).toFixed(1)}K` : `$${n.toFixed(2)}`;

  return (
    <>
      <Nav active="tools" />
      <div className="page-header">
        <div className="page-title">Token Estimator</div>
        <p className="page-desc">
          Estimate token count and revenue projections for your agent-facing content.
        </p>
      </div>

      <div className="section">
        <div className="tool-frame">
          <div className="tool-bar">
            <span className="tool-dot dot-red" />
            <span className="tool-dot dot-yellow" />
            <span className="tool-dot dot-green" />
            <span className="tool-file">estimate.sh</span>
          </div>
          <div className="tool-content">
            <div className="form-group">
              <label className="form-label">indexed_pages</label>
              <div className="form-hint">Total pages with agent-facing content</div>
              <input className="form-input" type="number" value={pages} onChange={(e) => setPages(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">avg_words_per_page</label>
              <input className="form-input" type="number" value={avgWords} onChange={(e) => setAvgWords(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">crawls_per_page_per_month</label>
              <div className="form-hint">Estimated AI agent visits per page per month</div>
              <input className="form-input" type="number" value={crawlsPerPage} onChange={(e) => setCrawlsPerPage(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">price_per_crawl (USD)</label>
              <input className="form-input" type="number" step="0.001" value={pricePerCrawl} onChange={(e) => setPricePerCrawl(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">monetized_percentage</label>
              <div className="form-hint">% of pages behind 402 paywall</div>
              <input className="form-input" type="number" value={monetizedPct} onChange={(e) => setMonetizedPct(e.target.value)} />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 8 }}>
              <button className="btn-primary" onClick={() => setEstimated(true)}>&gt; estimate</button>
              <button className="btn-secondary" onClick={() => setEstimated(false)}>reset</button>
            </div>

            {estimated && (
              <div style={{ marginTop: 24, borderTop: "1px solid var(--border)", paddingTop: 24 }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--text-dim)", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 16 }}>
                  projection
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    { label: "tokens per page", value: fmt(tokensPerPage) },
                    { label: "total token surface", value: fmt(totalTokens) },
                    { label: "monthly paid crawls", value: fmt(monthlyPaidCrawls) },
                    { label: "monthly revenue", value: fmtUSD(monthlyRevenue) },
                  ].map((s) => (
                    <div key={s.label} style={{
                      background: "var(--bg-card)", border: "1px solid var(--border)",
                      borderRadius: 8, padding: "14px 16px",
                    }}>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", color: "var(--text-dim)", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 4 }}>
                        {s.label}
                      </div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "1.2rem", color: "var(--accent)", fontWeight: 600 }}>
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: 20, background: "var(--bg-raised)", borderLeft: "2px solid var(--accent)",
                  padding: "20px 24px", borderRadius: "0 4px 4px 0",
                }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", color: "var(--text-dim)", marginBottom: 4 }}>
                    estimated annual revenue
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "1.8rem", color: "var(--accent)", fontWeight: 600 }}>
                    {fmtUSD(annualRevenue)}/year
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-dim)", marginTop: 8 }}>
                    Based on {fmt(numPages)} pages × {numCrawls} crawls/mo × {pct}% monetized × ${price}/crawl
                  </div>
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
