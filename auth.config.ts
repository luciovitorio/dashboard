import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { compareSync } from "bcrypt-ts";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await getUserByEmail(email);

          console.log({ user });

          if (!user || !user.password) {
            return null;
          }

          const passwordMatches = compareSync(password, user.password);

          if (passwordMatches) {
            return user;
          }
        }

        return null;
      },
    }),
    GitHubProvider,
    GoogleProvider,
  ],
} satisfies NextAuthConfig;
