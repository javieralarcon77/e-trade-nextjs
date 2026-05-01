import "./size-select.css";

export function SizeSelect({ sizes }: any) {
  return (
    <div className="size-select">
      {sizes.map((size: any, index: any) => {
        return <div key={"size-" + index}>{size}</div>;
      })}
    </div>
  );
}
