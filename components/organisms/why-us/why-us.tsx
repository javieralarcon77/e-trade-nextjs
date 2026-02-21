import { HeaderSection } from "@/components/atoms/header-section/header-section";
import "./why-us.css";
import { ItemWhyUs } from "@/components/atoms/item-why-us/item-why-us";

export function WhyUs() {
  return (
    <section className="why-us">
      <HeaderSection
        title="Why us"
        subtitle="Why people choose us"
        icon="/icons/headphones.png"
        color="#ff497c"
        align="center"
      />
      <div className="why-us-items">
        <ItemWhyUs image="/images/service6.png" name="Fast& Secure Delivery" />
        <ItemWhyUs
          image="/images/service7.png"
          name="100% Guarantee On Product"
        />
        <ItemWhyUs image="/images/service8.png" name="24 Hour Return Policy" />
        <ItemWhyUs image="/images/service9.png" name="24 Hour Return Policy" />
        <ItemWhyUs
          image="/images/service10.png"
          name="Next Level Pro Quality"
        />
      </div>
    </section>
  );
}
