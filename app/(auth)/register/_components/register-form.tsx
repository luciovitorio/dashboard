"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/s8piKtHJmrC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import register from "../_actions/register";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <Card className="mx-auto w-96">
      <CardHeader>
        <CardTitle className="text-3xl">Register</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form action={register} className="text-left ">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full name</Label>
            <Input id="full-name" name="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="me@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="*****"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              placeholder="*****"
              required
            />
          </div>
          <Button className="w-full mt-4">Register</Button>
          <div className="mt-4 flex items-center justify-center text-sm">
            <span>Do have an account?</span>
            <Link href="/login" className="ml-2 underline" prefetch={false}>
              Log in
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
