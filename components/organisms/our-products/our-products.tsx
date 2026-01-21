import { CardProduct } from "@/components/molecules/card-product/card-product";
import "./our-products.css";

export function OurProducts() {
  return (
    <section className="our-products">
      <header className="our-products-header">
        <div>
          <h2>
            <div className="our-products-basket">
              <img src="/icons/basket.png" width="20px" />
            </div>
            Our Products
          </h2>
          <h4>Explore our products</h4>
        </div>
        <div className="our-products-buttons">
          <button>
            <img src="/icons/arrow-left.png" width="20px" />
          </button>
          <button>
            <img src="/icons/arrow-right.png" width="20px" />
          </button>
        </div>
      </header>
      <div className="our-products-products">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </section>
  );
}
