/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-background":
          "linear-gradient(0deg, rgb(20, 20, 20) 4%, rgba(20, 20, 20, 0.46) 100%), url('./assets/images/books.jpg')",
      },
      gridTemplateColumns: {
        wrap: "repeat(auto-fill, 300px)",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
