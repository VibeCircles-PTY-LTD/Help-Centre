import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "serif"],
        body: ["'Instrument Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        "vc-black": "#0A0A08",
        "vc-white": "#F7F4EE",
        "vc-bg": "#F7F4EE",
        "vc-surface": "#F0EDE8",
        "vc-border": "#E8E4DC",
        "vc-border-hover": "#D4CFC7",
        "vc-orange": "#E8511A",
        "vc-amber": "#F5A623",
        "vc-forest": "#1B4332",
        "vc-sand": "#C8B89A",
        "vc-smoke": "#E8E4DC",
        "vc-ink": "#1C1C1A",
        "vc-muted": "#7A7570",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-in": "slideIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
