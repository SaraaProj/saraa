"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { CustomButton } from "@/components/Button";
import { loginAction } from "./actions/singIn";
import { FaGoogle, FaLine } from "react-icons/fa";

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
        className='flex min-h-screen flex-col items-center justify-center gap-2 bg-background text-center px-6'
        style={{ minHeight: 'calc(100vh - 112px)' }}
      >
        {/** タイトル */}
        <div id='login_title' className='my-4 font-bold text-gray-700'>
          <h1 className='text-center text-4xl font-bold'>SignIn</h1>
        </div>

        {/** LINEログイン */}
        <CustomButton
          size="lg"
          className='bg-[#00CF2E] text-white py-3 w-full sm:w-64 md:w-96 shadow-md cursor-pointer'
          radius="full"
          startContent={<FaLine className='text-white inline text-3xl mr-2' />}
          onPress={() => loginAction(getCallbackUrl(), "line")}
        >
          LINEでログイン
        </CustomButton>

        {/** Googleログイン */}
        <CustomButton
          size="lg"
          color="primary"
          className='bg-white text-secondary w-full sm:w-64 md:w-96 py-3 mt-2 shadow-md cursor-pointer'
          radius="full"
          startContent={<FaGoogle className='text-secondary inline text-2xl mr-2' />}
          onPress={() => loginAction(getCallbackUrl(), "google")}
        >
          Googleでログイン
        </CustomButton>

        {/** アプリの取得 */}
        <div className="mt-4"> 
          <span className="text-primary text-lg">
            アプリの取得
          </span>
        </div>
      </div>
    </>
  );
}
