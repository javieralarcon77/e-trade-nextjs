import { OurProducts } from "@/components/organisms/our-products/our-products";
import { Testimonials } from "@/components/organisms/testimonials/testimonials";

export default function Home() {
  return (
    <div style={{ paddingBottom: 1000 }}>
      Home
      <OurProducts />
      <Testimonials />
    </div>
  );
}
