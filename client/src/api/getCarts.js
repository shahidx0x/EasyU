import { useEffect, useState } from "react";
import { CartsURL } from "./Config";

export const useGetCarts = () => {
  const [carts, SetCarts] = useState();
  useEffect(() => {
    fetch(CartsURL)
      .then((res) => res.json())
      .then((data) => SetCarts(data.allCarts));
  }, [carts]);
  return [carts];
};
