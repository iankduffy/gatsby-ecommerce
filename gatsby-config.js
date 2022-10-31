module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-no-javascript',
      options: {
        excludeFiles: 'components/product-slider'
      }
    },
  ],
}
