import React from "react";

export const GRAY_COLORS = [
  "transparent",
  "white",
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

export type GrayColor = (typeof GRAY_COLORS)[number];

export type BgColor = GrayColor;

export type BorderColor = GrayColor;

/** First argument to `anchor()` for inset placement (not `anchor-size()`, etc.). */
export type AnchorSide =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "start"
  | "end"
  | "center"
  | "self-start"
  | "self-end";

/** Allowed `anchor(...)` values for `top` / `right` / `bottom` / `left` with anchor positioning. */
export type AnchorInset =
  | `anchor(${AnchorSide})`
  | `anchor(${number}%)`;

export type BorderProps = (
  | {
      borderWidth?: React.CSSProperties["borderWidth"];
      borderTopWidth?: "ERROR: Cannot use borderTopWidth with borderWidth";
      borderBottomWidth?: "ERROR: Cannot use borderBottomWidth with borderWidth";
      borderLeftWidth?: "ERROR: Cannot use borderLeftWidth with borderWidth";
      borderRightWidth?: "ERROR: Cannot use borderRightWidth with borderWidth";
    }
  | {
      borderWidth?: "ERROR: Cannot use borderWidth with specific border width props";
      borderTopWidth?: React.CSSProperties["borderTopWidth"];
      borderBottomWidth?: React.CSSProperties["borderBottomWidth"];
      borderLeftWidth?: React.CSSProperties["borderLeftWidth"];
      borderRightWidth?: React.CSSProperties["borderRightWidth"];
    }
) & {
  borderColor?: BorderColor;
};

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

export type FlexProps = {
  display?: React.CSSProperties["display"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  flexDirection?: React.CSSProperties["flexDirection"];
  flexWrap?: React.CSSProperties["flexWrap"];
  flex?: React.CSSProperties["flex"];
  flexGrow?: React.CSSProperties["flexGrow"];
  flexShrink?: React.CSSProperties["flexShrink"];
  flexBasis?: React.CSSProperties["flexBasis"];
  gap?: React.CSSProperties["gap"];
};

export type GridProps = {
  display?: React.CSSProperties["display"];
  gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"];
  gridTemplateRows?: React.CSSProperties["gridTemplateRows"];
  gridTemplateAreas?: React.CSSProperties["gridTemplateAreas"];
  columnGap?: React.CSSProperties["columnGap"];
  rowGap?: React.CSSProperties["rowGap"];
  justifyItems?: React.CSSProperties["justifyItems"];
  alignItems?: React.CSSProperties["alignItems"];
  placeItems?: React.CSSProperties["placeItems"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignContent?: React.CSSProperties["alignContent"];
  placeContent?: React.CSSProperties["placeContent"];
  gridAutoColumns?: React.CSSProperties["gridAutoColumns"];
  gridAutoRows?: React.CSSProperties["gridAutoRows"];
  gridAutoFlow?: React.CSSProperties["gridAutoFlow"];
};

export type GridItemProps = {
  gridColumn?: React.CSSProperties["gridColumn"];
  gridRow?: React.CSSProperties["gridRow"];
  gridArea?: React.CSSProperties["gridArea"];
  justifySelf?: React.CSSProperties["justifySelf"];
  alignSelf?: React.CSSProperties["alignSelf"];
  placeSelf?: React.CSSProperties["placeSelf"];
};

export type PositionProps = {
  position?: React.CSSProperties["position"];
  top?: React.CSSProperties["top"];
  right?: React.CSSProperties["right"];
  bottom?: React.CSSProperties["bottom"];
  left?: React.CSSProperties["left"];
  zIndex?: React.CSSProperties["zIndex"];
};
