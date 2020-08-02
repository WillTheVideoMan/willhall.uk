/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    lang: `en`,
    title: `Will Hall`,
    description: `Will Hall's Journey Through Everything.`,
    author: `Will Hall`,
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    {
      resolve: `@willthevideoman/gatsby-source-ghost`,
      options: {
        apiUrl: process.env.GHOST_API_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY,
      },
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        filter: node =>
          node.internal.type === `GhostPost` ||
          node.internal.type === `GhostPage`,
        source: node => node.html,
        plugins: [
          {
            resolve: `gatsby-rehype-inline-images`,
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-metomic`,
      options: {
        clientId: process.env.METOMIC_CLIENT_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Will Hall`,
        short_name: `Will Hall`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.jpg`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
}
