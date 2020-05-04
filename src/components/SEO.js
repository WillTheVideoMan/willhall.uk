import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/**
 * Inserts proper SEO tags into the document head.
 *
 * @param {*} props - title is the only required prop. Route is recommended where possible.
 */
const SEO = ({ lang, title, description, route }) => {
  /**
   * Query the site metadata from the Gatsby configuration and from Ghost.
   */
  const { ghostSettings, site } = useStaticQuery(
    graphql`
      query {
        ghostSettings {
          lang
          title
          description
        }
        site {
          siteMetadata {
            lang
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  /**
   * Set the language from props, then from Ghost, then from Gatsby config.
   */
  const metaLang = lang || ghostSettings.lang || site.siteMetadata.lang

  /**
   * The site title does not change between routes.
   *
   * Set the site tail from Ghost, then from Gatsby config.
   */
  const metaSiteTitle = ghostSettings.title || site.siteMetadata.title

  /**
   * Set the description from props, then from Ghost, then from Gatbsy config.
   */
  const metaDescription =
    description || ghostSettings.description || site.siteMetadata.description

  /**
   * If a route is passed in props, set absolute canonical URL of the current route.
   */
  const canonical = route ? `${site.siteMetadata.siteUrl}${route}` : null

  return (
    <Helmet
      htmlAttributes={{ lang: metaLang }}
      title={title}
      titleTemplate={`%s | ${metaSiteTitle}`}
      link={canonical ? [{ rel: `canonical`, href: canonical }] : []}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: ``,
  description: ``,
  route: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  route: PropTypes.string,
}

export default SEO
