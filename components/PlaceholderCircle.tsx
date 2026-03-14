type Props = {
  radius: number;
};

export function PlaceholderCirlce(props: Props) {
  return (
    <div
      style={{
        width: props.radius,
        height: props.radius,
        borderRadius: props.radius,
        backgroundColor: "lightgray", // Added for visibility
      }}
    ></div>
  );
}
