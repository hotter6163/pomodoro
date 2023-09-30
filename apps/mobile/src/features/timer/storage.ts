import { Storage } from "@/libs/store/Storage";
import { TimerData } from "./types";

export class TimerStorage extends Storage<TimerData> {
  constructor() {
    super("timer", {
      encode: (value) => {
        const shapedValue: { [key in keyof TimerData]?: any } = {};
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
  }
}
