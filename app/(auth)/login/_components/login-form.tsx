/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0bDYgjhLu7h
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import login from "../_actions/login";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LockIcon } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password to access your account.
          </CardDescription>
        </CardHeader>
        <form action={login} className="text-left ">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
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
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">
              <LockIcon className="mr-2 h-4 w-4" />
              Login
            </Button>
            <div className="mt-4 flex items-center justify-center text-sm">
              <span>Dont have an account?</span>
              <Link
                href="/register"
                className="ml-2 underline"
                prefetch={false}
              >
                Register
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
