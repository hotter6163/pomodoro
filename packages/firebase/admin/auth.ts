import { adminApp } from "./app";
import { getAuth } from "firebase-admin/auth";

export const adminAuth = getAuth(adminApp);

export * from "firebase-admin/auth";
