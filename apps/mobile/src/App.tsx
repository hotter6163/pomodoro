import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ButtonGroup, Timer } from "@/features/timer";

import "./setup";
import { requestNotificationPermissions } from "./libs/notification/registerForPushNotificationsAsync";

export default function App() {
  requestNotificationPermissions();
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
