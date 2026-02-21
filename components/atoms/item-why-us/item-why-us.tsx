import "./item-why-us.css";

export function ItemWhyUs({ image, name }: any) {
  return (
    <div className="item-why-us">
      <img src={image} />
      <p>{name}</p>
    </div>
  );
}
