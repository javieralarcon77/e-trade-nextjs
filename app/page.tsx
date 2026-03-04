import { BarTop } from "@/components/molecules/bar-top/bar-top";
import { BannerAds } from "@/components/organisms/banner-ads/banner-ads";

import { Categories } from "@/components/organisms/categories/categories";
import { DontMiss } from "@/components/organisms/dont-miss/dont-miss";
import { Hero } from "@/components/organisms/hero/hero";
import { MostSold } from "@/components/organisms/most-sold/most-sold";
import { NewArrivals } from "@/components/organisms/new-arrivals/new-arrivals";
import { Newsletter } from "@/components/organisms/newsletter/newsletter";
import { OurProducts } from "@/components/organisms/our-products/our-products";
import { Testimonials } from "@/components/organisms/testimonials/testimonials";
import { WhyUs } from "@/components/organisms/why-us/why-us";
import { Menu } from "@/components/organisms/menu/menu";
import { BarLanguageTop } from "@/components/molecules/bar-language-top/bar-language-top";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f9f3f0" }}>
      <BarTop />
      <BarLanguageTop />
      <Menu />
      <Hero />
      <div style={{ backgroundColor: "white" }}>
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
    </div>
  );
}
