"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { CustomButton } from "@/components/Button";
import { loginAction } from "./actions/singIn";
import { FaGoogle, FaLine } from "react-icons/fa";
import { usePWA } from "@/providers/PWAProvider";
import Image from "next/image";

export default function LoginPage() {
  const { status } = useSession();
  const { InstallApplication } = usePWA();
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
        className='flex min-h-screen flex-col items-center justify-center gap-2 bg-background text-center px-12 sm:px-6'
        style={{ minHeight: 'calc(100vh - 112px)' }}
      >
        {/** ロゴ */}
        <div className='my-4'>
          <Image src="/logo-trans.png" alt="logo" width={320} height={320} />
        </div>

        {/** キャッチコピー */}
        <div className='text-secondary font-bold text-lg mb-6'>
          <p className="leading-9">
            無理なく、楽しく
          </p>
          <p className="leading-9">
            あなたに寄り添う、学びのAI
          </p>
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
          className='text-secondary w-full sm:w-64 md:w-96 py-3 mt-2 shadow-md cursor-pointer'
          radius="full"
          startContent={<FaGoogle className='text-secondary inline text-2xl mr-2' />}
          onPress={() => loginAction(getCallbackUrl(), "google")}
        >
          Googleでログイン
        </CustomButton>

        {/** アプリの取得 */}
        <div className="mt-4"> 
          <span className="text-primary text-lg" onClick={InstallApplication}>
            アプリの取得
          </span>
        </div>
      </div>
    </>
  );
}
