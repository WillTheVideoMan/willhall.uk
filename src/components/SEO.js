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
const SEO = ({ lang, route, meta, og, twitter }) => {
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
          meta_title
          meta_description
          og_title
          og_description
          twitter_title
          twitter_description
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
    ? ghostSettings.meta_title
      ? ghostSettings.meta_title
      : ghostSettings.title
      ? ghostSettings.title
      : site.siteMetadata.title
    : site.siteMetadata.title

  /**
   * Set the description from props, then from Ghost, then from Gatbsy config.
   */
  const metaSiteDescription = ghostSettings
    ? ghostSettings.meta_description
      ? ghostSettings.meta_description
      : ghostSettings.description
      ? ghostSettings.description
      : site.siteMetadata.description
    : site.siteMetadata.description

  /**
   * If a route path is passed in props, set absolute canonical URL of the current route.
   */
  const canonical = route.path
    ? `${site.siteMetadata.siteUrl}${route.path}`
    : null

  return (
    <Helmet
      htmlAttributes={{ lang: metaLang }}
      title={meta ? (meta.title ? meta.title : route.title) : route.title}
      titleTemplate={`%s | ${metaSiteTitle}`}
      link={canonical ? [{ rel: `canonical`, href: canonical }] : []}
      meta={[
        {
          name: `description`,
          content: meta
            ? meta.description
              ? meta.description
              : metaSiteDescription
            : metaSiteDescription,
        },
        {
          property: `og:title`,
          content: og.title
            ? og.title
            : meta.title
            ? meta.title
            : ghostSettings
            ? ghostSettings.og_title
              ? ghostSettings.og_title
              : metaSiteTitle
            : metaSiteTitle,
        },
        {
          property: `og:description`,
          content: og.description
            ? og.description
            : meta.description
            ? meta.description
            : ghostSettings
            ? ghostSettings.og_description
              ? ghostSettings.og_description
              : metaSiteDescription
            : metaSiteDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: meta.primary_author
            ? meta.primary_author
            : site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: twitter.title
            ? twitter.title
            : meta.title
            ? meta.title
            : ghostSettings
            ? ghostSettings.twitter_title
              ? ghostSettings.twitter_title
              : metaSiteTitle
            : metaSiteTitle,
        },
        {
          name: `twitter:description`,
          content: twitter.description
            ? twitter.description
            : meta.description
            ? meta.description
            : ghostSettings
            ? ghostSettings.twitter_description
              ? ghostSettings.twitter_description
              : metaSiteDescription
            : metaSiteDescription,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  meta: {},
  og: {},
  twitter: {},
}

SEO.propTypes = {
  lang: PropTypes.string,
  route: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    primary_author: PropTypes.string,
  }).isRequired,
  og: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  twitter: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
}

export default SEO
