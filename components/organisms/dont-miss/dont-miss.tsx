import { HeaderSection } from "@/components/atoms/header-section/header-section";

import "./dont-miss.css";
import { TimerExpirience } from "@/components/atoms/timer-expirience/timer-expirience";

export function DontMiss() {
  return (
    <section className="dont-miss">
      <HeaderSection
        title="Don't Miss"
        subtitle="Enhance Your Music Expirience"
        icon="/icons/headphones.png"
        color="#ff497c"
        align="center"
      />
      <TimerExpirience />
      <button>Check it out!</button>
      <img src="/images/poster-03.png" width="90%" />
    </section>
  );
}
