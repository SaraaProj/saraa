"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { CustomButton } from "@/components/Button";
import { loginAction } from "./actions/singIn";
import { Button } from "@heroui/react";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  const getCallbackUrl = () => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const callbackUrl = params.get("callbackUrl");
    return callbackUrl;
  };

  useEffect(() => {
    if (status === "authenticated") {
      const callbackUrl = getCallbackUrl();
      if (callbackUrl) {
        router.push(callbackUrl);
      } else {
        router.push("/");
      }
    }
  }, [status, router]);

  return (
    <>
      <div
        className='flex min-h-screen flex-col items-center justify-center gap-2 bg-gray-100 text-center'
        style={{ minHeight: 'calc(100vh - 112px)' }}
      >
        {/** タイトル */}
        <div id='login_title' className='my-4 font-bold text-gray-700'>
          <h1 className='text-center text-4xl font-bold'>SignIn</h1>
        </div>

        {/** LINEログイン */}
        <CustomButton
          onPress={() => loginAction(getCallbackUrl(), "line")}
        >
          LINEでログイン
        </CustomButton>

        {/** Googleログイン */}
        <CustomButton
          onPress={() => loginAction(getCallbackUrl(), "google")}
        >
          Googleでログイン
        </CustomButton>
      </div>
    </>
  );
}
