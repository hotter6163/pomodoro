import "@/setup";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ButtonGroup, Timer } from "@/features/timer";
import { requestNotificationPermissions } from "@/libs/notification";

const Home = () => {
  requestNotificationPermissions();
  return (
    <View style={styles.container}>
      <Timer />
      <ButtonGroup />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00bfff",
    alignItems: "center",
    justifyContent: "center",
  },
});
