"use client";
import { HeroUIProvider } from "@heroui/react";

const ClientAppProvider = ({ children }: { children: React.ReactNode }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export { ClientAppProvider };
