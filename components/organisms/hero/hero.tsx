import { HeaderSection } from "@/components/atoms/header-section/header-section";
import "./hero.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { Calification } from "@/components/atoms/calification/calification";

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
        <div className="hero-left">
          <HeaderSection
            title="Hot Deal In This Week"
            subtitle={IMAGES[selectImage].title}
            color="#ff497c"
            icon="/icons/star.png"
          />
          <div>
            <button>Shop Now</button>

            <div className="hero-reviews">
              <div className="hero-reviews-profiles">
                <img src="/images/image-1.png" width={60} />
                <img src="/images/image-2.png" width={60} />
                <img src="/images/image-3.png" width={60} />
                <img src="/images/image-4.png" width={60} />
              </div>
              <div className="hero-reviews-calification">
                <div className="hero-reviews-calification-stars">
                  <img src="/icons/star.png" width="15px" />
                  <img src="/icons/star.png" width="15px" />
                  <img src="/icons/star.png" width="15px" />
                  <img src="/icons/star.png" width="15px" />
                  <img src="/icons/star-outline.png" width="15px" />
                </div>
                <p>
                  100+ <span>reviews</span>
                </p>
              </div>
            </div>
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
