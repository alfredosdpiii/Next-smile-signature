/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DMSans', 'Playfair']
      },
      keyframes:{
        slide: {
          '0%':{transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0)'},
        },
      },
      animation:{
        slide: 'slide 1s ease-in-out'
      }

    },
  },
  plugins: [],
}
