import "../../polyfills"; // 音声認識のための設定
import { AuthProvider } from "@/providers/AuthProvider";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider type="secure">
      {children}
    </AuthProvider>
  );
}
