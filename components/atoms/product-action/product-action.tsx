import { useState } from "react";
import "./product-action.css";

export function ProductAction({ product }: any) {
  const [count, setCount] = useState<number>(0);

  function plusCount() {
    setCount(count + 1);
  }

  function minusCount() {
    setCount(count - 1);
  }

  return (
    <div className="product-action">
      <div className="product-action-counter">
        <button onClick={minusCount}>-</button>
        <span>{count}</span>
        <button onClick={plusCount}>+</button>
      </div>
      <button className="product-action-add-to-cart">Add to Cart</button>
      <button className="product-action-favorite">
        <img src="/icons/heart.png" className="icon" width="20px" />
      </button>
    </div>
  );
}
