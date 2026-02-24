import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata = { title: "Validator" };
export default function ValidatePage() {
  return (<><Nav active="tools" /><div className="page-header"><div className="page-title">Validator</div><p className="page-desc">Check your llms.txt and index.json for spec compliance.</p></div><div className="section"><p style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>Tool wiring coming next.</p></div><Footer /></>);
}
