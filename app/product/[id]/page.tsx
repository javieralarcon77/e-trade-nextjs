"use client";

import { BarLanguageTop } from "@/components/molecules/bar-language-top/bar-language-top";
import { Menu } from "@/components/organisms/menu/menu";
import { SidebarMenu } from "@/components/organisms/sidebar-menu/sidebar-menu";
import { Newsletter } from "@/components/organisms/newsletter/newsletter";
import { Services } from "@/components/organisms/services/services";
import { Footer } from "@/components/organisms/footer/footer";
import { BarBottom } from "@/components/molecules/bar-bottom/bar-bottom";

import { useSidebar } from "@/hooks/useSidebar";
import { BarOffer } from "@/components/molecules/bar-offer/bar-offer";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/products.services";
import { DetailProduct } from "@/components/organisms/detail-product/detail-product";
import { ProductRecently } from "@/components/organisms/product-recently/product-recently";

export default function ProductPage() {
  const { openSidebar, onOpenMenu, onCloseMenu } = useSidebar();

  const [product, setProduct] = useState<any>();

  async function loadProduct() {
    const temp = await getProducts();
    setProduct(temp.products[0]);
  }

  useEffect(function () {
    loadProduct();
  }, []);

  return (
    <div>
      <BarLanguageTop isHome={false} />
      <Menu onOpenMenu={onOpenMenu} isHome={false} />
      {openSidebar && <SidebarMenu onCloseMenu={onCloseMenu} />}
      <div style={{ backgroundColor: "white" }}>
        <BarOffer />
        {product && <DetailProduct product={product} />}
        <ProductRecently />
        <Newsletter />
        <Services />
        <Footer />
        <BarBottom />
      </div>
    </div>
  );
}
