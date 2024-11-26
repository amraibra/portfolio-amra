// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@ionic/vue/**/*.js",
    "./node_modules/@ionic/vue-router/**/*.js",
  ],  
  theme: {
    extend: {
      colors: {
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
