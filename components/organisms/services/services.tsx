import "./services.css";

const SERVICES = [
  {
    title: "Fast & Secure Delivery",
    description: "Tell about your service.",
    icon: "/services/service1.png",
  },
  {
    title: "Money Back Guarantee",
    description: "Within 10 days.",
    icon: "/services/service2.png",
  },
  {
    title: "24 Hour Return Policy",
    description: "No question ask.",
    icon: "/services/service3.png",
  },
  {
    title: "Pro Quality Support",
    description: "24/7 Live support.",
    icon: "/services/service4.png",
  },
];

export function Services() {
  return (
    <section className="services">
      <div className="services-list">
        {SERVICES.map(function (item) {
          return (
            <div>
              <div>
                <img src={item.icon} width={40} />
              </div>
              <div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
