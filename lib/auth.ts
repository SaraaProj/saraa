import NextAuth from "next-auth";
import LineProvider from "next-auth/providers/line";
import GoogleProvider from "next-auth/providers/google";
import { getMergedSessionServer } from "./middleware";
import { db } from "./db";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV === "development",
  providers: [LineProvider, GoogleProvider],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      if (session.user) {
        const mergedSession = await getMergedSessionServer(session);
        // ユーザーのステータスを取得
        const user = await db.query.users.findFirst({
          where: eq(users.email, session.user.email!),
        });
        return {
          ...mergedSession,
          user: {
            ...mergedSession.user,
            status: user?.status,
          },
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      // アカウント登録が必要な場合は/accountにリダイレクト
      if (url.startsWith("/account")) {
        return url;
      }
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
});
