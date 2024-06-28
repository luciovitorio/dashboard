import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: "Email is required",
    }),
    password: z.string().min(5, {
      message: "Minimum 5 characters required",
    }),
    confirmPassword: z.string(),
    name: z.string().min(1, {
      message: "Name is required",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      const message = "Passwords don't match";

      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message,
        path: ["password"],
      });

      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message,
        path: ["confirmPassword"],
      });
    }
  });
