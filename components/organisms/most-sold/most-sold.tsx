import { HeaderSection } from "@/components/atoms/header-section/header-section";
import { CardProductMostSold } from "@/components/molecules/card-product-most-sold/card-product-most-sold";

export function MostSold() {
  return (
    <section>
      <HeaderSection
        title="Most Sold"
        subtitle="Most Sold in eTrade Store"
        align="center"
        color="#8c71db"
        icon="/icons/star.png"
      ></HeaderSection>
      <div>
        <CardProductMostSold
          name="media remote"
          image="/images/product-01.png"
          price="$29.99"
          oldPrice="$49.99"
          reviews={50}
        />
        <CardProductMostSold
          name="hd camera"
          image="/images/product-02.png"
          price="$49.99"
          reviews={100}
        />
      </div>
    </section>
  );
}
