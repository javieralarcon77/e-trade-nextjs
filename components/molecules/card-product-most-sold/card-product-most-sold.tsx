import { Calification } from "@/components/atoms/calification/calification";
import "./card-product-most-sold.css";
import { useContext, useMemo } from "react";
import { StoreContext } from "@/context/store.context";

export function CardProductMostSold(product: any) {
  const { image, name, price, oldPrice, reviews } = product;

  const { car, addProduct, removeProduct } = useContext(StoreContext);

  const isInCar = useMemo(
    function () {
      const index = car.findIndex(function (item: any) {
        return item.name == product.name;
      });
      return index >= 0;
    },
    [car],
  );

  function handleAddProduct(event: any) {
    event.preventDefault();
    addProduct(product);
  }

  function handleRemoveProduct(event: any) {
    event.preventDefault();
    removeProduct(product);
  }

  return (
    <div className="card-most-sold">
      <div className="card-most-sold-image-container">
        <img src={image} />
      </div>
      <div className="card-most-sold-body">
        <Calification calification={reviews} type="review" />

        <h4>{name}</h4>
        <p>
          {price} <span>{oldPrice}</span>{" "}
        </p>
      </div>
      <div className="card-most-sold-buttons">
        {isInCar && (
          <button onClick={handleRemoveProduct}>
            <img src="/icons/trash.png" width="20px" />
          </button>
        )}
        {!isInCar && (
          <button onClick={handleAddProduct}>
            <img src="/icons/car.png" width="20px" />
          </button>
        )}
        <button>
          <img src="/icons/heart.png" width="20px" />
        </button>
      </div>
    </div>
  );
}
