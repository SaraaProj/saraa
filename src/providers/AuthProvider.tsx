"use client";
import React, { createContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import type { Session } from "next-auth";
import { Spinner } from "@heroui/react";

export type AuthProviderProps = "secure" | "optional" | "public";
const AuthContext = createContext<{ type: AuthProviderProps; user: Session["user"] | undefined }>({} as { type: AuthProviderProps; user: undefined });
export const useAuth = () => React.useContext(AuthContext);
export const AuthProvider = ({ children, type }: { children: React.ReactNode; type: AuthProviderProps }) => {
  const { data: session, status } = useSession();
  useEffect(() => {
    // Secureの場合、sessionがなければログインページにリダイレクトする
    if (type === "secure" && !session && status !== "loading") {
      // 現在のURLをcallbackUrlとして渡す
      const callbackUrl = window.location.pathname;
      redirect(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }
  }, [session, status, type]);

  return (
    <AuthContext.Provider
      value={{
        type: type,
        user: session?.user,
      }}
    >
      {status === "loading" ? <Spinner /> : <>{children}</>}
    </AuthContext.Provider>
  );
};
