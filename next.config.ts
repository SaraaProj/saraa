import type { NextConfig } from "next";
import nextPWA from "@ducanh2912/next-pwa";
import { startSetup } from "./lib/setup/index";

const withPWA = nextPWA({
  dest: "public",
  // 開発環境ではPWAを無効化
  // @ts-ignore
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  /* config options here */
};

// 事前に処理を行う
startSetup();

export default withPWA(nextConfig);
