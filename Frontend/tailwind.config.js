/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
  "./App.{js,jsx,ts,tsx}", 
  "./components/**/*.{js,jsx,ts,tsx}",
  "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      red: colors.red,
      blue: colors.blue,
      violet: '#6159E6',
      pink: '#E65998',
      yellow: '#DEE659',
      lime: '#59E6A7'
    },
  },
  plugins: [],
}
