import "./calification.css";

export function Calification({ calification, type = "calification" }: any) {
  return (
    <div className="calification">
      <div className="calification-stars">
        <img src="/icons/star.png" width="15px" />
        <img src="/icons/star.png" width="15px" />
        <img src="/icons/star.png" width="15px" />
        <img src="/icons/star.png" width="15px" />
        <img src="/icons/star.png" width="15px" />
      </div>
      {type === "calification" && <p>({calification})</p>}
      {type === "review" && (
        <p className="calification-review">
          <span>{calification}+</span> Reviews
        </p>
      )}
    </div>
  );
}
