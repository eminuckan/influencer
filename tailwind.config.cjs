/** @type {import('tailwindcss').Config}*/
/** @type {import('tailwindcss').Config}*/
/** @type {import('tailwindcss').Config}*/
/** @type {import('tailwindcss').Config}*/

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],


  theme: {
    extend: {
      colors:{
        primary:{
          50: '#e0ff85',
          100: '#dbff70',
          200: '#d6ff5c',
          300: '#d1ff47',
          400: '#ccff33',
          500: '#b8e62e',
          600: '#a3cc29',
          700: '#8fb324',
          800: '#7a991f',
          900: '#66801a'
        },
        mordor:{
          50:'#767676',
          100:'#767676',
          200:'#5f5f5f',
          300:'#484848',
          400:'#313131',
          500:'#1a1a1a',
          600:'#171717',
          700:'#151515',
          800:'#121212',
          900: '#101010'
        }
      },
      fontFamily:{
        'title': ['Phonk'],
        'primary' : ['Rubik', 'sans-serif']
      },
      dropShadow:{
        'primary-xl':'1px 1px 10px rgba(255, 255, 63, 0.2)'
      }
    },
  },
  plugins:[  
    require('@tailwindcss/forms'),
  ],

};

module.exports = config;
