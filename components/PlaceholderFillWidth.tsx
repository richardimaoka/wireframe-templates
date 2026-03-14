type Props = {
  height: number;
};

export function PlaceholderFillWidth(props: Props) {
  return (
    <div style={{ height: props.height, backgroundColor: "lightgray" }}></div>
  );
}
