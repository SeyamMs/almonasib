import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html", // don't forget to add other files and directories
    "./*/*.html", // don't forget to add other files and directories
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SST Arabic", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        rouge: {
          DEFAULT: "#9F4289",
          50: "#E1B7D7",
          100: "#DBA9CF",
          200: "#CF8CBF",
          300: "#C36FAF",
          400: "#B7529F",
          500: "#9F4289",
          600: "#7F356D",
          700: "#5E2751",
          800: "#3E1A35",
          900: "#1D0C19",
          950: "#0D050B",
        },
        apple: {
          DEFAULT: "#56AA48",
          50: "#C9E6C4",
          100: "#BBE0B5",
          200: "#A1D499",
          300: "#87C87C",
          400: "#6DBB5F",
          500: "#56AA48",
          600: "#468A3A",
          700: "#356A2D",
          800: "#25491F",
          900: "#152911",
          950: "#0D190B",
        },
        anzac: {
          DEFAULT: "#E3BE54",
          50: "#FDFAF2",
          100: "#FAF3E0",
          200: "#F4E6BD",
          300: "#EED99A",
          400: "#E9CB77",
          500: "#E3BE54",
          600: "#DBAC24",
          700: "#AB861C",
          800: "#7B6014",
          900: "#4A3A0C",
          950: "#322708",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
