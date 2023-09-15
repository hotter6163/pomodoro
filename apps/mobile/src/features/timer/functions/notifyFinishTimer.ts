import { scheduleNotificationAsync } from "expo-notifications";

export const notifyFinishTimer = (timeMs: number) =>
  scheduleNotificationAsync({
    content: {
      body: "Your timer has finished!",
      sound: true,
    },
    trigger: { seconds: timeMs / 1000 },
  });
