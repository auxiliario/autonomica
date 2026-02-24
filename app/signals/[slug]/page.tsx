import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllSignalSlugs, getSignalBySlug, getAllSignals, renderMarkdown } from "@/lib/signals";

export async function generateStaticParams() {
  return getAllSignalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const signal = getSignalBySlug(slug);
  if (!signal) return {};
  return {
    title: signal.title,
    description: signal.seo_description,
  };
}

export default async function SignalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const signal = getSignalBySlug(slug);
  if (!signal) notFound();

  const html = await renderMarkdown(signal.content);

  const allSignals = getAllSignals();
  const related = allSignals
    .filter((s) => s.slug !== slug)
    .filter((s) => s.tags.some((t) => signal.tags.includes(t)))
    .slice(0, 3);

  return (
    <>
      <Nav active="signals" />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/signals">signals</Link>
        <span className="breadcrumb-sep">/</span>
        <span>{slug}</span>
      </div>

      {/* Header */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "16px 24px 0" }}>
        <div className="signal-meta" style={{ marginBottom: 12 }}>
          <span className="signal-source">{signal.source || signal.creator}</span>
          <span className="signal-dot">·</span>
          <span className="signal-date">{signal.date}</span>
          {signal.source_type && <span className="signal-type-badge">{signal.source_type}</span>}
        </div>
        <h1 style={{
          fontFamily: "var(--sans)", fontSize: "1.5rem", fontWeight: 600,
          color: "var(--text-bright)", lineHeight: 1.3, marginBottom: 16
        }}>
          {signal.title}
        </h1>
        {signal.tags.length > 0 && (
          <div className="signal-tags" style={{ marginBottom: 24, gap: 6 }}>
            {signal.tags.map((tag) => (
              <span key={tag} className="signal-tag" style={{ padding: "3px 8px", fontSize: "0.65rem" }}>{tag}</span>
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div
        className="signal-body"
        style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 40px" }}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Source link */}
      {signal.source_link && (
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 32px" }}>
          <a
            href={signal.source_link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "var(--mono)", fontSize: "0.75rem",
              color: "var(--accent)", padding: "8px 14px",
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 6, textDecoration: "none",
            }}
          >
            <span style={{ color: "var(--text-dim)" }}>source →</span>
            {new URL(signal.source_link).hostname}
          </a>
        </div>
      )}

      {/* Related */}
      {related.length > 0 && (
        <>
          <hr style={{ border: "none", borderTop: "1px solid var(--border)", maxWidth: 720, margin: "0 auto 32px" }} />
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 48px" }}>
            <div style={{
              fontFamily: "var(--mono)", fontSize: "0.72rem", fontWeight: 600,
              color: "var(--text-dim)", textTransform: "uppercase" as const,
              letterSpacing: "0.1em", marginBottom: 16,
            }}>
              Related signals
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/signals/${r.slug}`}
                  style={{
                    display: "flex", alignItems: "baseline", gap: 12,
                    padding: "12px 16px", background: "var(--bg-card)",
                    border: "1px solid var(--border)", borderRadius: 6,
                    textDecoration: "none", color: "var(--text)",
                  }}
                >
                  <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", color: "var(--text-dim)", whiteSpace: "nowrap" }}>
                    {r.date}
                  </span>
                  <span style={{ fontFamily: "var(--sans)", fontSize: "0.85rem", fontWeight: 500, color: "var(--text-bright)" }}>
                    {r.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
