/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mont: ["Mont"],
      },
      backgroundImage: {
        HeroImg: "url('/images/HeroImg.jpg')",
      },
    },
  },
  plugins: [],
};
