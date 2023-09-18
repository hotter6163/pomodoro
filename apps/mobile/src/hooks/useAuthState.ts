import { create } from "zustand";
import { User as AuthUser } from "@pomodoro/firebase/auth";

type User = {
  id: string;
  name: string | null;
};

type AuthState = {
  user: User | null;
  setUser: (user: AuthUser | null) => void;
};

export const useAuthState = create<AuthState>((set) => ({
  user: null,
  setUser: (user) =>
    set({ user: user && { id: user.uid, name: user.displayName } }),
}));
