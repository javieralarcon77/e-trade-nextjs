import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./bar-offer.css";

export function BarOffer() {
  return (
    <div className="bar-offer">
      <Carousel
        autoPlay
        infinite
        autoPlaySpeed={5000}
        responsive={{
          mobile: {
            items: 1,
            slidesToSlide: 1,
            breakpoint: { max: 2000, min: 0 },
          },
        }}
      >
        <div className="slider-offer">
          <p>
            STUDENT NOW GET 10% OFF: <a href="#">GET OFFER</a>
          </p>
        </div>
        <div className="slider-offer">
          <p>
            STUDENT NOW GET 10% OFF: <a href="#">GET OFFER</a>
          </p>
        </div>
        <div className="slider-offer">
          <p>
            STUDENT NOW GET 10% OFF: <a href="#">GET OFFER</a>
          </p>
        </div>
      </Carousel>
    </div>
  );
}
