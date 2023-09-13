import { useEffect, useState } from "react";
import { useTimerStore } from "./useTimerStore";
import { calcRemainingTime } from "../utils";

const INTERVAL = 100;

export const useTime = () => {
  const [timeMs, setTimeMs] = useState(0);
  const { status, data, resetTimer } = useTimerStore((state) => ({
    status: state.status,
    data: state.data,
    resetTimer: state.resetTimer,
  }));

  useEffect(() => {
    switch (status) {
      case "stopped":
        setTimeMs(0);
        return;
      case "running":
        const interval = setInterval(() => {
          const timeMs = calcRemainingTime(data);
          setTimeMs(timeMs);
          if (timeMs <= 1) resetTimer();
        }, INTERVAL);
        return () => clearInterval(interval);
    }
  }, [status, data]);

  return splitTimeMs(timeMs);
};

const splitTimeMs = (timeMs: number) => {
  const zeroPad = (num: number) => String(num).padStart(2, "0");

  const totalSeconds = Math.floor(timeMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - minutes * 60;
  return { minutes: zeroPad(minutes), seconds: zeroPad(seconds) };
};