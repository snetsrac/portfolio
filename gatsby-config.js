const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Chris Carstens, Full Stack Developer',
    description: 'Full Stack Developer specializing in Javascript, Node.js, Express, MongoDB, and React/Redux.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: {
          sm: '(min-width: 640px)',
          md: '(min-width: 768px)',
          lg: '(min-width: 1024px)',
          xl: '(min-width: 1280px)',
          '2xl': '(min-width: 1536px)'
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-gatsby-cloud'
  ]
};
