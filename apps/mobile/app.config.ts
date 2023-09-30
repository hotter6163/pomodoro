import { AppJSONConfig } from "@expo/config";

const Config: AppJSONConfig = {
  expo: {
    name: "pomodoro",
    slug: "pomodoro",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    scheme: "pomodoro",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      infoPlist: {
        UIBackgroundModes: ["remote-notification"],
      },
      bundleIdentifier: "com.pomodoro.app",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.pomodoro.app",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "45b3fc1d-c7ab-4aeb-ad33-fbabb6c61b4f",
      },
    },
  },
};

export default Config;
