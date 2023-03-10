// @ts-check
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  GRAPHQL:z.string(),
  ASSETS_URL:z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  NEXT_PUBLIC_GRAPHQL:z.string(),
  NEXT_PUBLIC_ASSETS_URL:z.string(),
  NEXT_PUBLIC_GOOGLE_CLIENT_ID:z.string(),
  NEXT_PUBLIC_GOOGLE_CLIENT_SECRET:z.string(),
  NEXT_PUBLIC_JWT_SECRET:z.string(),
  NEXT_PUBLIC_GITHUB_ID:z.string(),
  NEXT_PUBLIC_GITHUB_SECRET:z.string(),
  NEXT_PUBLIC_NEXTAUTH_URL:z.string()
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  NEXT_PUBLIC_GRAPHQL:process.env.NEXT_PUBLIC_GRAPHQL,
  NEXT_PUBLIC_ASSETS_URL:process.env.NEXT_PUBLIC_ASSETS_URL,
  NEXT_PUBLIC_GOOGLE_CLIENT_ID:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  NEXT_PUBLIC_GOOGLE_CLIENT_SECRET:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  NEXT_PUBLIC_JWT_SECRET:process.env.NEXT_PUBLIC_JWT_SECRET,
  NEXT_PUBLIC_GITHUB_ID:process.env.NEXT_PUBLIC_GITHUB_ID,
  NEXT_PUBLIC_GITHUB_SECRET:process.env.NEXT_PUBLIC_GITHUB_SECRET,
  NEXT_PUBLIC_NEXTAUTH_URL:process.env.NEXT_PUBLIC_NEXTAUTH_URL


}