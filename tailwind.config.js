module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './**/content.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      narrow: ['PT Sans Narrow', 'Open Sans', 'sans-serif'],
    },
    extend: {
      brightness: {
        15: '.15',
        30: '.3',
      },
      minHeight: {
        16: '4rem',
        48: '12rem',
      },
      spacing: {
        112: '28rem',
        128: '32rem',
        '1/2-screen': '50vh',
      },
      transitionProperty: {
        height: 'height',
        filter: 'filter',
        opacity: 'opacity',
      },
    },
  },
};
