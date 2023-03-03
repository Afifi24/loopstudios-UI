/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alata:['Alata'],
        josefin:['Josefin Sans'],
      },
      letterSpacing:{
        little:'5px'
      }
    },
  },
  plugins: [],
}
