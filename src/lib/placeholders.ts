/** Values that still need to be filled in start with "TODO:". */
export function isPlaceholder(value: string | undefined | null): boolean {
  return typeof value === "string" && value.trim().startsWith("TODO:");
}
