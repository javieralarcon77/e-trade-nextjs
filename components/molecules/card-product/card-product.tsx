import { Calification } from "@/components/atoms/calification/calification";
import "./card-product.css";
import { ColorSelect } from "@/components/atoms/color-select/color-select";
import { CardProductAction } from "@/components/atoms/card-product-action/card-product-action";
import Link from "next/link";
import { TagOffer } from "@/components/atoms/tag-offer/tag-offer";

export function CardProduct(product: any) {
  const {
    id,
    name = "Nombre por defecto",
    price,
    priceOld,
    discount,
    calification,
    image,
    imageHover,
    colors,
  } = product;

  return (
    <Link href={"/product/" + id}>
      <article className="card-product">
        <div className="card-product-image-container">
          <img src={image} />
          <img className="card-product-image-hover" src={imageHover} />
          <TagOffer discount={discount} />
          <CardProductAction product={product} />
        </div>
        <div className="card-product-data">
          {calification && <Calification calification={calification} />}
          <h5 className="card-product-name">{name}</h5>
          <div className="card-product-price">
            <h6>${price}</h6>
            {priceOld && <p>${priceOld}</p>}
          </div>
          {colors && <ColorSelect colors={colors} />}
        </div>
      </article>
    </Link>
  );
}
