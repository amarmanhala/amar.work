module.exports = {
  siteMetadata: {
    title: `Amarpreet Singh - Developer`,
    description: `Amarpreet Singh is a Web developer & designer based in Toronto, Canada`,
    author: `@amarmanhala`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amarpreet Singh`,
        short_name: `Amar`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/amar-512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-sass'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
