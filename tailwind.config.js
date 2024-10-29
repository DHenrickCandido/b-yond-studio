/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html",
    "./public/create-room.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        gaegu: ['Gaegu', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
