/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackBg: "#18181B",
      },
      backgroundImage: {
        linearPrimary:
          "linear-gradient(94.97deg, rgba(25, 161, 190, 0.6) 20.87%, rgba(125, 65, 146, 0.6) 82.12%);",
        linearCard:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 41.67%, rgba(0, 0, 0, 0.75) 61.46%);",
      },
    },
    fontFamily: {
      margarine: ["Margarine", "cursive"],
      axiforma: ["Axiforma", "sans-serif"],
    },
  },
  plugins: [],
};
