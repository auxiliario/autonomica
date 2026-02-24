import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LangSwitcher from "./LangSwitcher";

interface NavProps {
  active?: "home" | "signals" | "tools" | "learn" | "manifesto";
}

export default function Nav({ active }: NavProps) {
  const cl = (name: string) =>
    `nav-link${active === name ? " nav-link-active" : ""}`;

  return (
    <nav className="nav">
      <div className="nav-row nav-row-brand">
        <Link href="/" className="nav-brand">
          Autonomica <span className="nav-version">v0.1</span>
        </Link>
        <div className="nav-controls">
          <LangSwitcher />
          <ThemeToggle />
        </div>
      </div>
      <div className="nav-row">
        <div className="nav-row-right">
          <span className="nav-row-label">for humans</span>
          <Link href="/" className={cl("home")}>Home</Link>
          <Link href="/signals" className={cl("signals")}>Signals</Link>
          <Link href="/generate" className={cl("tools")}>Tools</Link>
          <Link href="/learn" className={cl("learn")}>Learn</Link>
          <Link href="/#manifesto" className={cl("manifesto")}>Manifesto</Link>
        </div>
      </div>
      <div className="nav-row">
        <div className="nav-row-right">
          <span className="nav-row-label">for agents</span>
          <a href="/llms.txt" className="nav-link">llms.txt</a>
          <a href="/agent/index.json" className="nav-link">agent/</a>
          <a href="/agent/pricing.json" className="nav-link">pricing</a>
          <a href="/agent/changelog.json" className="nav-link">changelog</a>
        </div>
      </div>
    </nav>
  );
}
