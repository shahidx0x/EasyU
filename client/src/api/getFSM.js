import { useEffect, useState } from "react";
import { FSM } from "./Config";

export const useGetFSM = () => {
  const [fsm, SetFsm] = useState();
  useEffect(() => {
    fetch(FSM)
      .then((res) => res.json())
      .then((data) => SetFsm(data.data));
  }, [fsm]);
  return [fsm];
};
