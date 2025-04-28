import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slowspin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        slowspin: "slowspin 4s linear infinite",
      },
      colors: {
        primary: {
          DEFAULT: "#0060A8",
          foreground: "#F6F2EE",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      addCommonColors: false,
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#0060A8",
              foreground: "#F6F2EE",
            },
            secondary: {
              DEFAULT: "#66B2FF",
              foreground: "#1E1E1E",
            },
            foreground: "#1E1E1E",
            background: "#F6F2EE",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#66B2FF",
              foreground: "#F6F2EE",
            },
            secondary: {
              DEFAULT: "#0060A8",
              foreground: "#F6F2EE",
            },
            foreground: "#F6F2EE",
            background: "#1E1E1E",
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
