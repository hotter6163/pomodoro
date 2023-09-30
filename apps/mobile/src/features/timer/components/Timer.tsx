import { StyleSheet, Text, View } from "react-native";
import { useTimerStore } from "../hooks/useTimerStore";
import { useEffect } from "react";
import { useSaveStorage } from "../hooks/useSaveStorage";
import { useTime } from "../hooks/useTimer";

export const Timer = () => {
  const initialize = useTimerStore((state) => state.initialize);
  const { minutes, seconds } = useTime();

  useSaveStorage();
  useEffect(() => {
    initialize();
  }, []);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>
        {minutes}:{seconds}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    height: 300,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    borderColor: "#fff",
    borderWidth: 24,
    borderRadius: 150,
  },
  timerText: {
    fontSize: 64,
    color: "#333",
  },
});
