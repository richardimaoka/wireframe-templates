type Props = {
  width: number;
  height: number;
};

export function PlaceholderRect(props: Props) {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: "lightgray", // Added for visibility
      }}
    ></div>
  );
}
