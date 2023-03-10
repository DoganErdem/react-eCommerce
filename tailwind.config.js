/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mob': {'max': '500px'}
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide') 
  ],
}