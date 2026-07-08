import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          900: "#0A0A0A",
          800: "#0F0F0F",
          700: "#141414",
          600: "#1A1A1A",
        },
        chalk: {
          DEFAULT: "#EDEDED",
          muted: "#8A8A8A",
          faint: "#5A5A5A",
        },
        accent: {
          DEFAULT: "#C6F24E",
          soft: "#D7F87E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        wide: "1280px",
      },
      keyframes: {
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
