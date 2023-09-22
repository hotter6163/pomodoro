import { initializeApp, getApps } from "firebase-admin/app";

export const adminApp = getApps()?.length ? getApps()[0] : initializeApp();

export * from "firebase-admin/app";
