import { useEffect } from "react";
import { useTimerStore } from "./useTimerStore";
import { TimerStorage } from "../storage";

const storage = new TimerStorage();

export const useSaveStorage = () => {
  const data = useTimerStore((state) => state.data);

  useEffect(() => {
    if (data) storage.set(data);
  }, [data]);
};
