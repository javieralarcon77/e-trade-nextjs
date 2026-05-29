"use client";

import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext({} as any);

export function StoreContextComponent({ children }: any) {
  const [car, setCar] = useState<any[]>([]);
  const [cantProducts, setCantProducts] = useState<number>(0);

  useEffect(() => {
    const temp = car.reduce(function (cont, product) {
      return cont + product.count;
    }, 0);

    setCantProducts(temp);
  }, [car]);

  function addProduct(product: any) {
    setCar(function (prev: any) {
      return [...prev, { ...product, count: 1 }];
    });
  }

  function removeProduct(product: any) {
    setCar(function (prev: any) {
      const indexProduct = prev.findIndex(function (item: any) {
        return item.name == product.name;
      });
      prev.splice(indexProduct, 1);
      return [...prev];
    });
  }

  function moreProduct(product: any) {
    const name = product.name;
    setCar(function (prev: any) {
      // console.log({ prev });
      const indexProduct = prev.findIndex(function (item: any) {
        return item.name == name;
      });

      const tempCount = prev[indexProduct].count;
      // console.log({ tempCount });

      prev[indexProduct].count = tempCount + 1;

      return [...prev];
    });
  }

  function minusProduct(product: any) {
    const name = product.name;
    setCar(function (prev: any) {
      // console.log({ prev });
      const indexProduct = prev.findIndex(function (item: any) {
        return item.name == name;
      });

      const tempCount = prev[indexProduct].count;

      if (tempCount == 1) {
        prev.splice(indexProduct, 1);
        return [...prev];
      }

      prev[indexProduct].count = tempCount - 1;
      return [...prev];
    });
  }

  return (
    <StoreContext.Provider
      value={{
        car,
        setCar,
        cantProducts,
        setCantProducts,
        addProduct,
        removeProduct,
        moreProduct,
        minusProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
