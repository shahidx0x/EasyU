import { useEffect, useState } from "react";
import { allusers } from "./Config";

export const useGetAllUser = () => {
  const [alluser, Setalluser] = useState();
  useEffect(() => {
    fetch(allusers)
      .then((res) => res.json())
      .then((data) => Setalluser(data.allusers));
  }, [alluser]);
  return [alluser];
};
