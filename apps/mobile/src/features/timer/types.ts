export type TimerData = {
  startedAt: Date;
  timeMs: number;
  breaks: { from: Date; to: Date | null }[];
};
