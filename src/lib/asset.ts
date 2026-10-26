/**
 * Files in /public are not prefixed with the basePath automatically,
 * so plain <a href> links to them go through this helper.
 */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
