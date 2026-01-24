import { HeaderSection } from "@/components/atoms/header-section/header-section";

import "./testimonials.css";
import { CardTestimonial } from "@/components/molecules/card-testimonial/card-testimonial";

export function Testimonials() {
  return (
    <section className="testimonials">
      <HeaderSection
        title="Testimonials"
        subtitle="Users Feedback"
        icon="/icons/quotes.png"
        color="#ff497c"
      />
      <div className="testimonials-carrousel">
        <CardTestimonial />
        <CardTestimonial />
        <CardTestimonial />
      </div>
    </section>
  );
}
