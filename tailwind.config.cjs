/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs':'475px',
      // => @media (min-width: 475px) { ... }
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily:{
        Arima:"Arima",
        IndieFlower:"Indie Flower",
        LibreBaskerville:"Libre Baskerville",
      },
      colors:{
        primary:"rgb(96 165 250)",
        secondary:"#fff",
        btnHover:"rgb(147 197 253)",
        primaryLight:"rgb(147 197 253)"
  
      },
      backgroundImage: {
        'cover-image': "url('src/assets/images/cover-image.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),

  ],
}
