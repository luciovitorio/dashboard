import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./lib/db";

// const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  // providers: [
  // Credentials({
  //   credentials: {
  //     email: {},
  //     password: {},
  //   },
  //   authorize: async (credentials) => {
  //     const email = credentials.email as string;
  //     const password = credentials.password as string;
  //     if (!email || !password) {
  //       return null;
  //     }
  //     const user = await db.user.findUnique({
  //       where: {
  //         email,
  //       },
  //     });
  //     if (!user) return null;
  //     const matches = compareSync(password, user.password ?? "");
  //     if (matches) return user;
  //     return null;
  //   },
  // }),
  // ],
});
