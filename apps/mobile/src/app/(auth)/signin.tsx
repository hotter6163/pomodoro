import { TextColor } from "@/constants/Color";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const SignIn: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ログイン</Text>
      <StatusBar style="light" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: TextColor.dark,
    textAlign: "center",
    marginBottom: 16,
  },
});
