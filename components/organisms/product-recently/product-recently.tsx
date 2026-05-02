import { HeaderSection } from "@/components/atoms/header-section/header-section";
import { CardProduct } from "@/components/molecules/card-product/card-product";
import { useArrows } from "@/hooks/useArrows";
import { getProducts } from "@/services/products.services";
import { useEffect, useState } from "react";

import "./product-recently.css";

export function ProductRecently() {
  const { ref, moveLeft, moveRigth } = useArrows({ size: 2 });
  const [products, setProducts] = useState<any[]>([]);

  async function loadProducts() {
    const temp = await getProducts();
    setProducts(temp.products);
  }

  useEffect(function () {
    loadProducts();
  }, []);

  return (
    <section className="product-recently">
      <HeaderSection
        title="Your Recently"
        subtitle="Viewed Items"
        icon="/icons/basket.png"
        color="#8c71db"
        onClickButtonRigth={moveRigth}
        onClickbuttonLeft={moveLeft}
      />
      <div ref={ref} className="product-recently-list-products">
        {products.map(function (value, index) {
          return (
            <CardProduct
              key={index}
              id={index}
              name={value.name}
              price={value.price}
              priceOld={value.priceOld}
              discount={value.discount}
              calification={value.calification}
              image={value.image}
              imageHover={value.imageHove}
              colors={value.colors}
            />
          );
        })}
      </div>
    </section>
  );
}
