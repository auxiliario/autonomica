import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-line-1">© autonomi.ca</div>
        <div className="footer-line-2">
          vibe-coded with Claude · by <Link href="/learn">Max</Link>
        </div>
        <div className="footer-line-3">— a human who can&apos;t code,</div>
        <div className="footer-line-4">what a time to be alive.</div>
      </div>
      <div className="footer-links">
        <Link href="/signals">signals</Link>
        <a href="/llms.txt">llms.txt</a>
        <a href="/agent/docs/spec.md">spec</a>
      </div>
    </footer>
  );
}
