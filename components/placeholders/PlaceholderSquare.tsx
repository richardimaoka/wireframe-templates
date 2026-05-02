import type { CSSProperties } from "react";
import { extractColor } from "./placeholder-funcs";
import { BgColor, BorderProps, GridItemProps } from "./placeholder-types";

type Props = {
  sideLength: number;
  bgColor?: BgColor;
  className?: string;
} & BorderProps &
  GridItemProps;

export function PlaceholderSquare(props: Props) {
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
      data-placeholder-type="PlaceholderSquare"
      style={{
        // dimension settings
        width: props.sideLength,
        height: props.sideLength,
        // background settings
        backgroundColor: bgColor,
        // border settings
        ...borderProps,
      }}
      className={props.className}
    ></div>
  );
}
