export const isEmulator = () =>
  ["NEXT_PUBLIC_EMULATOR", "EXPO_PUBLIC_EMULATOR"].some(
    (key) => process.env[key] === "1"
  );
