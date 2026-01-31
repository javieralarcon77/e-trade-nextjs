"use client";
import { useState, useEffect } from "react";

import { getProducts } from "@/services/products.services";
import { CardProduct } from "@/components/molecules/card-product/card-product";
import { HeaderSection } from "@/components/atoms/header-section/header-section";

import "./our-products.css";

export function OurProducts() {
  const [products, setProducts] = useState<any[]>([]);

  async function loadProducts() {
    const temp = await getProducts();
    setProducts(temp.products);
  }

  useEffect(function () {
    loadProducts();
  }, []);

  return (
    <section className="our-products">
      <HeaderSection
        title="Our Products"
        subtitle="Explore our Products"
        icon="/icons/basket.png"
        color=" #8c71db"
      />
      <div className="our-products-products">
        {products.map(function (value, index) {
          return (
            <CardProduct
              key={index}
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
