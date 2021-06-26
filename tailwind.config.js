const fs = require('fs');
const yaml = require('js-yaml');
const colors = require('tailwindcss/colors');

const content = yaml.load(fs.readFileSync('./src/content/content.yaml', 'utf-8'));

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    safelist: Object.values(content.projects).map((project) => project.backgroundColor)
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      purple: colors.violet,
      teal: colors.teal,
      amber: colors.amber
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      narrow: ['PT Sans Narrow', 'Open Sans', 'sans-serif']
    },
    minHeight: {
      '16': '4rem',
    },
    extend: {
      brightness: {
        15: '.15',
        30: '.3'
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '1/2-screen': '50vh'
      },
      transitionProperty: {
        'height': 'height',
        'filter': 'filter',
        'opacity': 'opacity'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled', 'group-focus'],
      cursor: ['disabled'],
      filter: ['group-hover', 'group-focus'],
      brightness: ['group-hover', 'group-focus']
    }
  },
  plugins: [],
}
