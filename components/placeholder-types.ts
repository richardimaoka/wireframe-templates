import React from "react";

export const BG_COLORS = [
  "transparent",
  "gray-50",
  "gray-100",
  "gray-200",
  "gray-300",
  "gray-400",
  "gray-500",
  "gray-600",
  "gray-700",
  "gray-800",
  "gray-900",
] as const;

export type BgColor = (typeof BG_COLORS)[number];

export type PaddingProps =
  | {
      padding?: React.CSSProperties["padding"];
      paddingTop?: "ERROR: Cannot use paddingTop with padding";
      paddingBottom?: "ERROR: Cannot use paddingBottom with padding";
      paddingLeft?: "ERROR: Cannot use paddingLeft with padding";
      paddingRight?: "ERROR: Cannot use paddingRight with padding";
    }
  | {
      padding?: "ERROR: Cannot use padding with specific padding props (top, bottom, left, right)";
      paddingTop?: React.CSSProperties["paddingTop"];
      paddingBottom?: React.CSSProperties["paddingBottom"];
      paddingLeft?: React.CSSProperties["paddingLeft"];
      paddingRight?: React.CSSProperties["paddingRight"];
    };
