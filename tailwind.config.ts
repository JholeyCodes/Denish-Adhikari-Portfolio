import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0B0F14",
        surface: {
          DEFAULT: "#111827",
          light: "#1F2937",
          dark: "#080C10",
        },
        border: {
          DEFAULT: "#273244",
          light: "#374151",
          subtle: "rgba(39, 50, 68, 0.6)",
        },
        accent: {
          DEFAULT: "#F97316", // Construction/Engineering Orange
          soft: "#FB923C",
          dark: "#EA580C",
          glow: "rgba(249, 115, 22, 0.15)",
        },
        engineer: {
          steel: "#94A3B8",
          blueprint: "#1E3A8A",
          safety: "#F59E0B",
          concrete: "#475569",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#A7B0BD",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(39, 50, 68, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(39, 50, 68, 0.25) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.08) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
