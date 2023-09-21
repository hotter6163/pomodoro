import { auth, signOut as signOutAuth } from "@pomodoro/firebase/client/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useAsyncCallback } from "react-async-hook";

export const useSignOut = () => {
  const { execute: signOut, ...other } = useAsyncCallback(() =>
    Promise.all([signOutAuth(auth), GoogleSignin.signOut()])
  );

  return { signOut, ...other };
};
