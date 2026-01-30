import { ColorSelect } from "@/components/atoms/color-select/color-select";
import "./card-product-arrival.css";
import { CardProductAction } from "@/components/atoms/card-product-action/card-product-action";

export function CardProductArrival({
  name = "Nombre por defecto",
  price,
  priceOld,
  discount,
  image,
  colors,
}: any) {
  return (
    <div className="card-product-arrival">
      <div className="card-product-arrival-image-container">
        <div className="card-product-arrival-image-circle">
          <img src={image} />
        </div>
        {discount && (
          <span className="card-product-arrival-offer">{discount} OFF</span>
        )}
      </div>
      <ColorSelect colors={colors} />
      <h5>{name}</h5>
      <div className="card-product-arrival-price-container">
        <p>${priceOld}</p>
        <h6>${price}</h6>
      </div>
      <CardProductAction />
    </div>
  );
}
