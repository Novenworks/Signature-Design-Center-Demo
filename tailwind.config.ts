import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F4EFE6",
        paper: "#E8DCC8",
        espresso: "#241910",
        walnut: "#5A3A22",
        brass: "#B08948",
        ink: "#1A1410",
        stone: "#7A6B5C",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
