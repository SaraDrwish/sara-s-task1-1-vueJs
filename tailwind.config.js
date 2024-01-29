/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,vue,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "5rem",
          sm: "3rem",
          lg: "5rem",
          xl: "7rem",
          "2xl": "9rem",
        },
      },
    },
  },
  plugins: [],
};
