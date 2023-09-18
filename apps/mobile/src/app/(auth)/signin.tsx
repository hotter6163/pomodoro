import { TextColor } from "@/constants/Color";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { StatusBar } from "expo-status-bar";
import { useSignIn } from "@/hooks/useSignIn";
import { router } from "expo-router";

const SignIn: FC = () => {
  const { signIn, loading } = useSignIn();

  const onPress = () =>
    signIn().then(() =>
      router.canGoBack() ? router.back() : router.push("(app)")
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ログイン</Text>
      <View>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={onPress}
          disabled={loading}
        />
      </View>
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
