"use client";

import { BarLanguageTop } from "@/components/molecules/bar-language-top/bar-language-top";
import { Menu } from "@/components/organisms/menu/menu";
import { SidebarMenu } from "@/components/organisms/sidebar-menu/sidebar-menu";
import { Newsletter } from "@/components/organisms/newsletter/newsletter";
import { Services } from "@/components/organisms/services/services";
import { Footer } from "@/components/organisms/footer/footer";
import { BarBottom } from "@/components/molecules/bar-bottom/bar-bottom";

import { useSidebar } from "@/hooks/useSidebar";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/products.services";
import { ListProducts } from "@/components/organisms/list-products/list-products";
import { BarOffer } from "@/components/molecules/bar-offer/bar-offer";
import { TitlePage } from "@/components/molecules/title-page/title-page";
import { FilterShop } from "@/components/molecules/filter-shop/filter-shop";

export default function ShopPage() {
  const { openSidebar, onOpenMenu, onCloseMenu } = useSidebar();

  const [products, setProducts] = useState<any[]>([]);

  async function loadProducts() {
    const temp = await getProducts();
    setProducts(temp.products);
  }

  useEffect(function () {
    loadProducts();
  }, []);

  return (
    <div style={{ backgroundColor: "#f9f3f0" }}>
      <BarLanguageTop />
      <Menu onOpenMenu={onOpenMenu} />
      {openSidebar && <SidebarMenu onCloseMenu={onCloseMenu} />}
      <div style={{ backgroundColor: "white" }}>
        <BarOffer />
        <TitlePage />
        <FilterShop />
        <section>
          <ListProducts products={products} />
        </section>

        <Newsletter />
        <Services />
        <Footer />
        <BarBottom />
      </div>
    </div>
  );
}
