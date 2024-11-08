/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/*.{html,js}", "./src/components/*.{js}"],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '4rem',
      },
      spacing: {
        '96': '24rem',
      },  
      'margin-left':{
        '56rem': '56rem',
      }
    }
  },
  plugins: [],
}