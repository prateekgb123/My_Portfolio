/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "ink" = surfaces (light sky whites). Names kept so existing classes still read as layers.
        ink: {
          950: "#FFFFFF",
          900: "#F2F7FF",
          850: "#FAFCFF",
          800: "#EDF4FE",
          700: "#DFEAF8",
          600: "#C9D8EE",
        },
        // foreground + muted text come from CSS variables so a section can flip them (see .on-sky in index.css)
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: {
          200: "rgb(var(--muted-200) / <alpha-value>)",
          300: "rgb(var(--muted-300) / <alpha-value>)",
          400: "rgb(var(--muted-400) / <alpha-value>)",
          500: "rgb(var(--muted-500) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "#2F6FED",
          soft: "#5B9BFF",
          deep: "#1D4FC0",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        // quick phone-ring wiggle, then rest for the remainder of the cycle
        waShake: {
          "0%, 40%, 100%": { transform: "rotate(0deg) scale(1)" },
          "4%": { transform: "rotate(-18deg) scale(1.1)" },
          "8%": { transform: "rotate(16deg) scale(1.1)" },
          "12%": { transform: "rotate(-14deg) scale(1.1)" },
          "16%": { transform: "rotate(12deg) scale(1.1)" },
          "20%": { transform: "rotate(-8deg) scale(1.05)" },
          "24%": { transform: "rotate(6deg) scale(1.05)" },
          "28%": { transform: "rotate(0deg) scale(1)" },
        },
        waGlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.45)", opacity: "0.35" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%,100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(40px)" },
        },
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(47,111,237,0.6)" },
          "70%": { boxShadow: "0 0 0 10px rgba(47,111,237,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(47,111,237,0)" },
        },
      },
      animation: {
        "wa-shake": "waShake 2.5s ease-in-out infinite",
        "wa-glow": "waGlow 2.4s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        drift: "drift 30s ease-in-out infinite",
        "drift-slow": "drift 45s ease-in-out infinite reverse",
        "pulse-dot": "pulseDot 2s infinite",
      },
    },
  },
  plugins: [],
};
