"use client";
import { signIn } from "next-auth/react";

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
const loginAction = async (callbackUrl: string | null, type: LoginType) => {
  if (type === "line") {
    return lineLogin(callbackUrl);
  } else if (type === "google") {
    return googleLogin(callbackUrl);
  }
};

export { loginAction };
