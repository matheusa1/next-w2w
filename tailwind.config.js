/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        darkBackgroundImage:
          "linear-gradient(106.83deg, #030839 16.19%, rgba(147, 24, 190, 0.458762) 67.03%, rgba(255, 255, 255, 0) 121.58%, #000000 121.59%), #131313",
        lightBackgroundImage:
          "linear-gradient(90deg, rgba(236, 255, 181, 0) 0%, rgba(56, 183, 255, 0.25) 23.3%, rgba(217, 125, 250, 0.458762) 74.86%, rgba(240, 196, 255, 0.217656) 100%), #E9E9E9",
      },
    },
  },
  plugins: [],
};
