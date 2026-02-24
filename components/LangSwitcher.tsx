"use client";

import { useState, useRef, useEffect } from "react";

const LANGS = ["EN", "FR", "ES", "PT", "DE"];

export default function LangSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("EN");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="lang-switch" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(!open)}>
        {current} <span className="lang-v">v</span>
      </button>
      <div className={`lang-dropdown${open ? " lang-dropdown-open" : ""}`}>
        {LANGS.map((lang) => (
          <button
            key={lang}
            className={`lang-option${lang === current ? " lang-option-active" : ""}`}
            onClick={() => {
              setCurrent(lang);
              setOpen(false);
            }}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
