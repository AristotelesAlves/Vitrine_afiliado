/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue:{
          100 : '#3A5A81',
          200 : '#252131',
        }
      },
    },
  },
  plugins: [],
}