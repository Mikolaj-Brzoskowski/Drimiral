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
      black: '#0F0F0F',
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      red: '#BA2D0B',
      blue: colors.blue,
      violet: '#6159E6',
      pink: '#E15A97',
      yellow: '#FFD447',
      lime: '#70EE9C'
    },
  },
  plugins: [],
}
