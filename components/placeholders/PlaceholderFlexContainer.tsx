import React, { type CSSProperties } from "react";
import { toCssColor } from "./placeholder-funcs";
import {
  BgColor,
  BorderProps,
  FlexProps,
  GridItemProps,
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
  FlexProps &
  GridItemProps;

export function PlaceholderFlexContainer(props: Props) {
  const defaultBgColor = "transparent";
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

  return (
    <div
      data-placeholder-type="PlaceholderFlexContainer"
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
        // flexbox settings
        display: props.display || "flex",
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        flexDirection: props.flexDirection,
        flexWrap: props.flexWrap,
        flex: props.flex,
        flexGrow: props.flexGrow,
        flexShrink: props.flexShrink,
        flexBasis: props.flexBasis,
        gap: props.gap,
      }}
      className={props.className}
    >
      {props.children}
    </div>
  );
}
