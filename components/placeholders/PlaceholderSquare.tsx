import type { CSSProperties } from "react";
import { toCssColor } from "./placeholder-funcs";
import { BgColor, BorderProps, GridItemProps } from "./placeholder-types";

type Props = {
  sideLength: number;
  backgroundColor?: BgColor;
  className?: string;
} & BorderProps &
  GridItemProps;

export function PlaceholderSquare(props: Props) {
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
      data-placeholder-type="PlaceholderSquare"
      style={{
        // dimension settings
        width: props.sideLength,
        height: props.sideLength,
        // background settings
        backgroundColor: backgroundColor,
        // border settings
        ...borderProps,
      }}
      className={props.className}
    ></div>
  );
}
