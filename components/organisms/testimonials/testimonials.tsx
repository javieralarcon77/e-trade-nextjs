"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { HeaderSection } from "@/components/atoms/header-section/header-section";
import { CardTestimonial } from "@/components/molecules/card-testimonial/card-testimonial";
import "./testimonials.css";

export function Testimonials() {
  return (
    <section className="testimonials">
      <HeaderSection
        title="Testimonials"
        subtitle="Users Feedback"
        icon="/icons/quotes.png"
        color="#ff497c"
      />
      <Carousel showIndicators={false} showStatus={false} infiniteLoop={true}>
        <div>
          <CardTestimonial />
        </div>
        <div>
          <CardTestimonial />
        </div>
        <div>
          <CardTestimonial />
        </div>
      </Carousel>
    </section>
  );
}
