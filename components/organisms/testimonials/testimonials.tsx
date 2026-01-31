"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { HeaderSection } from "@/components/atoms/header-section/header-section";
import { CardTestimonial } from "@/components/molecules/card-testimonial/card-testimonial";
import "./testimonials.css";
import { useState } from "react";

export function Testimonials() {
  const [selectTestimonial, setSelectTestimonial] = useState(0);

  function moveRigth() {
    if (selectTestimonial == 2) {
      setSelectTestimonial(0);
    } else setSelectTestimonial(selectTestimonial + 1);
  }

  function moveLeft() {
    if (selectTestimonial == 0) {
      setSelectTestimonial(2);
    } else setSelectTestimonial(selectTestimonial - 1);
  }

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
        selectedItem={selectTestimonial}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <div>
          <CardTestimonial
            name="James C. Anderson"
            profesion="Head of Idea"
            avatar="/images/image-1.png"
          />
        </div>
        <div>
          <CardTestimonial
            name="James C. Anderson"
            profesion="Programmer"
            avatar="/images/image-2.png"
          />
        </div>
        <div>
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
