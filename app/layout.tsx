import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google';
import { ClientAppProvider } from "@/providers/ClientAppProvider";
import { ServerAppProvider } from "@/providers/ServerAppProvider";
import "./globals.css";

// Noto Sans JP フォントの設定
const noto = Noto_Sans_JP({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Saraa",
  description: "Saraa in Study Apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={noto.className}>
        <ServerAppProvider>
          <ClientAppProvider>
            {children}
          </ClientAppProvider>
        </ServerAppProvider>
      </body>
    </html>
  );
}
