import { Calification } from "@/components/atoms/calification/calification";
import "./card-product.css";
import { ColorSelect } from "@/components/atoms/color-select/color-select";

export function CardProduct({
  name = "Nombre por defecto",
  price,
  priceOld,
  discount,
  calification,
  image,
  imageHover,
  colors,
}: any) {
  return (
    <article className="card-product">
      <div className="card-product-image-container">
        <img src={image} />
        <img className="card-product-image-hover" src={imageHover} />
        {discount && <span className="card-product-offer">{discount} off</span>}
        <div className="card-product-action">
          <button>
            <img src="/icons/eye.png" width="20px" />
          </button>
          <button className="card-product-add-to-cart">Add to cart</button>
          <button>
            <img src="/icons/heart.png" width="20px" />
          </button>
        </div>
      </div>
      <div>
        {calification && <Calification calification={calification} />}
        <h5 className="card-product-name">{name}</h5>
        <div className="card-product-price">
          <h6>${price}</h6>
          {priceOld && <p>${priceOld}</p>}
        </div>
        {colors && <ColorSelect colors={colors} />}
      </div>
    </article>
  );
}
