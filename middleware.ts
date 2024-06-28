import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

// Função que é executada toda vez que a rota da MATCH no objeto config abaixo
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("Route:", req.nextUrl.pathname);
  console.log("Is logged:", isLoggedIn);
});

// Da Match na rota que eu quero que faça algo
// Essa expressão regular (Clerk middleware) esta dando match em todas as rotas
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
