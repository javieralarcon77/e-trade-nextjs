import "./card-product-action.css";

export function CardProductAction() {
  return (
    <div className="card-product-action">
      <button>
        <img src="/icons/eye.png" className="icon" width="20px" />
      </button>
      <button className="card-product-add-to-cart">Add to cart</button>
      <button>
        <img src="/icons/heart.png" className="icon" width="20px" />
      </button>
    </div>
  );
}
