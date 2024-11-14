// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sage-green": "#AEC8B1",
        "gray-green": "#C0C9C1",
        "lightest-blue": "#b3cde0",
        "light-blue": "#6497b1",
        "medium-blue": "#005b96",
        "dark-blue": "#03396c",
        "darkest-blue": "#011f4b",
      },
      fontFamily: {
        customFont: ['"ubuntu"'],
      },
    },
  },
  plugins: [],
};
