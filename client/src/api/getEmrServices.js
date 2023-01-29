import { useEffect, useState } from "react";
import { emrServicesURL } from "./Config";

export const useGetEmrServices = () => {
  const [emrServices, SetEmrServices] = useState();
  useEffect(() => {
    fetch(emrServicesURL)
      .then((res) => res.json())
      .then((data) => SetEmrServices(data.allEmrServices));
  }, [emrServices]);
  return [emrServices];
};
