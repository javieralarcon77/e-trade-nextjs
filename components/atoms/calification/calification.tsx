import "./calification.css";

const STARS = ["x", "x", "x", "x", "x"];

export function Calification({
  calification,
  numActive = 5,
  type = "calification",
}: any) {
  return (
    <div className="calification">
      <div className="calification-stars">
        {STARS.map(function (item, index) {
          var classStar = "";
          if (index < numActive) {
            classStar = "calification-stars-active";
          }

          return (
            <img src="/icons/star.png" className={classStar} width="15px" />
          );
        })}
      </div>
      {type === "calification" && <p>({calification})</p>}
      {type === "review" && (
        <p className="calification-review">
          <span>{calification}+</span> Reviews
        </p>
      )}
      {type === "customer" && (
        <p className="calification-review">({calification} customer reviews)</p>
      )}
    </div>
  );
}
