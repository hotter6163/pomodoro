import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().nullable(),
  birthDate: z.date().nullable(),
  data: z.object({
    age: z.number().nullable(),
  }),
});

export type User = z.input<typeof UserSchema>;
