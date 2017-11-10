module.exports = {
  siteMetadata: {
    title: `Quinn James`,
  },
  plugins: [`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
