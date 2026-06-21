import React, { type CSSProperties } from "react";
import type { AnchorInset } from "./placeholder-types";
import styles from "./placeholder.module.css";

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
  positionAnchor: string;
  popover: "auto" | "manual";
  top?: AnchorInset;
  right?: AnchorInset;
  bottom?: AnchorInset;
  left?: AnchorInset;
};

export function PlaceholderPopoverContainer(props: Props) {
  const resetProps: CSSProperties = {
    border: "none",
    padding: 0,
    margin: 0,
    background: "transparent",
    boxShadow: "none",
    outline: "none",
    borderRadius: 0,
    color: "inherit",
    overflow: "visible",
    maxWidth: "none",
    maxHeight: "none",
  };

  const anchorLayoutProps = {
    top: props.top,
    right: props.right,
    bottom: props.bottom,
    left: props.left,
  } as CSSProperties;

  return (
    <div
      id={props.id}
      popover={props.popover}
      data-placeholder-type="PlaceholderPopoverContainer"
      style={{
        // popover UA reset
        ...resetProps,
        // anchor positioning
        ...anchorLayoutProps,
      }}
      className={[styles.grayColors, props.className]
        .filter(Boolean) // omit falsy values (e.g. undefined className)
        .join(" ")}
    >
      {props.children}
    </div>
  );
}
