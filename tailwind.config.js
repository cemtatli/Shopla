/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        15: "3.75rem",
      },
      colors: {
        primary: "#f27a1a",
        "primary-highlight": "#ef6114",
      },
      height: {
        screens: "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
