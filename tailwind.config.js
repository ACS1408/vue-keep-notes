/** @type {import('tailwindcss').Config} */

const container = {
  center: true,
  padding: "calc(var(--js-gutter-x) * 0.5)",
};

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container,
    screens: {
      xs: { max: "576px" },
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1420px",
      xxxl: "1600px",
      laptop: { min: "1200px", max: "1450px" },
    },
    extend: {},
  },
  plugins: [],
};
