import { useEffect } from "react";
import { useAuthState } from "./useAuthState";
import { auth, onAuthStateChanged } from "@pomodoro/firebase/auth";

export const useAuthHandler = () => {
  const { setUser } = useAuthState();

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, [auth]);
};
