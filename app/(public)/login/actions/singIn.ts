"use client";
import { signIn } from "@/auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

/**
 * LINE ID Login
 */
const lineLogin = async (callbackUrl: string | null) => {
  signIn("line", { callbackUrl: callbackUrl ? callbackUrl : "/" });
};

/**
 * Google Login
 */
const googleLogin = async (callbackUrl: string | null) => {
  signIn("google", { callbackUrl: callbackUrl ? callbackUrl : "/" });
};

type LoginType = "line" | "google";
export async function loginAction(
  callbackUrl: string | null,
  provider: "line" | "google"
) {
  try {
    const result = await signIn(provider, {
      redirect: true,
      callbackUrl: callbackUrl || "/",
    });

    // ユーザーが存在するか確認
    const user = await db.query.users.findFirst({
      where: eq(users.email, result?.user?.email!),
    });

    // ユーザーが存在しない場合、新規作成
    if (!user) {
      await db.insert(users).values({
        email: result?.user?.email!,
        name: result?.user?.name!,
        status: "pending",
      });
    }

    // ユーザーのステータスがpendingの場合、アカウント登録ページにリダイレクト
    if (user?.status === "pending") {
      return {
        redirect: {
          destination: "/account",
          permanent: false,
        },
      };
    }

    return result;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
