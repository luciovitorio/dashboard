"use server";

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";

export default async function register(FormData: FormData) {
  const name = FormData.get("name") as string;
  const email = FormData.get("email") as string;
  const password = FormData.get("password") as string;
  // const confirmPassword = FormData.get("confirm-password") as string;

  const user = await db.users.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    throw new Error("Esse usuário já existe");
  }

  await db.users.create({
    data: {
      name,
      email,
      password: hashSync(password),
    },
  });

  redirect("/");
}
