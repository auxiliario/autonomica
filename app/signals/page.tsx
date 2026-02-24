import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SignalsFeed from "./SignalsFeed";
import { getAllSignals } from "@/lib/signals";

export const metadata: Metadata = {
  title: "Signals",
  description: "Intelligence from the agent commerce ecosystem.",
};

export default function SignalsPage() {
  const signals = getAllSignals();

  return (
    <>
      <Nav active="signals" />

      <div className="page-header">
        <div className="page-title">Signals</div>
        <p className="page-desc">
          Intelligence from the agent commerce ecosystem. Who&apos;s building,
          what&apos;s shipping, where the market is moving.
        </p>
        <div className="page-stats">
          <span className="stat-accent">{signals.length}</span> signals tracked
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "16px 24px 0" }}>
        <SignalsFeed signals={signals} />
      </div>

      <Footer />
    </>
  );
}
