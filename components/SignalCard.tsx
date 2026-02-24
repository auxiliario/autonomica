import Link from "next/link";
import type { Signal } from "@/lib/types";

export default function SignalCard({ signal }: { signal: Signal }) {
  return (
    <Link href={`/signals/${signal.slug}`} className="signal-card">
      <div className="signal-meta">
        <span className="signal-source">{signal.source || signal.creator}</span>
        <span className="signal-dot">·</span>
        <span className="signal-date">{signal.date}</span>
        {signal.source_type && (
          <span className="signal-type-badge">{signal.source_type}</span>
        )}
      </div>
      <div className="signal-title">{signal.title}</div>
      {signal.seo_description && (
        <div className="signal-summary">{signal.seo_description}</div>
      )}
      {signal.tags.length > 0 && (
        <div className="signal-tags">
          {signal.tags.map((tag) => (
            <span key={tag} className="signal-tag">{tag}</span>
          ))}
        </div>
      )}
    </Link>
  );
}
