import { useAuthHandler } from "@/hooks/useAuthHandler";
import { requestNotificationPermissions } from "@/libs/notification";
import "@/setup";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  requestNotificationPermissions();
  GoogleSignin.configure();
  useAuthHandler();

  return (
    <>
      <Stack>
        <Stack.Screen
          name="(app)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)/signin"
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
};

export default Layout;
