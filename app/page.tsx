import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <LoginButton>
        <Button>Login</Button>
      </LoginButton>
    </div>
  );
}
