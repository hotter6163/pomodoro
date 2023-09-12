import { Storage } from "@/libs/store/Storage";

type Timer = {
  startedAt: Date;
  timeMs: number;
  breaks: { from: Date; to: Date | null }[];
};

export const TimerStorage = () =>
  new Storage<Timer>("timer", {
    encode: (value) => {
      const shapedValue: { [key in keyof Timer]?: any } = {};
      if (value.startedAt)
        shapedValue.startedAt = value.startedAt.toISOString();
      if (value.timeMs) shapedValue.timeMs = value.timeMs;
      if (value.breaks)
        shapedValue.breaks = value.breaks.map((b) => ({
          from: b.from.toISOString(),
          to: b.to?.toISOString(),
        }));
      return JSON.stringify(shapedValue);
    },
    decode: (value) => {
      const parsedValue = JSON.parse(value);
      return {
        startedAt: new Date(parsedValue.startedAt),
        timeMs: Number(parsedValue.timeMs),
        breaks: parsedValue.breaks.map((b: any) => ({
          from: new Date(b.from),
          to: b.to && new Date(b.to),
        })),
      };
    },
  });
