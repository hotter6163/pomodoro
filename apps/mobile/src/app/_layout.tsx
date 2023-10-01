import { requestNotificationPermissions } from "@/libs/notification";
import "@/setup";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

const Layout = () => {
  requestNotificationPermissions();

  return (
    <PaperProvider>
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
    </PaperProvider>
  );
};

export default Layout;
