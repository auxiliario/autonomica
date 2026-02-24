"use client";

import { useState, useRef, useEffect } from "react";

interface FilterDef {
  label: string;
  options: string[];
}

interface FilterPillsProps {
  filters: FilterDef[];
  selected: Record<string, string | null>;
  onChange: (selected: Record<string, string | null>) => void;
}

export default function FilterPills({
  filters,
  selected,
  onChange,
}: FilterPillsProps) {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenFilter(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const activeCount = Object.values(selected).filter(Boolean).length;

  return (
    <div className="signal-filters" ref={ref}>
      {filters.map((f) => (
        <div key={f.label} className="filter-pill">
          <button
            className={`filter-pill-btn${selected[f.label] ? " filter-pill-btn-active" : ""}`}
            onClick={() =>
              setOpenFilter(openFilter === f.label ? null : f.label)
            }
          >
            {selected[f.label] || f.label}
            <span className="filter-pill-v">v</span>
          </button>
          <div
            className={`filter-dropdown${openFilter === f.label ? " filter-dropdown-open" : ""}`}
          >
            <button
              className={`filter-option${!selected[f.label] ? " filter-option-active" : ""}`}
              onClick={() => {
                onChange({ ...selected, [f.label]: null });
                setOpenFilter(null);
              }}
            >
              all
            </button>
            {f.options.map((opt) => (
              <button
                key={opt}
                className={`filter-option${selected[f.label] === opt ? " filter-option-active" : ""}`}
                onClick={() => {
                  onChange({ ...selected, [f.label]: opt });
                  setOpenFilter(null);
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      {activeCount > 0 && (
        <button
          className="filter-clear"
          onClick={() => onChange({})}
        >
          clear all
        </button>
      )}
    </div>
  );
}
