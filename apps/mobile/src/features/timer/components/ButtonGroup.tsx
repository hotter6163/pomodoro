import { FC } from "react";
import { useTimerStore } from "../hooks/useTimerStore";
import { Button } from "@/components/Button";
import { StyleSheet, Text, View } from "react-native";
import { Color, TextColor } from "@/constants/Color";

export const ButtonGroup: FC = () => {
  const { status, startTimer, pauseTimer, restartTimer, resetTimer } =
    useTimerStore(
      ({ status, startTimer, pauseTimer, restartTimer, resetTimer }) => ({
        status,
        startTimer,
        pauseTimer,
        restartTimer,
        resetTimer,
      })
    );

  return (
    <View style={styles.buttonGroupContainer}>
      {(() => {
        switch (status) {
          case "stopped":
            return (
              <Button
                style={[styles.baseButton, styles.startButton]}
                onPress={startTimer}
              >
                <Text style={[styles.baseButtonText, styles.startButtonText]}>
                  START
                </Text>
              </Button>
            );
          case "running":
            return (
              <Button style={styles.baseButton} onPress={pauseTimer}>
                <Text style={[styles.baseButtonText]}>STOP</Text>
              </Button>
            );
          case "paused":
            return (
              <>
                <Button
                  style={[styles.baseButton, styles.startButton]}
                  onPress={restartTimer}
                >
                  <Text style={[styles.baseButtonText, styles.startButtonText]}>
                    RESTART
                  </Text>
                </Button>
                <Button style={[styles.baseButton]} onPress={resetTimer}>
                  <Text style={[styles.baseButtonText, styles.resetButtonText]}>
                    RESET
                  </Text>
                </Button>
              </>
            );
        }
      })()}
    </View>
  );
};

const BUTTON_HEIGHT = 32 + 24;
const GAP = 24;

const styles = StyleSheet.create({
  buttonGroupContainer: {
    width: "75%",
    marginTop: 24,
    display: "flex",
    flexDirection: "column",
    gap: GAP,
    height: BUTTON_HEIGHT * 2 + GAP,
    justifyContent: "center",
  },
  baseButton: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    alignItems: "center",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  baseButtonText: {
    fontSize: 32,
    color: TextColor.dark,
    textAlign: "center",
  },
  startButton: {
    backgroundColor: Color.primary,
  },
  startButtonText: {
    color: "#fff",
  },
  resetButtonText: {
    fontWeight: "300",
  },
});
