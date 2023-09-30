import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ButtonGroup, Timer } from "@/features/timer";
import { FC } from "react";
import { Color } from "@/constants/Color";

const Home: FC = () => {
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
    backgroundColor: Color.brand,
    alignItems: "center",
    justifyContent: "center",
  },
});
