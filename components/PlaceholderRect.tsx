import React from "react";
import { BgColor } from "./placeholder-types";

type Props = {
  width: React.CSSProperties["width"];
  height: React.CSSProperties["height"];
  bgColor?: BgColor;
};

export function PlaceholderRect(props: Props) {
  const bgColor =
    props.bgColor === "transparent"
      ? "transparent"
      : props.bgColor
        ? `var(--color-${props.bgColor})`
        : "var(--color-gray-100)";

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: bgColor,
      }}
    ></div>
  );
}
