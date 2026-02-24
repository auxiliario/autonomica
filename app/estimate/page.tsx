import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata = { title: "Token Estimator" };
export default function EstimatePage() {
  return (<><Nav active="tools" /><div className="page-header"><div className="page-title">Token Estimator</div><p className="page-desc">Estimate token count and revenue projections for your agent-facing content.</p></div><div className="section"><p style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>Tool wiring coming next.</p></div><Footer /></>);
}
