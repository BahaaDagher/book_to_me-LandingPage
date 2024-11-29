/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Neo Sans Arabic', 'sans-serif'], 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(256.13deg, rgba(181, 255, 254, 0.5) -18.16%, rgba(213, 240, 255, 0.5) 37.58%, rgba(209, 255, 236, 0.5) 65.26%, rgba(211, 255, 255, 0.5) 111.03%)',
      },
      
      colors: {
        main: 'var(--main-color)',
        secondary: 'var(--sec-color)',
        gray1 :'var(--gray1-color)' , 
        gray2 :'var(--gray2-color)' , 
        gray3 :'var(--gray3-color)' , 
      },
      spacing: {
        default: 'var(--margin-l)',
      },
      height: {
        'screen': 'calc(100vh - var(--info-height) - var(--navbar-height))', 
        'info-height' : '56px' , 
        'navbar-height' : '75px' , 
        
      },
      width:{
        'scale-width' : 'var(--scale-width)' , 
      },
      screens: {
        'custom-300': '300px', // Add a custom breakpoint at 500px
      },
    },
  },
  plugins: [
  ]
}

