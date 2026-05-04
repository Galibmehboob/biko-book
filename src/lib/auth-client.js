import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
    baseURL: "https://biko-book.vercel.app"
})
export const { signIn, signUp, useSession } = createAuthClient()
