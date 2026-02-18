import "./categories.css";

import { HeaderSection } from "@/components/atoms/header-section/header-section";
import { IconCategory } from "@/components/atoms/icon-category/icon-category";

const CATEGORIES = [
  { image: "/categories/elec-4.png", name: "phones" },
  { image: "/categories/elec-5.png", name: "computers" },
  { image: "/categories/elec-11.png", name: "accesories" },
  { image: "/categories/elec-6.png", name: "laptops" },
  { image: "/categories/elec-2.png", name: "monitors" },
  { image: "/categories/elec-7.png", name: "NetWorking" },
  { image: "/categories/elec-8.png", name: "PC gaming" },
  { image: "/categories/elec-1.png", name: "Smart whatches" },
  { image: "/categories/elec-9.png", name: "Headphones" },
  { image: "/categories/elec-10.png", name: "Camera & Photo" },
  { image: "/categories/elec-8.png", name: "Video games" },
  { image: "/categories/elec-1.png", name: "Sports" },
];

export function Categories() {
  return (
    <section>
      <HeaderSection
        title="Categories"
        subtitle="Browse by Category"
        icon="/icons/headphones.png"
        color="#ff497c"
      />
      <div className="list-categories">
        {CATEGORIES.map(function (value) {
          return <IconCategory image={value.image} name={value.name} />;
        })}
      </div>
    </section>
  );
}
