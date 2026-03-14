type Props = {
  sideLength: number;
};

export function PlaceholderSquare(props: Props) {
  return (
    <div
      style={{
        width: props.sideLength,
        height: props.sideLength,
        backgroundColor: "lightgray", // Added for visibility
      }}
    ></div>
  );
}
