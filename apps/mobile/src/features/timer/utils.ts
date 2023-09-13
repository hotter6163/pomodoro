import { TimerData } from "./types";

export const calcRemainingTime = (timerData: TimerData | null) => {
  if (!timerData) return 0;

  const time =
    timerData.timeMs -
    Math.floor(Date.now() - timerData.startedAt.getTime()) +
    timerData.breaks.reduce(
      (acc, b) =>
        acc + Math.floor((b.to || new Date()).getTime() - b.from.getTime()),
      0
    );
  return Math.max(0, time);
};
