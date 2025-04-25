import { SessionProvider } from "next-auth/react";

const ServerAppProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export { ServerAppProvider };
