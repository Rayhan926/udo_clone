/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#31B98D",
        "primary-dark": "#23a47a",
        secondary: "#E9405D",
        "secondary-dark": "#d7314d",
        dark: "#1d1d1d",
        gray: "#6D6C72",
        "soft-gray": "#EFEFEF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("tailwind-scrollbar")],
};
