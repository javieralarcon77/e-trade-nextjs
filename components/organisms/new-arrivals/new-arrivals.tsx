"use client";

import { HeaderSection } from "@/components/atoms/header-section/header-section";
import { CardProductArrival } from "@/components/molecules/card-product-arrival/card-product-arrival";

import "./new-arrivals.css";
import { useRef } from "react";

export function NewArrivals() {
  const ref = useRef<HTMLDivElement>(null);

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
        <CardProductArrival
          name="Demon's Souls"
          price="30"
          priceOld="40"
          discount="10%"
          image="/images/product-05.png"
          colors={["#aae6f8", "#5f8af7", "#59c3c0"]}
        />
        <CardProductArrival
          name="Google Home"
          price="40"
          priceOld="50"
          image="/images/product-06.png"
          colors={["#aae6f8", "#5f8af7", "#59c3c0"]}
        />
        <CardProductArrival
          name="Netflix Remot"
          price="45"
          priceOld="60"
          discount="15%"
          image="/images/product-07.png"
          colors={["#aae6f8", "#5f8af7", "#59c3c0"]}
        />
        <CardProductArrival
          name="Digital Accesories"
          price="30"
          priceOld="20"
          discount="30%"
          image="/images/product-08.png"
          colors={["#aae6f8", "#5f8af7", "#59c3c0"]}
        />
        <CardProductArrival
          name="PS5 Smart Remote"
          price="50"
          priceOld="25"
          discount="50%"
          image="/images/product-04.png"
          colors={["#aae6f8", "#5f8af7", "#59c3c0"]}
        />
      </div>
    </section>
  );
}
