import { Calification } from "@/components/atoms/calification/calification";
import "./card-product-most-sold.css";

export function CardProductMostSold({
  image,
  name,
  price,
  oldPrice,
  reviews,
}: any) {
  return (
    <div className="card-most-sold">
      <img src={image} />
      <div className="card-most-sold-body">
        <Calification calification={reviews} type="review" />

        <h4>{name}</h4>
        <p>
          {price} <span>{oldPrice}</span>{" "}
        </p>
      </div>
      <div className="card-most-sold-buttons">
        <button>
          <img src="/icons/car.png" width="20px" />
        </button>
        <button>
          <img src="/icons/heart.png" width="20px" />
        </button>
      </div>
    </div>
  );
}
