import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ButtonGroup, Timer } from "@/features/timer";

export default function App() {
  return (
    <View style={styles.container}>
      <Timer />
      <ButtonGroup />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00bfff",
    alignItems: "center",
    justifyContent: "center",
  },
});
