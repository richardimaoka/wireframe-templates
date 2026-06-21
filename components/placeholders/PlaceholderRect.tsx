import React, { type CSSProperties } from "react";
import { toCssColor } from "./placeholder-funcs";
import styles from "./placeholder.module.css";
import { BgColor, BorderProps, GridItemProps } from "./placeholder-types";

type Props = {
  width: React.CSSProperties["width"];
  height: React.CSSProperties["height"];
  backgroundColor?: BgColor;
  className?: string;
} & BorderProps &
  GridItemProps;

export function PlaceholderRect(props: Props) {
  const defaultBgColor = "gray-400";
  const backgroundColor = props.backgroundColor
    ? toCssColor(props.backgroundColor)
    : toCssColor(defaultBgColor);

  const defaultBorderColor = "transparent";
  const borderColor = props.borderColor
    ? toCssColor(props.borderColor)
    : toCssColor(defaultBorderColor);

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
        backgroundColor: backgroundColor,
        // border settings
        ...borderProps,
      }}
      className={[styles.grayColors, props.className]
        .filter(Boolean) // omit falsy values (e.g. undefined className)
        .join(" ")}
    ></div>
  );
}
