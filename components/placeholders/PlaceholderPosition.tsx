import React from "react";
import { PositionProps } from "./placeholder-types";
import styles from "./placeholder.module.css";

type Props = {
  children?: React.ReactNode;
  className?: string;
} & PositionProps;

export function PlaceholderPosition(props: Props) {
  return (
    <div
      data-placeholder-type="PlaceholderPosition"
      style={{
        position: props.position,
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        left: props.left,
        zIndex: props.zIndex,
      }}
      className={[styles.grayColors, props.className]
        .filter(Boolean) // omit falsy values (e.g. undefined className)
        .join(" ")}
    >
      {props.children}
    </div>
  );
}
