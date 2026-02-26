import { BannerAds } from "@/components/organisms/banner-ads/banner-ads";

import { Categories } from "@/components/organisms/categories/categories";
import { DontMiss } from "@/components/organisms/dont-miss/dont-miss";
import { MostSold } from "@/components/organisms/most-sold/most-sold";
import { NewArrivals } from "@/components/organisms/new-arrivals/new-arrivals";
import { Newsletter } from "@/components/organisms/newsletter/newsletter";
import { OurProducts } from "@/components/organisms/our-products/our-products";
import { Testimonials } from "@/components/organisms/testimonials/testimonials";
import { WhyUs } from "@/components/organisms/why-us/why-us";

export default function Home() {
  return (
    <div style={{ paddingBottom: 1000 }}>
      Home
      <Categories />
      <DontMiss />
      <OurProducts />
      <Testimonials />
      <NewArrivals />
      <MostSold />
      <WhyUs />
      <BannerAds />
      <Newsletter />
    </div>
  );
}
