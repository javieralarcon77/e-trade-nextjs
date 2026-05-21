import { CardProduct } from "@/components/molecules/card-product/card-product";

import "./list-products.css";
import Link from "next/link";

export function ListProducts({ products }: { products: any[] }) {
  return (
    <div>
      <div className="list-products">
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
      <Link href="/shop" className="button-all">
        View All Products
      </Link>
    </div>
  );
}
