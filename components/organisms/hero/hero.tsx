import { HeaderSection } from "@/components/atoms/header-section/header-section";
import "./hero.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

const IMAGES = [
  { image: "/images/product-38.png", title: "Roco Wireless Headphone" },
  { image: "/images/product-39.png", title: "Smart Digital Watch" },
  { image: "/images/product-38.png", title: "Roco Wireless Headphone" },
  { image: "/images/product-39.png", title: "Smart Digital Watch" },
];

export function Hero() {
  const [selectImage, setSelectImage] = useState(0);

  return (
    <div className="hero-background">
      <section className="hero">
        <div>
          <HeaderSection
            title="Hot Deal In This Week"
            subtitle={IMAGES[selectImage].title}
            color="#ff497c"
            icon="/icons/star.png"
          />
          <div>
            <button>Shop Now</button>
          </div>
        </div>
        <div>
          <Carousel
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            onChange={function (index) {
              setSelectImage(index);
            }}
          >
            {IMAGES.map(function (item) {
              return (
                <div>
                  <img src={item.image} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
    </div>
  );
}
