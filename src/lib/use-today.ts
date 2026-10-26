import { useSyncExternalStore } from "react";

const BUILD_DATE = process.env.BUILD_DATE ?? "";
const noop = () => () => {};
const clientToday = () => new Date().toISOString().slice(0, 10);
const buildToday = () => BUILD_DATE.slice(0, 10) || clientToday();

/**
 * Today's date. The static HTML is rendered with the build date; after hydration
 * the visitor's own clock takes over, so "Present" durations and the footer year never go stale.
 */
export function useToday(): Date {
  return new Date(useSyncExternalStore(noop, clientToday, buildToday));
}
