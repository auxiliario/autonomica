import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Signal } from "./types";

const SIGNALS_DIR = path.join(process.cwd(), "content/signals");

function toStr(val: unknown): string {
  if (val instanceof Date) return val.toISOString().split("T")[0];
  return String(val || "");
}

export function getAllSignalSlugs(): string[] {
  if (!fs.existsSync(SIGNALS_DIR)) return [];
  return fs
    .readdirSync(SIGNALS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllSignals(): Signal[] {
  const slugs = getAllSignalSlugs();
  return slugs
    .map((slug) => getSignalBySlug(slug))
    .filter((s): s is Signal => s !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getSignalBySlug(slug: string): Signal | null {
  const filePath = path.join(SIGNALS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: toStr(data.title),
    date: toStr(data.date),
    source: toStr(data.source),
    source_type: toStr(data.source_type),
    source_link: toStr(data.source_link),
    tags: data.tags || [],
    creator: toStr(data.creator),
    lang: toStr(data.lang) || "en",
    seo_description: toStr(data.seo_description),
    content,
  };
}

export async function renderMarkdown(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}

export function getUniqueTags(signals: Signal[]): string[] {
  const set = new Set<string>();
  signals.forEach((s) => s.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function getUniqueValues(
  signals: Signal[],
  field: keyof Signal
): string[] {
  const set = new Set<string>();
  signals.forEach((s) => {
    const val = s[field];
    if (Array.isArray(val)) val.forEach((v) => set.add(v));
    else if (typeof val === "string" && val) set.add(val);
  });
  return Array.from(set).sort();
}
