"use client";

import { HeaderSection } from "@/components/atoms/header-section/header-section";
import { CardProductArrival } from "@/components/molecules/card-product-arrival/card-product-arrival";

import "./new-arrivals.css";
import { useEffect, useState } from "react";
import { getNewArrivals } from "@/services/products.services";
import { useArrows } from "@/hooks/useArrows";

export function NewArrivals() {
  const { ref, moveLeft, moveRigth } = useArrows({ size: 2 });
  const [arrivals, setArrivals] = useState<any[]>([]);

  async function loadArrivals() {
    const temp = await getNewArrivals();
    setArrivals(temp.arrivals);
  }

  useEffect(function () {
    loadArrivals();
  }, []);

  return (
    <section className="new-arrivals">
      <HeaderSection
        title="This Week's"
        subtitle="New Arrivals"
        icon="/icons/basket.png"
        color="#8c71db"
        onClickButtonRigth={moveRigth}
        onClickbuttonLeft={moveLeft}
      />
      <div ref={ref} className="new-arrivals-list-products">
        {arrivals.map(function (value, index) {
          return (
            <CardProductArrival
              key={index}
              name={value.name}
              price={value.price}
              priceOld={value.priceOld}
              discount={value.discount}
              image={value.image}
              colors={value.colors}
            />
          );
        })}
      </div>
    </section>
  );
}
