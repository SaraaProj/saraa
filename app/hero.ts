import { heroui } from "@heroui/react";

export default heroui({
  addCommonColors: false,
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: "#0060A8",
        },
        secondary: {
          DEFAULT: "#616161",
        },
        foreground: "#1E1E1E",
        background: "#F6F2EE",
      },
    },
    dark: {
      colors: {
        primary: {
          DEFAULT: "#66B2FF",
        },
        secondary: {
          DEFAULT: "#BBBBBB",
        },
        foreground: "#F6F2EE",
        background: "#1E1E1E",
      },
    },
  },
});
