import { getFirestore } from "firebase-admin/firestore";
import { adminApp } from "./app";

export const adminFirestore = getFirestore(adminApp);

export * from "firebase-admin/firestore";
