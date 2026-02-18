import "./icon-category.css";

export function IconCategory({ image, name }: any) {
  return (
    <div className="icon-category">
      <img src={image} width={64} />
      <p>{name}</p>
    </div>
  );
}
