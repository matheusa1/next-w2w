/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackBg: "#18181B",
        subTitle: "#848484",
      },
      backgroundImage: {
        linearPrimary:
          "linear-gradient(94.97deg, rgba(25, 161, 190, 0.6) 20.87%, rgba(125, 65, 146, 0.6) 82.12%);",
        linearCard:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 41.67%, rgba(0, 0, 0, 0.75) 61.46%);",
        linearCategoryBlue:
          "linear-gradient(180deg, #16CAF1 0%, #0143A7 78.65%);",
        linearCategoryRed:
          "linear-gradient(179.71deg, #FF2E2E 27.14%, #E08939 99.75%);",
        linearProps:
          "linear-gradient(179.99deg, rgba(0, 0, 0, 0) 10.79%, #1A1A1D 95%)",
        linearPropsLight:
          "linear-gradient(179.99deg, rgba(0, 0, 0, 0) 10.79%, #FFFFFF 95%)",
      },
      borderRadius: {
        tm: "75% 25% 25% 25% / 40% 25% 25% 25%",
        tmMd: "85% 15% 5% 5% / 20% 15% 15% 15%",
        tmLg: "85% 5% 5% 5% / 20% 10% 15% 15%",
        tm2: "25% 75% 25% 25% / 25% 40% 25% 25%",
        tm2Md: "15% 85% 5% 5% / 15% 20% 15% 15%",
        tm2Lg: "5% 85% 5% 5% / 10% 20% 15% 15%",
      },
    },
    fontFamily: {
      margarine: ["Margarine", "cursive"],
      axiforma: ["Axiforma", "sans-serif"],
    },
  },
  plugins: [],
};
