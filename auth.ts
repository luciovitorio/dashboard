import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { compareSync } from "bcrypt-ts";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {},
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
});
