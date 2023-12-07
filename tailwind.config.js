/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-main": "#C48F5A",
        "c-green": "#445656",
        "c-white": "#FFFFFF",
        "c-background": "#F5EFEA",
        "c-black": "#333333",
        "c-text": "#312517"
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        roboto: ['Roboto Condensed'],
        arabic: ['Noto Kufi Arabic']
      }
    },
    plugins: []
  }
};
