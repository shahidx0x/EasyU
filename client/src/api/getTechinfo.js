import { useEffect, useState } from "react";
import { techInfoURL } from "./Config";

const useGetTechinfo = () => {
  const [techInfo, SetTechInfo] = useState();
  useEffect(() => {
    fetch(techInfoURL)
      .then((res) => res.json())
      .then((data) => SetTechInfo(data.allTechInfo));
  }, [techInfo]);
  return [techInfo];
};

export default useGetTechinfo;
