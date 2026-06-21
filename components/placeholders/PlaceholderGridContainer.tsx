import React, { CSSProperties } from "react";
import { toCssColor } from "./placeholder-funcs";
import {
  BgColor,
  BorderProps,
  GridItemProps,
  GridProps,
  PaddingProps,
} from "./placeholder-types";

type Props = {
  height?: React.CSSProperties["height"];
  width?: React.CSSProperties["width"];
  bgColor?: BgColor;
  children?: React.ReactNode;
  className?: string;
} & PaddingProps &
  BorderProps &
  GridProps &
  GridItemProps;

export function PlaceholderGridContainer(props: Props) {
  const defaultBgColor = "gray-400";
  const bgColor = props.bgColor
    ? toCssColor(props.bgColor)
    : toCssColor(defaultBgColor);

  const defaultBorderColor = "transparent";
  const borderColor = props.borderColor
    ? toCssColor(props.borderColor)
    : toCssColor(defaultBorderColor);

  const paddingProps = props.padding
    ? { padding: props.padding }
    : {
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
      };

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

  const gridProps: CSSProperties = {
    display: props.display || "grid",
    gridTemplateColumns: props.gridTemplateColumns,
    gridTemplateRows: props.gridTemplateRows,
    gridTemplateAreas: props.gridTemplateAreas,
    columnGap: props.columnGap,
    rowGap: props.rowGap,
    justifyItems: props.justifyItems,
    alignItems: props.alignItems,
    placeItems: props.placeItems,
    justifyContent: props.justifyContent,
    alignContent: props.alignContent,
    placeContent: props.placeContent,
    gridAutoColumns: props.gridAutoColumns,
    gridAutoRows: props.gridAutoRows,
    gridAutoFlow: props.gridAutoFlow,
  };

  return (
    <div
      data-placeholder-type="PlaceholderGridContainer"
      style={{
        // dimension settings
        height: props.height,
        width: props.width,
        // background settings
        backgroundColor: bgColor,
        // padding settings
        ...paddingProps,
        // border settings
        ...borderProps,
        // grid settings
        ...gridProps,
      }}
      className={props.className}
    >
      {props.children}
    </div>
  );
}
