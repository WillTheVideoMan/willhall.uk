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
 *
 * The only truly required props are `meta.title` and `meta.path`. The rest are all optional, and the component
 * will try its best to fill in all the gaps.
 *
 * Here is an example of all the possible tags that will be added to the document head:
 *
 * ```HTML
 * <title>title | global site title</title>
 * <link rel="canonical" href="http://localhost:8000/">
 * <meta name="description" content="description">
 *
 * <meta property="og:site_name" content="og title">
 * <meta property="og:title" content="title">
 * <meta property="og:url" content="http://localhost:8000/">
 * <meta property="og:description" content="og description">
 * <meta property="og:type" content="website">
 * <meta property="og:image:width" content="1080">
 * <meta property="og:image:height" content="608">
 * <meta property="og:image" content="http://localhost:8000/static/e03b44e1a19ca173f976df8fdef6a7ea/10d63/og.jpg">
 *
 * <meta name="twitter:creator" content="twitter author">
 * <meta name="twitter:title" content="title">
 * <meta name="twitter:description" content="twitter description">
 * <meta name="twitter:site" content="twitter site">
 * <meta name="twitter:card" content="summary_large_image">
 * <meta property="twitter:image" content="http://localhost:8000/static/fe3f5168b59698c2925dfd6fbfd6901e/10d63/twitter.jpg">
 * ```
 */
