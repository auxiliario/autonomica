"use client";

import { useState } from "react";
import type { Signal } from "@/lib/types";
import SignalCard from "@/components/SignalCard";
import FilterPills from "@/components/FilterPills";

const FILTERS = [
  { label: "topics", options: ["x402", "llms.txt", "MCP", "micropayments", "agent discovery", "prompt injection", "content monetization"] },
  { label: "entities", options: ["Stripe", "Coinbase", "Mastercard", "Anthropic", "x402 Foundation", "Answer.AI", "Fewsats", "OpenAI"] },
  { label: "platform", options: ["GitHub", "Substack", "HN", "X", "YouTube", "Discord", "Reddit", "LinkedIn", "podcast"] },
  { label: "creator", options: ["Jeff Weinstein", "Jeremy Howard", "Simon Willison", "swyx", "Jordi Montes", "Nate B. Jones", "Ras Mic"] },
  { label: "type", options: ["product launch", "code release", "opinion/analysis", "market event", "tutorial", "funding/deal"] },
  { label: "layer", options: ["infrastructure", "payments", "commerce"] },
];

const PER_PAGE = 10;

export default function SignalsFeed({ signals }: { signals: Signal[] }) {
  const [selected, setSelected] = useState<Record<string, string | null>>({});
  const [page, setPage] = useState(1);

  const filtered = signals.filter((s) => {
    for (const [key, val] of Object.entries(selected)) {
      if (!val) continue;
      if (key === "topics") {
        if (!s.tags.includes(val)) return false;
      } else if (key === "creator") {
        if (s.creator !== val) return false;
      } else if (key === "type") {
        if (s.source_type !== val) return false;
      } else {
        if (!s.tags.includes(val) && s.source !== val && s.creator !== val) return false;
      }
    }
    return true;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      <FilterPills filters={FILTERS} selected={selected} onChange={(s) => { setSelected(s); setPage(1); }} />

      <div className="signals-grid" style={{ marginTop: 20 }}>
        {paged.map((signal) => (
          <SignalCard key={signal.slug} signal={signal} />
        ))}
        {paged.length === 0 && (
          <div style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>
            No signals match these filters.
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className={`page-btn${page === 1 ? " page-btn-disabled" : ""}`}
            onClick={() => page > 1 && setPage(page - 1)}
          >
            ← prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={`page-btn${p === page ? " page-btn-active" : ""}`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
          <span className="page-info">of {totalPages}</span>
          <button
            className={`page-btn${page === totalPages ? " page-btn-disabled" : ""}`}
            onClick={() => page < totalPages && setPage(page + 1)}
          >
            next →
          </button>
        </div>
      )}
    </>
  );
}
