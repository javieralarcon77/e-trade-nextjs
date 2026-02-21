import "./banner.css";

export function Banner({
  image,
  title,
  text,
  dir = "left",
  column = "column",
}: any) {
  return (
    <div className="banner">
      <img src={image} />
      <div
        className="banner-content"
        style={{ left: dir === "right" ? "50%" : "5%", flexDirection: column }}
      >
        <p>{title}</p>
        <a href="#">{text}</a>
      </div>
    </div>
  );
}
