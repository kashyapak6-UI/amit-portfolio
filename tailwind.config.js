/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["'Inter Variable'", "sans-serif"],
        grotesk: ["'Space Grotesk Variable'", "sans-serif"],
      },
      colors: {
        ink: { 900: "#07070a", 800: "#0e0e14", 700: "#16161f", 600: "#22222e" },
        lime: { 300: "#d4ff3f" },
        violet: { 300: "#7c5cff", 400: "#5a3cf0" },
        cream: { 50: "#f3f1ea" },
      },
    },
  },
  plugins: [],
};
