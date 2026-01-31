"use client";

import { HeaderSection } from "@/components/atoms/header-section/header-section";
import { CardProductArrival } from "@/components/molecules/card-product-arrival/card-product-arrival";

import "./new-arrivals.css";
import { useEffect, useRef, useState } from "react";
import { getNewArrivals } from "@/services/products.services";

export function NewArrivals() {
  const ref = useRef<HTMLDivElement>(null);
  const [arrivals, setArrivals] = useState<any[]>([]);

  const moveRigth = () => {
    const divElement = ref.current;
    if (divElement === null) return;

    const widthChildren = divElement.children[0].clientWidth;
    const left = divElement.scrollLeft + widthChildren * 2;
    divElement.scrollTo({ behavior: "smooth", left: left });
  };

  const moveLeft = () => {
    const divElement = ref.current;
    if (divElement === null) return;

    const widthChildren = divElement.children[0].clientWidth;
    const left = divElement.scrollLeft - widthChildren * 2;
    divElement.scrollTo({ behavior: "smooth", left: left });
  };

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
