"use client";
import { HeroUIProvider } from "@heroui/react";
import { PWAProvider } from "@/providers/PWAProvider";

const ClientAppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <div className="text-secondary">
        <PWAProvider>
          {children}
        </PWAProvider>
      </div>
    </HeroUIProvider>
  );
};

export { ClientAppProvider };
