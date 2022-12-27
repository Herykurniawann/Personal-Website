/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#123043',
      },
      fontFamily: {
        "quick-sand": ["Quicksand", "sans-serif"],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ], 
}
