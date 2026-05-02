import { GrayColor } from "./placeholder-types";

export function extractColor(color: GrayColor | undefined, fallback?: string): string | undefined {
  if (color === "transparent") {
    return "transparent";
  }
  if (color) {
    return `var(--color-${color})`;
  }
  return fallback;
}
