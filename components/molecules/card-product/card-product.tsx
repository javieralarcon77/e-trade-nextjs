import { Calification } from "@/components/atoms/calification/calification";
import "./card-product.css";

export function CardProduct() {
  return (
    <article className="card-product">
      <div className="card-product-image-container">
        <img src="/images/product-01.png" />
        <img
          className="card-product-image-hover"
          src="/images/product-08.png"
        />
        <span className="card-product-offer">20% off</span>
        <div className="card-product-action">
          <button>
            <img src="/icons/eye.png" width="20px" />
          </button>
          <button className="card-product-add-to-cart">Add to cart</button>
          <button>
            <img src="/icons/heart.png" width="20px" />
          </button>
        </div>
      </div>
      <div>
        <Calification />
        <h5 className="card-product-name">Yanti Leather & Canvas Bags</h5>
        <div className="card-product-price">
          <h6>$29.99</h6>
          <p>$49.99</p>
        </div>
      </div>
    </article>
  );
}
