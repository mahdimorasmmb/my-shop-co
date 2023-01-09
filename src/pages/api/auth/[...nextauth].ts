import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { env } from "../../../env/client.mjs";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers\
  site:env.NEXT_PUBLIC_NEXTAUTH_URL,
  providers: [
    GoogleProvider({
      clientId:env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    }),
    // ...add more providers here
    GitHubProvider({
      clientId:env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret:env.NEXT_PUBLIC_GITHUB_SECRET
    })
  ],
  secret:env.NEXT_PUBLIC_JWT_SECRET
}

export default NextAuth(authOptions)