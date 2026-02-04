import { DontMiss } from "@/components/organisms/dont-miss/dont-miss";
import { NewArrivals } from "@/components/organisms/new-arrivals/new-arrivals";
import { OurProducts } from "@/components/organisms/our-products/our-products";
import { Testimonials } from "@/components/organisms/testimonials/testimonials";

export default function Home() {
  return (
    <div style={{ paddingBottom: 1000 }}>
      Home
      <DontMiss />
      <OurProducts />
      <Testimonials />
      <NewArrivals />
    </div>
  );
}
