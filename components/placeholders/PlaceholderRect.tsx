import React, { type CSSProperties } from "react";
import { extractColor } from "./placeholder-funcs";
import { BgColor, BorderProps, GridItemProps } from "./placeholder-types";

type Props = {
  width: React.CSSProperties["width"];
  height: React.CSSProperties["height"];
  bgColor?: BgColor;
  className?: string;
} & BorderProps &
  GridItemProps;

export function PlaceholderRect(props: Props) {
  const bgColor = extractColor(props.bgColor, "var(--color-gray-100)");
  const borderColor = extractColor(props.borderColor);

  const hasBorder =
    props.borderWidth ||
    props.borderTopWidth ||
    props.borderBottomWidth ||
    props.borderLeftWidth ||
    props.borderRightWidth;

  const borderProps: CSSProperties = props.borderWidth
    ? {
        borderWidth: props.borderWidth,
        borderStyle: hasBorder ? "solid" : undefined,
        borderColor,
      }
    : {
        borderTopWidth: props.borderTopWidth,
        borderBottomWidth: props.borderBottomWidth,
        borderLeftWidth: props.borderLeftWidth,
        borderRightWidth: props.borderRightWidth,
        borderStyle: hasBorder ? "solid" : undefined,
        borderColor,
      };

  return (
    <div
      data-placeholder-type="PlaceholderRect"
      style={{
        // dimension settings
        width: props.width,
        height: props.height,
        // background settings
        backgroundColor: bgColor,
        // border settings
        ...borderProps,
      }}
      className={props.className}
    ></div>
  );
}
