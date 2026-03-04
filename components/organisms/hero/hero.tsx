import { HeaderSection } from "@/components/atoms/header-section/header-section";
import "./hero.css";

export function Hero() {
  return (
    <div className="hero-background">
      <section className="hero">
        <div>
          <HeaderSection
            title="Hot Deal In This Week"
            subtitle="Roco Wireless"
            color="#ff497c"
            icon="/icons/star.png"
          />
        </div>
        <div>
          <p>Aqui van las imagenes</p>
        </div>
      </section>
    </div>
  );
}
