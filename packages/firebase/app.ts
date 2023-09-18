import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY || process.env.PUBLIC_API_KEY,
  authDomain:
    process.env.EXPO_PUBLIC_AUTH_DOMAIN || process.env.PUBLIC_AUTH_DOMAIN,
  projectId:
    process.env.EXPO_PUBLIC_PROJECT_ID || process.env.PUBLIC_PROJECT_ID,
  storageBucket:
    process.env.EXPO_PUBLIC_STORAGE_BUCKET || process.env.PUBLIC_STORAGE_BUCKET,
  messagingSenderId:
    process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID ||
    process.env.PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID || process.env.PUBLIC_APP_ID,
  measurementId:
    process.env.EXPO_PUBLIC_MEASUREMENT_ID || process.env.PUBLIC_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

export * from "firebase/app";
