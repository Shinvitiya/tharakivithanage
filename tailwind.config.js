/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "league-spartan": ["LeagueSpartan", "sans-serif"],
      },
      colors: {
        "primary-gray": "#70727D",
        "primary-white": "#F4F6F8",
        "primary-purple": "#C499F3",
        "primary-pink": "#BB9CC0",
        "secondary-pink": "#FED9ED",
      },
    },
  },
  plugins: [],
};
