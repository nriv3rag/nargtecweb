import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void:    "#020912",
        base:    "#060D1C",
        surface: "#091422",
        card:    "#0D1B2E",
        /* Azul cielo del logo (highlight de la N) */
        teal:  "#1AB8EC",
        /* Azul marino del logo (base de la N) — reemplaza ember */
        ember: "#1A3B8C",
        /* Azul cobalto del texto "argtec" */
        cobalt: "#235DB5",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body:    ["var(--font-body)",    "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)",    "Courier New", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6rem)",   { lineHeight: "1.0",  letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)",   { lineHeight: "1.08", letterSpacing: "-0.025em" }],
      },
      borderColor: {
        subtle: "rgba(255,255,255,0.065)",
        teal:   "rgba(26,184,236,0.25)",
        navy:   "rgba(26,59,140,0.35)",
      },
      boxShadow: {
        "teal-sm":  "0 0 20px rgba(26,184,236,0.15)",
        "teal-md":  "0 0 40px rgba(26,184,236,0.25)",
        "navy-sm":  "0 0 20px rgba(26,59,140,0.25)",
        card: "0 1px 1px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
      },
      animation: {
        marquee:      "marquee 30s linear infinite",
        "float-card": "float-card 6s ease-in-out infinite",
        "pulse-dot":  "pulse-dot 2s ease-in-out infinite",
        blink:        "blink 1.1s step-end infinite",
      },
      keyframes: {
        marquee:      { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "float-card": {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%":       { transform: "translateY(-8px) rotate(-1deg)" },
        },
        "pulse-dot":  {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":       { opacity: "0.4", transform: "scale(0.8)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
