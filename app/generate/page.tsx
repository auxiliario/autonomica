import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Generator" };

export default function GeneratePage() {
  return (
    <>
      <Nav active="tools" />
      <div className="page-header">
        <div className="page-title">Generator</div>
        <p className="page-desc">Create the agent-facing file structure for any site. Download as .zip.</p>
      </div>
      <div className="section">
        <p style={{ color: "var(--text-dim)", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>
          Tool wiring coming next. Layout approved in shell phase.
        </p>
      </div>
      <Footer />
    </>
  );
}
