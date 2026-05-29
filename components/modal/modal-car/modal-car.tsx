import { useContext, useMemo } from "react";
import "./modal-car.css";
import { StoreContext } from "@/context/store.context";

function ProductCar({ product, moreProduct, minusProduct }: any) {
  function handleMoreProduct() {
    moreProduct(product);
  }

  function handleMinusProduct() {
    minusProduct(product);
  }

  return (
    <div className="modal-car-product">
      <div>
        <img src={product.image} width={100} />
      </div>
      <div className="modal-car-product-info">
        <h5>{product.name}</h5>
        <p className="modal-car-product-price">
          ${product.price}
          {product.priceOld && <span>${product.priceOld}</span>}
        </p>
      </div>
      <div className="modal-car-product-action">
        <button onClick={handleMinusProduct}>-</button>
        <span>{product.count}</span>
        <button onClick={handleMoreProduct}>+</button>
      </div>
    </div>
  );
}

export function ModalCar({ onCloseCar }: any) {
  const { car, moreProduct, minusProduct } = useContext(StoreContext);

  console.log({ car });

  const total = useMemo(() => {
    const temp = car.reduce(function (acc: number, product: any) {
      const totalProduct = parseFloat(product.price) * product.count;
      return acc + totalProduct;
    }, 0);
    return temp.toFixed(2);
  }, [car]);

  return (
    <div className="modal-car-overlay">
      <div className="modal-car">
        <div className="modal-car-header">
          <h1>Cart Review</h1>
          <button className="modal-car-close" onClick={onCloseCar}>
            <img src="/icons/x.png" width={15} />
          </button>
        </div>
        <div className="modal-car-list-product">
          {car.map(function (product: any) {
            return (
              <ProductCar
                product={product}
                moreProduct={moreProduct}
                minusProduct={minusProduct}
              />
            );
          })}
        </div>
        <div className="modal-car-footer">
          <div>
            <p>Subtotal:</p>
            <p>${total}</p>
          </div>
          <div>
            <button className="modal-car-btn">View Cart</button>
            <button className="modal-car-btn modal-car-btn-checkout">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
