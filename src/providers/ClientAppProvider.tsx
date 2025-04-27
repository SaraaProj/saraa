"use client";
import { HeroUIProvider } from "@heroui/react";

const ClientAppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <div className="text-secondary">{children}</div>
    </HeroUIProvider>
  );
};

export { ClientAppProvider };
