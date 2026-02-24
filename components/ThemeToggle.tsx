"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const stored = localStorage.getItem("autonomica-theme") as
      | "dark"
      | "light"
      | null;
    const initial = stored || "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("autonomica-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button className="theme-toggle" onClick={toggle} title="Toggle theme">
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
