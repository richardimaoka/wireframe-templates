import React from "react";
import { BgColor, PaddingProps } from "./placeholder-types";

type Props = {
  height: React.CSSProperties["height"];
  bgColor?: BgColor;
} & PaddingProps;

export function PlaceholderFullWidth(props: Props) {
  const bgColor =
    props.bgColor === "transparent"
      ? "transparent"
      : props.bgColor
        ? `var(--color-${props.bgColor})`
        : "var(--color-gray-100)";

  if (
    props.padding ||
    props.paddingTop ||
    props.paddingBottom ||
    props.paddingLeft ||
    props.paddingRight
  ) {
    return (
      <div
        style={{
          height: props.height,
          padding: props.padding,
          paddingTop: props.paddingTop,
          paddingBottom: props.paddingBottom,
          paddingLeft: props.paddingLeft,
          paddingRight: props.paddingRight,
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            backgroundColor: bgColor,
            height: "100%",
          }}
        ></div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          height: props.height,
          backgroundColor: bgColor,
        }}
      ></div>
    );
  }
}
