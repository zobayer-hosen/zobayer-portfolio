/** A year and 1-based month, parsed from "YYYY-MM". */
export type YearMonth = [year: number, month: number];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function parseYm(value?: string): YearMonth | null {
  const parts = String(value ?? "").split("-").map(Number);
  return parts.length === 2 && parts.every((n) => !Number.isNaN(n)) ? [parts[0], parts[1]] : null;
}

export function formatYm([year, month]: YearMonth): string {
  return `${MONTHS[month - 1]} ${year}`;
}

/** "4 mos", "1 yr 2 mos". Both the first and last month count. */
export function formatDuration(start: YearMonth, end: YearMonth): string {
  const months = (end[0] - start[0]) * 12 + (end[1] - start[1]) + 1;
  if (months < 1) return "";
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts: string[] = [];
  if (y) parts.push(`${y} ${y === 1 ? "yr" : "yrs"}`);
  if (m) parts.push(`${m} ${m === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}
