"use client";
import { useState, useEffect } from "react";

import { getProducts } from "@/services/products.services";
import { HeaderSection } from "@/components/atoms/header-section/header-section";

import "./our-products.css";
import { ListProducts } from "../list-products/list-products";

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
      <ListProducts products={products} />
    </section>
  );
}
