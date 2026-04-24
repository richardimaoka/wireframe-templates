import { BgColor } from "./placeholder-types";

type Props = {
  radius: number;
  bgColor?: BgColor;
};

export function PlaceholderCircle(props: Props) {
  const bgColor =
    props.bgColor === "transparent"
      ? "transparent"
      : props.bgColor
        ? `var(--color-${props.bgColor})`
        : "var(--color-gray-100)";

  return (
    <div
      style={{
        width: props.radius,
        height: props.radius,
        borderRadius: "50%",
        backgroundColor: bgColor,
      }}
    ></div>
  );
}
