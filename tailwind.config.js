/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
         scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scrollX: 'scrollX 20s linear infinite',
      
      }
    },
  },
  plugins: [
    require('tailwindcss-fluid-type')
  ],
}

