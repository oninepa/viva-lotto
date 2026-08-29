/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#0D0E17",
          900: "#12131F",
          800: "#1A1C2C",
          700: "#242640",
        },
        gold: {
          400: "#F0C468",
          500: "#E8B54D",
          600: "#C99530",
        },
        plum: {
          400: "#8A76B5",
          500: "#6B5B95",
        },
        chalk: "#F3F1EA",
        mist: "#B7B6C9",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
