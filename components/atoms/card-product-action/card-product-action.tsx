import { useContext, useEffect, useMemo, useState } from "react";
import { StoreContext } from "@/context/store.context";

import "./card-product-action.css";

export function CardProductAction({ product }: any) {
  const { car, addProduct, removeProduct } = useContext(StoreContext);

  /*
  const [isInCar, setIsInCar] = useState<boolean>(false);

  useEffect(function(){
    const index = car.findIndex(function (item: any) {
      return item.name == product.name;
    });
    setIsInCar(index >= 0);
  }, [car]);*/

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
    <div className="card-product-action">
      <button>
        <img src="/icons/eye.png" className="icon" width="20px" />
      </button>
      {isInCar && (
        <button
          className="card-product-add-to-cart"
          onClick={handleRemoveProduct}
        >
          Remove to cart
        </button>
      )}
      {!isInCar && (
        <button className="card-product-add-to-cart" onClick={handleAddProduct}>
          Add to cart
        </button>
      )}

      <button>
        <img src="/icons/heart.png" className="icon" width="20px" />
      </button>
    </div>
  );
}
