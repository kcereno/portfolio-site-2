/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {

      'small-desktop': {'max': '990px'},
      'tablet': {'max': '800px'},
      'large-mobile': {'max': '560px'},
      'medium-mobile': {'max': '500px'},
      'small-mobile': {'max': '375px'},
    },
    fontFamily: {
      'display': 'Noe Display, Arial, sans-serif',
    },

    container:{
      center: true,
      
    },
    extend: {
      fontSize:{
        'xxs': '1rem',
        'xs': '1.2rem',
        'sm': '1.6rem',
        'md': '2rem',
        'lg': '2.5rem',
        'xl': '3.1rem',
        '2xl': '3.9rem',
        '3xl': '4.8rem',
        '4xl': '6.1rem',
      },
      colors: {
        'primary': '#db2777',
        'secondary': '#0891b2',
      },
      lineHeight: {
        'display': '6.1rem',
        'display--tablet': '4.8rem',
    },
    spacing: {
      '0': '0',
      'xxs': '0.8rem',
      'xs': '1.6rem',
      'sm': '2.4rem',
      'md': '3.2rem',
      'lg': '6.4rem',
      'xl': '7.2rem',
      '2xl':' 12.8rem',
      'button--small': '4rem',
      'button--large': '3.2rem',
    },
    },


  },
  plugins: [],
};
