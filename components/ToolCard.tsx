import Link from "next/link";

interface ToolCardProps {
  file: string;
  name: string;
  desc: string;
  href: string;
}

export default function ToolCard({ file, name, desc, href }: ToolCardProps) {
  return (
    <Link href={href} className="tool-card">
      <div className="tool-bar">
        <span className="tool-dot dot-red" />
        <span className="tool-dot dot-yellow" />
        <span className="tool-dot dot-green" />
        <span className="tool-file">{file}</span>
      </div>
      <div className="tool-body">
        <div className="tool-name">{name}</div>
        <div className="tool-desc">{desc}</div>
        <span className="tool-run">run {name.toLowerCase().split(" ")[0]}</span>
      </div>
    </Link>
  );
}
