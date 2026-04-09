import { HeaderSection } from "@/components/atoms/header-section/header-section";
import { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./hero.css";

const IMAGES = [
  { image: "/images/product-38.png", title: "Roco Wireless Headphone" },
  { image: "/images/product-39.png", title: "Smart Digital Watch" },
  { image: "/images/product-38.png", title: "Roco Wireless Headphone" },
  { image: "/images/product-39.png", title: "Smart Digital Watch" },
];

export function Hero() {
  const [selectImage, setSelectImage] = useState(0);

  console.log({ selectImage });

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
          <div className="hero-footer">
            <a className="btn" href="/shop">
              <img src="/icons/car.png" width={20} />
              Shop Now
            </a>

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
        <div className="hero-right">
          <Carousel
            swipeable
            responsive={{
              mobile: {
                items: 1,
                slidesToSlide: 1,
                breakpoint: { max: 2000, min: 0 },
              },
            }}
            afterChange={function (prev, state) {
              setSelectImage(state.currentSlide);
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
          <div className="carrousel-indicator">
            {IMAGES.map(function (item, index) {
              if (index == selectImage) {
                return <div className="active"></div>;
              }
              return <div></div>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
