/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./**/*.html","./js/**/*.js",'./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
   colors:{
    blue:colors.blue,
    transparent: 'transparent',
    current: 'currentColor',
    black: colors.black,
    white: colors.white,
    gray: colors.gray,
    emerald: colors.emerald,
    indigo: colors.indigo,
    yellow: colors.yellow,
    pink:"#cccc"
   },
    extend: {
      
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
