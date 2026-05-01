import { Calification } from "@/components/atoms/calification/calification";
import { ColorSelect } from "@/components/atoms/color-select/color-select";
import { ProductAction } from "@/components/atoms/product-action/product-action";
import { SizeSelect } from "@/components/atoms/size-select/size-select";
import { TagOffer } from "@/components/atoms/tag-offer/tag-offer";

import "./detail-product.css";
import { InfoProduct } from "@/components/molecules/info-product/info-product";

export function DetailProduct({ product }: any) {
  const { image, discount, name, price, calification, colors, sizes } = product;

  return (
    <section className="detail-product">
      <div className="detail-product-image">
        <img src={image} width="100%" />
        <TagOffer discount={discount} />
      </div>
      <div className="detail-product-info">
        <h1>{name}</h1>
        <h4>{price}</h4>
        {calification && (
          <Calification calification={calification} type="customer" />
        )}
        <hr />
        <ul className="detail-product-meta">
          <li>In Stock</li>
          <li>Free delivery available</li>
          <li>Sales 30% Off Use Code: MOTIVE30</li>
        </ul>
        <p className="detail-product-description">
          In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer
          ante est, elementum eget magna. Pellentesque sagittis dictum libero,
          eu dignissim tellus.
        </p>
        {colors && (
          <div className="detail-product-options">
            <p>Colors:</p>
            <ColorSelect colors={colors} />
          </div>
        )}
        {sizes && (
          <div className="detail-product-options">
            <p>Size:</p>
            <SizeSelect sizes={sizes} />
          </div>
        )}
        <ProductAction product={product} />
      </div>
      <InfoProduct product={product} />
    </section>
  );
}
