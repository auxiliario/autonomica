"use client";

import { useState } from "react";
import type { Signal } from "@/lib/types";
import SignalCard from "./SignalCard";
import FilterPills from "./FilterPills";

const FILTERS = [
  { label: "topics", options: ["x402", "llms.txt", "MCP", "micropayments", "agent discovery", "prompt injection", "content monetization"] },
  { label: "entities", options: ["Stripe", "Coinbase", "Mastercard", "Anthropic", "x402 Foundation", "Answer.AI", "Fewsats"] },
  { label: "platform", options: ["GitHub", "Substack", "HN", "X", "YouTube", "Discord", "Reddit"] },
  { label: "creator", options: ["Jeff Weinstein", "Jeremy Howard", "Simon Willison", "swyx", "Jordi Montes", "Nate B. Jones"] },
  { label: "type", options: ["product launch", "code release", "opinion/analysis", "market event", "tutorial", "funding/deal"] },
  { label: "layer", options: ["infrastructure", "payments", "commerce"] },
];

export default function HomeSignals({ signals }: { signals: Signal[] }) {
  const [selected, setSelected] = useState<Record<string, string | null>>({});

  const filtered = signals.filter((s) => {
    for (const [key, val] of Object.entries(selected)) {
      if (!val) continue;
      if (key === "tags" || key === "topics") {
        if (!s.tags.includes(val)) return false;
      } else if (key === "creator") {
        if (s.creator !== val) return false;
      } else if (key === "type") {
        if (s.source_type !== val) return false;
      } else {
        // For entities, platform, layer — check tags as fallback
        if (!s.tags.includes(val) && s.source !== val && s.creator !== val) {
          return false;
        }
      }
    }
    return true;
  });

  return (
    <>
      <FilterPills filters={FILTERS} selected={selected} onChange={setSelected} />
      <div className="signals-grid" style={{ marginTop: 20 }}>
        {filtered.slice(0, 5).map((signal) => (
          <SignalCard key={signal.slug} signal={signal} />
        ))}
        {filtered.length === 0 && (
          <div style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>
            No signals match these filters.
          </div>
        )}
      </div>
    </>
  );
}
