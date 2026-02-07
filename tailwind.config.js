/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A1A1A",
          light: "#2D2D2D",
        },
        accent: {
          DEFAULT: "#C5A358",
          hover: "#A68946",
        },
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        logo: ['"Cinzel Decorative"', "serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards",
        fadeIn: "fadeIn 1.2s ease-in-out forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".delay-100": { "animation-delay": "0.1s" },
        ".delay-200": { "animation-delay": "0.2s" },
        ".delay-300": { "animation-delay": "0.3s" },
        ".delay-400": { "animation-delay": "0.4s" },
        ".delay-500": { "animation-delay": "0.5s" },
      });
    },
  ],
};
