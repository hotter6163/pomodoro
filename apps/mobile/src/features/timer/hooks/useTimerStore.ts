import { create } from "zustand";
import { TimerStorage } from "../storage";
import { TIMER_CONFIG } from "../config";
import { calcRemainingTime } from "../functions/calcRemainingTime";
import { TimerData } from "../types";

type TimerStatus = "stopped" | "running" | "paused";

type TimerStore = {
  data: TimerData | null;
  status: TimerStatus;
  initialize: () => void;
  startTimer: () => void;
  pauseTimer: () => void;
  restartTimer: () => void;
  resetTimer: () => void;
};

export const useTimerStore = create<TimerStore>((set) => ({
  data: null,
  status: "stopped",
  initialize: async () => {
    const timerData: TimerData | null = await new TimerStorage().get();

    if (!timerData) {
      set({ data: null, status: "stopped" });
      return;
    }
    const inBreak = timerData.breaks.some((b) => !b.to);
    const remainingTime = calcRemainingTime(timerData);
    if (remainingTime <= 0) set({ data: null, status: "stopped" });
    else if (inBreak) set({ data: timerData, status: "paused" });
    else set({ data: timerData, status: "running" });
  },
  startTimer: () => {
    set({
      data: {
        startedAt: new Date(),
        timeMs: TIMER_CONFIG.times.work,
        breaks: [],
      },
      status: "running",
    });
  },
  pauseTimer: () =>
    set(({ data }) => ({
      data: data
        ? {
            ...data,
            breaks: [...data.breaks, { from: new Date(), to: null }],
          }
        : data,
      status: "paused",
    })),
  restartTimer: () =>
    set(({ data }) => ({
      data: data
        ? {
            ...data,
            breaks: data.breaks.map((b) => ({
              from: b.from,
              to: b.to || new Date(),
            })),
          }
        : null,
      status: "running",
    })),
  resetTimer: () => set({ data: null, status: "stopped" }),
}));
