const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      grey: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    minHeight: {
      '16': '4rem',
    },
    extend: {
      backgroundImage: (theme) => {
        return {
          'home': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://source.unsplash.com/RWzPBcWVdpw')"
        };
      },
      spacing: {
        '112': '28rem',
        '128': '32rem'
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: []
};
