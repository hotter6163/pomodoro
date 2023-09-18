import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
  GoogleAuthProvider,
  auth,
  signInWithCredential,
} from "@pomodoro/firebase/auth";
import { useAsyncCallback } from "react-async-hook";

export const useSignIn = () => {
  const callback = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const credential = GoogleAuthProvider.credential(userInfo.idToken);
    await signInWithCredential(auth, credential);
  };

  const { execute: signIn, ...other } = useAsyncCallback(callback);
  return { signIn, ...other };
};
