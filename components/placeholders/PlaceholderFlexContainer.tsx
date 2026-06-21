import React, { type CSSProperties } from "react";
import { toCssColor } from "./placeholder-funcs";
import styles from "./placeholder.module.css";
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
  backgroundColor?: BgColor;
  children?: React.ReactNode;
  className?: string;
} & PaddingProps &
  BorderProps &
  FlexProps &
  GridItemProps;

/**
 * Flexbox layout container for wireframes.
 *
 * Agent guidance: prefer PlaceholderGridContainer for page and section layouts.
 * Use PlaceholderFlexContainer only when flex-specific behavior is required
 * (e.g. flexDirection, flexGrow, flexWrap, or a single-axis row/column flow).
 */
export function PlaceholderFlexContainer(props: Props) {
  const defaultBgColor = "transparent";
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
        backgroundColor: backgroundColor,
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
      className={[styles.grayColors, props.className]
        .filter(Boolean) // omit falsy values (e.g. undefined className)
        .join(" ")}
    >
      {props.children}
    </div>
  );
}
