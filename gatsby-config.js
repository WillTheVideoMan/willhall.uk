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
    title: `Will Hall's Journey Through Everything.`,
    description: `Writings, musings and tantalising tutorials. Indulge, if you dare.`,
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
        plugins: [`gatsby-rehype-inline-images`, `gatsby-rehype-prismjs`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-ghost-images`,
      options: {
        lookup: [
          {
            type: `GhostPost`,
            imgTags: [`feature_image`, `twitter_image`, `og_image`],
          },
          {
            type: `GhostPage`,
            imgTags: [`feature_image`, `twitter_image`, `og_image`],
          },
          {
            type: `GhostTag`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostSettings`,
            imgTags: [
              `cover_image`,
              `twitter_image`,
              `og_image`,
              `icon`,
              `logo`,
            ],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `@willthevideoman/gatsby-plugin-ackee-tracker`,
      options: {
        domainId: process.env.ACKEE_DOMAIN_ID,
        server: process.env.ACKEE_SERVER,
        ignoreLocalhost: true,
        detailed: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Will Hall's Journey Through Everything.`,
        short_name: `Will Hall Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
}
