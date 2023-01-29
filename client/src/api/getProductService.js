import { useEffect, useState } from "react";
import { prodServicesURL } from "./Config";


export const useGetProductServices = () => {
  const [productService, SetProductService] = useState();
  useEffect(() => {
    fetch(prodServicesURL)
      .then((res) => res.json())
      .then((data) => SetProductService(data.allProductServices));
  }, [productService]);
  return [productService];
};
