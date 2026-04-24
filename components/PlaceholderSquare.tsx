import { BgColor } from "./placeholder-types";

type Props = {
  sideLength: number;
  bgColor?: BgColor;
};

export function PlaceholderSquare(props: Props) {
  const bgColor =
    props.bgColor === "transparent"
      ? "transparent"
      : props.bgColor
        ? `var(--color-${props.bgColor})`
        : "var(--color-gray-100)";

  return (
    <div
      style={{
        width: props.sideLength,
        height: props.sideLength,
        backgroundColor: bgColor,
      }}
    ></div>
  );
}
