import type { Config } from "tailwindcss";

/* ------------------------------------------------------------------ *
 * Momentum design tokens. See DESIGN.md for roles and contrast rules.
 *
 * primary   Teal. CTAs, main headings, key borders, navigation.
 * secondary Warm green. Success, growth, pipeline momentum.
 * accent    Coral. Data viz, "qualified" badges, key data points only.
 *
 * Text rule: the 500/DEFAULT steps of green and coral fail 4.5:1 on the
 * canvas. Small text uses the 700 step of each hue instead.
 * ------------------------------------------------------------------ */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          DEFAULT: "#0D9488",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        secondary: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          DEFAULT: "#10B981",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
        accent: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          400: "#FB923C",
          DEFAULT: "#F97316",
          500: "#F97316",
          700: "#C2410C",
        },
        canvas: "#F8FAFC",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#1E293B",
          muted: "#475569",
          subtle: "#64748B",
          faint: "#94A3B8",
        },
        line: {
          DEFAULT: "#E2E8F0",
          strong: "#CBD5E1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 5.4vw, 4.75rem)",
          { lineHeight: "1.04", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2.25rem, 4.2vw, 3.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.375rem, 2.2vw, 1.75rem)",
          { lineHeight: "1.25", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        lead: ["1.1875rem", { lineHeight: "1.65" }],
      },
      maxWidth: {
        wide: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
