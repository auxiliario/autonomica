import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata = { title: "Inspector" };
export default function InspectPage() {
  return (<><Nav active="tools" /><div className="page-header"><div className="page-title">Inspector</div><p className="page-desc">Check any domain for agent-readiness.</p></div><div className="section"><p style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>Tool wiring coming next.</p></div><Footer /></>);
}
