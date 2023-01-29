import { useEffect, useState } from "react";
import { WPInfoURL } from "./Config";

const useGetWPinfo = () => {
  const [wpInfo, SetWPInfo] = useState();
  useEffect(() => {
    fetch(WPInfoURL)
      .then((res) => res.json())
      .then((data) => SetWPInfo(data.allWpInfo));
  }, [wpInfo]);
  return [wpInfo];
};

export default useGetWPinfo;
