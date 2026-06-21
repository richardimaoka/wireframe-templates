import { GrayColor } from "./placeholder-types";

export function toCssColor(color: GrayColor): string {
  switch (color) {
    case "transparent":
      return "transparent";
    case "white":
      return "white";
    case "gray-50":
    case "gray-100":
    case "gray-200":
    case "gray-300":
    case "gray-400":
    case "gray-500":
    case "gray-600":
    case "gray-700":
    case "gray-800":
    case "gray-900":
      return `var(--color-${color})`;
  }
}
