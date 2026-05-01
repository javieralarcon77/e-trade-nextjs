import "./product-action.css";

export function ProductAction({ product }: any) {
  return (
    <div className="product-action">
      <div className="product-action-counter">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
      <button className="product-action-add-to-cart">Add to Cart</button>
      <button className="product-action-favorite">
        <img src="/icons/heart.png" className="icon" width="20px" />
      </button>
    </div>
  );
}
