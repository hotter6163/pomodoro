import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { app } from "./app";
import { isEmulator } from "./isEmulator";

export const firestore = getFirestore(app);

if (isEmulator()) connectFirestoreEmulator(firestore, "localhost", 8080);

export * from "firebase/firestore";
