import React, { type CSSProperties } from "react";
import { toCssColor } from "./placeholder-funcs";
import {
  BgColor,
  BorderProps,
  FlexProps,
  PaddingProps,
} from "./placeholder-types";

type Props = {
  height?: React.CSSProperties["height"];
  width?: React.CSSProperties["width"];
  backgroundColor?: BgColor;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  anchorName?: string;
  popoverTarget?: string;
} & PaddingProps &
  BorderProps &
  FlexProps;

export function PlaceholderButton(props: Props) {
  const defaultBgColor = "gray-400";
  const backgroundColor = props.backgroundColor
    ? toCssColor(props.backgroundColor)
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
        borderStyle: hasBorder ? "solid" : "none",
        borderColor,
      }
    : {
        borderTopWidth: props.borderTopWidth,
        borderBottomWidth: props.borderBottomWidth,
        borderLeftWidth: props.borderLeftWidth,
        borderRightWidth: props.borderRightWidth,
        borderStyle: hasBorder ? "solid" : "none",
        borderColor,
      };

  const flexProps: CSSProperties = {
    display: props.display,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    flexDirection: props.flexDirection,
    flexWrap: props.flexWrap,
    flex: props.flex,
    flexGrow: props.flexGrow,
    flexShrink: props.flexShrink,
    flexBasis: props.flexBasis,
    gap: props.gap,
  };

  const resetProps: CSSProperties = {
    appearance: "none",
    background: "none",
    margin: 0,
    cursor: "pointer",
    font: "inherit",
    color: "inherit",
    textAlign: "inherit",
  };

  return (
    <button
      type="button"
      data-placeholder-type="PlaceholderButton"
      onClick={props.onClick}
      popoverTarget={props.popoverTarget}
      style={{
        ...resetProps,
        // dimension settings
        height: props.height,
        width: props.width,
        // background settings
        backgroundColor: backgroundColor,
        // padding settings
        ...paddingProps,
        // border settings
        ...borderProps,
        // flexbox settings
        ...flexProps,
        ...(props.anchorName
          ? ({ anchorName: props.anchorName } as CSSProperties)
          : {}),
      }}
      className={props.className}
    >
      {props.children}
    </button>
  );
}
