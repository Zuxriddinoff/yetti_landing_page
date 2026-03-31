import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#00F5FF",
        violet: "#7C3AED",
        bg: {
          primary: "#08080F",
          secondary: "#0D0D1A",
          card: "rgba(255,255,255,0.03)",
        },
      },
      fontFamily: {
        dm: ['"Segoe UI"', '"Helvetica Neue"', "Arial", "sans-serif"],
        roboto: ['"Segoe UI"', '"Helvetica Neue"', "Arial", "sans-serif"],
        mono: ['"SFMono-Regular"', "Consolas", '"Liberation Mono"', "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 1.2s linear forwards",
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        "fade-up": "fade-up 0.9s ease forwards",
        "pulse-glow": "pulse-glow 2.8s ease-in-out infinite",
        "gradient-shift": "gradient-shift 14s ease infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 0 rgba(0,245,255,0)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(0,245,255,0.35)",
          },
        },
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translate3d(-50%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translate3d(0, 30px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top right, rgba(0,245,255,0.18), transparent 30%), radial-gradient(circle at bottom left, rgba(124,58,237,0.18), transparent 36%)",
        "accent-gradient":
          "linear-gradient(135deg, rgba(0,245,255,1), rgba(124,58,237,1))",
        "card-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
      },
    },
  },
  plugins: [],
};

export default config;
