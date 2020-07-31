import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/**
 * You may notice that nothing visible renders with this component.
 *
 * That is because it deals only with adding meta tags to the document head.
 *
 * This ensures that the site is fully SEO-ed.
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
  const metaLang =
    lang ||
    (ghostSettings
      ? ghostSettings.lang
        ? ghostSettings.lang
        : site.siteMetadata.lang
      : site.siteMetadata.lang)

  /**
   * The site title does not change between routes.
   *
   * Set the site tail from Ghost, then from Gatsby config.
   */
  const metaSiteTitle = ghostSettings
    ? ghostSettings.title
      ? ghostSettings.title
      : site.siteMetadata.title
    : site.siteMetadata.title
  /**
   * Set the description from props, then from Ghost, then from Gatbsy config.
   */
  const metaDescription =
    description ||
    (ghostSettings
      ? ghostSettings.description
        ? ghostSettings.description
        : site.siteMetadata.description
      : site.siteMetadata.description)

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
