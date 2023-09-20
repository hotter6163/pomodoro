import { connectAuthEmulator, getAuth } from "firebase/auth";
import { app } from "./app";
import { isEmulator } from "./isEmulator";

export const auth = getAuth(app);

if (isEmulator()) connectAuthEmulator(auth, "http://localhost:9099");

export * from "firebase/auth";
