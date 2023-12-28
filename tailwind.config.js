/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss/types/generated/colors').DefaultColors} */
const defaultColors = require('tailwindcss/colors')

export default {
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: defaultColors.indigo,
        secondary: defaultColors.sky,
    
        success: defaultColors.green,
        warning: defaultColors.orange,
        danger: defaultColors.red,
        info: defaultColors.cyan,
    
        pending: defaultColors.slate,
      },
    },
  },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: false, // or 'media' or 'class'
}