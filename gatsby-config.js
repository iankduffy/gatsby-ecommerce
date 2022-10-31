module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    // 'gatsby-plugin-no-javascript'
    // {
    //   resolve: 'gatsby-plugin-no-javascript',
    //   options: {
    //     // excludeFiles: /product-slider/, 
    //     // excludePaths: ['/']
    //   }
    // },
  ],
  flags: {
    PARTIAL_HYDRATION: true
  }
}
