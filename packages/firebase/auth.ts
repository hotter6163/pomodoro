import { getAuth } from "firebase/auth";
import { app } from "./app";

export const auth = getAuth(app);

export * from "firebase/auth";
