import { HeaderSection } from "@/components/atoms/header-section/header-section";
import "./newsletter.css";

export function Newsletter() {
  return (
    <section className="newsletter">
      <HeaderSection
        title="Newsletter"
        subtitle="Get weekly update"
        icon="/icons/headphones.png"
        color="#3577f0"
      />
      <div className="newsletter-body">
        <div className="newsletter-input-container">
          <img src="/icons/headphones.png" width={20}></img>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
          ></input>
        </div>
        <button>Subscribe</button>
      </div>
    </section>
  );
}
