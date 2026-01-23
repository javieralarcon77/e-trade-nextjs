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
        <CardProduct
          name="Yantiti Leather & Canvas Bags"
          price="29.99"
          priceOld="49.99"
          discount="20%"
          calification="64"
          image="/images/product-01.png"
          imageHover="/images/product-08.png"
        />
        <CardProduct
          name="Level 20 RGB Cherry"
          price="49.99"
          image="/images/product-02.png"
          imageHover="/images/product-06.png"
          colors={["#aae6f8", "#5f8af7", "#59c3c0"]}
        />
        <CardProduct
          name="Logitech Streamcam"
          price="28.99"
          priceOld="48.99"
          discount="20%"
          image="/images/product-03.png"
          imageHover="/images/product-03.png"
          colors={["#aae6f8", "#5f8af7"]}
        />
        <CardProduct
          name="3D wireless headset"
          price="48.99"
          calification="44"
          image="/images/product-04.png"
          imageHover="/images/product-05.png"
        />
      </div>
    </section>
  );
}
