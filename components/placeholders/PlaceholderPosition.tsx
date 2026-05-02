import React from "react";
import { PositionProps } from "./placeholder-types";

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
      className={props.className}
    >
      {props.children}
    </div>
  );
}
