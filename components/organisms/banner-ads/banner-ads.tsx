import { Banner } from "@/components/atoms/banner/banner";

import "./banner-ads.css";

export function BannerAds() {
  return (
    <section className="banner-ads">
      <Banner
        image="/images/poster-01.png"
        title="Rich sound, for less."
        text="Collections"
        dir="right"
      />
      <Banner
        image="/images/poster-02.png"
        title="Get VR Reality Glass"
        text="50% Offer in Winter"
        dir="left"
        column="column-reverse"
      />
    </section>
  );
}
