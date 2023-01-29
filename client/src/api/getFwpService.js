import { useEffect, useState } from "react";
import { fwpServicesURL } from "./Config";

export const useGetFwpServices = () => {
  const [fwpServices, SetFwpServices] = useState();
  useEffect(() => {
    fetch(fwpServicesURL)
      .then((res) => res.json())
      .then((data) => SetFwpServices(data.allFwpServices));
  }, [fwpServices]);
  return [fwpServices];
};
