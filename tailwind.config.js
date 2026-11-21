/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07080B",
          900: "#0B0D12",
          850: "#0F1218",
          800: "#141821",
          700: "#1D222D",
          600: "#2A303D",
        },
        accent: {
          DEFAULT: "#C6F35E",
          soft: "#E3FBA8",
          deep: "#9BCB2E",
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
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(198,243,94,0.6)" },
          "70%": { boxShadow: "0 0 0 10px rgba(198,243,94,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(198,243,94,0)" },
        },
      },
      animation: {
        "wa-shake": "waShake 2.5s ease-in-out infinite",
        "wa-glow": "waGlow 2.4s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s infinite",
      },
    },
  },
  plugins: [],
};
