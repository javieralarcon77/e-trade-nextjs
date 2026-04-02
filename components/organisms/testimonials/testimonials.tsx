"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { HeaderSection } from "@/components/atoms/header-section/header-section";
import { CardTestimonial } from "@/components/molecules/card-testimonial/card-testimonial";
import "./testimonials.css";
import { useRef, useState } from "react";

export function Testimonials() {
  const carrousel = useRef<Carousel>(null);

  function moveRigth() {
    carrousel.current?.next(1);
  }

  function moveLeft() {
    carrousel.current?.previous(1);
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 900 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section suppressHydrationWarning={true} className="testimonials">
      <HeaderSection
        title="Testimonials"
        subtitle="Users Feedback"
        icon="/icons/quotes.png"
        color="#ff497c"
        onClickButtonRigth={moveRigth}
        onClickbuttonLeft={moveLeft}
      />
      <Carousel
        ref={carrousel}
        responsive={responsive}
        infinite={true}
        arrows={false}
      >
        <div className="item-carrousel-testimonials">
          <CardTestimonial
            name="James C. Anderson"
            profesion="Head of Idea"
            avatar="/images/image-1.png"
          />
        </div>
        <div className="item-carrousel-testimonials different">
          <CardTestimonial
            name="James C. Anderson"
            profesion="Programmer"
            avatar="/images/image-2.png"
          />
        </div>
        <div className="item-carrousel-testimonials">
          <CardTestimonial
            name="James C. Anderson"
            profesion="CFO"
            avatar="/images/image-3.png"
          />
        </div>
      </Carousel>
    </section>
  );
}
