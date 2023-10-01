import { z } from "zod";

const PasswordSchema = z.string().min(6);

export const SigninSchema = z.object({
  email: z.string().min(1).email(),
  password: PasswordSchema,
});

export const SignupSchema = SigninSchema.merge(
  z.object({
    passwordConfirmation: PasswordSchema,
  })
).refine((data) => data.password === data.passwordConfirmation, {
  message: "パスワードが一致しません",
  path: ["passwordConfirmation"],
});
