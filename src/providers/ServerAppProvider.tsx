import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const ServerAppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Toaster position="top-center" />
      {children}
    </SessionProvider>
  );
};

export { ServerAppProvider };