const SEO = ({ meta, alt, og, twt }) => {
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
          coverImageSharp {
            childImageSharp {
              resize(width: 1080) {
                src
                width
                height
              }
            }
          }
          ogImageSharp {
            childImageSharp {
              resize(width: 1080) {
                src
                width
                height
              }
            }
          }
          twitterImageSharp {
            childImageSharp {
              resize(width: 1080) {
                src
                width
                height
              }
            }
          }
        }
        site {
          siteMetadata {
            lang
            siteUrl
            author
            title
            description
          }
        }
      }
    `
  )

  /**
   * SITE TAG SECTION
   *
   * These constants hold values for tags associated with the site, and the respective route
   * of the site specified in the `meta` and `alt` props. These tags reference the basic SEO state
   * before any overrides by values in the `twt` and `og` props.
   *
   * For each constant, there will always be an attempt to return some value. The exception is for images.
   * Each constant has a different preference for sourcing its value. The possible sources are:
   *
   * - `ghostSettings` from the Ghost CMS API.
   * - `site.siteMetadata` from the gatsby-config.
   * - `meta` from props.
   * - `alt` from props.
   */

  /**
   * ghostSettings.lang > site.siteMetadata.lang
   */
  const lang = ghostSettings
    ? ghostSettings.lang
      ? ghostSettings.lang
      : site.siteMetadata.lang
    : site.siteMetadata.lang

  /**
   * alt.canonical_url > meta.path (+ site.siteMetadata.siteUrl)
   */
  const canonical = alt
    ? alt.canonical_url
      ? alt.canonical_url
      : `${site.siteMetadata.siteUrl}${meta.path}`
    : `${site.siteMetadata.siteUrl}${meta.path}`

  /**
   * ghostSettings.meta_title > ghostSettings.title > site.siteMetadata.title
   */
  const globalTitle = ghostSettings
    ? ghostSettings.meta_title
      ? ghostSettings.meta_title
      : ghostSettings.title
      ? ghostSettings.title
      : site.siteMetadata.title
    : site.siteMetadata.title

  /**
   * alt.title > meta.title
   */
  const title = alt ? (alt.title ? alt.title : meta.title) : meta.title

  /**
   * ghostSettings.meta_description > ghostSettings.description > site.siteMetadata.description
   */
  const globalDescription = ghostSettings
    ? ghostSettings.meta_description
      ? ghostSettings.meta_description
      : ghostSettings.description
      ? ghostSettings.description
      : site.siteMetadata.description
    : site.siteMetadata.description

  /**
   * alt.description > meta.description > globalDescription
   */
  const description = alt
    ? alt.description
      ? alt.description
      : meta.description
      ? meta.description
      : globalDescription
    : globalDescription

  /**
   * ghostSettings.coverImageSharp > null
   */
  const siteImage = ghostSettings
    ? ghostSettings.coverImageSharp
      ? ghostSettings.coverImageSharp.childImageSharp.resize
      : null
    : null

  /**
   * ghostSettings.ogImageSharp > siteImage > null
   */
  const ogSiteImage = ghostSettings
    ? ghostSettings.ogImageSharp
      ? ghostSettings.ogImageSharp.childImageSharp.resize
      : siteImage
    : siteImage

  /**
   * ghostSettings.twitterImageSharp > siteImage > null
   */
  const twitterSiteImage = ghostSettings
    ? ghostSettings.twitterImageSharp
      ? ghostSettings.twitterImageSharp.childImageSharp.resize
      : siteImage
    : siteImage

  /**
   * OPEN GRAPH TAG SECTION
   *
   * In a similar fashion to the site tags, these tags will also be populated to represent the
   * open graph SEO tags. Possible sources for OG values are:
   *
   * - `og` from props.
   * - All site constants.
   */

  /**
   * og.title > title
   */
  const ogTitle = og ? (og.title ? og.title : title) : title

  /**
   * og.description > description
   */
  const ogDescription = og
    ? og.description
      ? og.description
      : description
    : description

  /**
   * og.type > "website"
   */
  const ogType = og ? (og.type ? og.type : "website") : "website"

  /**
   * og.image > meta.image > ogSiteImage > null
   */
  const ogImage = og
    ? og.image
      ? og.image
      : meta.image
      ? meta.image
      : ogSiteImage
    : ogSiteImage

  /**
   * TWITTER TAG SECTION
   *
   * In a similar fashion to the site tags, these tags will also be populated to represent the
   * twitter SEO tags. Possible sources for twitter values are:
   *
   * - `twt` from props.
   * - All site constants.
   */

  /**
   * twt.title > title
   */
  const twitterTitle = twt ? (twt.title ? twt.title : title) : title

  /**
   * twt.author > site.siteMetadata.author
   */
  const twitterCreator = twt
    ? twt.author
      ? twt.author
      : site.siteMetadata.author
    : site.siteMetadata.author

  /**
   * twt.description > description
   */
  const twitterDescription = twt
    ? twt.description
      ? twt.description
      : description
    : description

  /**
   * twt.image > meta.image > twitterSiteImage > null
   */
  const twitterImage = twt
    ? twt.image
      ? twt.image
      : meta.image
      ? meta.image
      : twitterSiteImage
    : twitterSiteImage

  return (
    <Helmet
      htmlAttributes={{ lang: lang }}
      title={title}
      titleTemplate={`%s | ${globalTitle}`}
      link={[
        {
          rel: "canonical",
          href: canonical,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: ogTitle,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          property: `og:description`,
          content: ogDescription,
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          property: `og:site_name`,
          content: globalTitle,
        },
        {
          name: `twitter:site`,
          content: globalTitle,
        },
        {
          name: `twitter:creator`,
          content: twitterCreator,
        },
        {
          name: `twitter:title`,
          content: twitterTitle,
        },
        {
          name: `twitter:description`,
          content: twitterDescription,
        },
      ]
        .concat(
          ogImage || twitterImage
            ? [
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(
          ogImage
            ? [
                {
                  property: "og:image",
                  content: `${site.siteMetadata.siteUrl}${ogImage.src}`,
                },
                {
                  property: "og:image:width",
                  content: ogImage.width,
                },
                {
                  property: "og:image:height",
                  content: ogImage.height,
                },
              ]
            : []
        )
        .concat(
          twitterImage
            ? [
                {
                  property: "twitter:image",
                  content: `${site.siteMetadata.siteUrl}${twitterImage.src}`,
                },
              ]
            : []
        )}
    />
  )
}

SEO.defaultProps = {}

SEO.propTypes = {
  /**
   * The main metadata for the route. The only truly required values are
   * `meta.title` and `meta.path`. You must pass a `meta` object with those keys.
   */
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  }).isRequired,
  /**
   * The `alt` object provides the opportunity to override certain values if
   * explicitly specified by upstream Ghost SEO. It is not required.
   */
  alt: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    canonical_url: PropTypes.string,
  }),
  /**
   * The `og` object provides the opportunity to explicitly set Open Graph tag values
   * if explicitly specified by upstream Ghost SEO. It is not required.
   */
  og: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.oneOf(["website", "article"]),
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  }),
  /**
   * The `twt` object provides the opportunity to explicitly set Twitter tag values
   * if explicitly specified by upstream Ghost SEO. It is not required.
   */
  twt: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  }),
}

export default SEO
