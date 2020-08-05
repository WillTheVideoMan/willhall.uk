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
 * The only truly required props are meta.title and meta.path. THe rest are all optional, and the component
 * will try its best to fill in all the gaps.
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
   * Site tag values.
   */
  const lang = ghostSettings
    ? ghostSettings.lang
      ? ghostSettings.lang
      : site.siteMetadata.lang
    : site.siteMetadata.lang

  const canonical = alt
    ? alt.canonical_url
      ? alt.canonical_url
      : `${site.siteMetadata.siteUrl}${meta.path}`
    : `${site.siteMetadata.siteUrl}${meta.path}`

  const globalTitle = ghostSettings
    ? ghostSettings.meta_title
      ? ghostSettings.meta_title
      : ghostSettings.title
      ? ghostSettings.title
      : site.siteMetadata.title
    : site.siteMetadata.title

  const title = alt ? (alt.title ? alt.title : meta.title) : meta.title

  const description = alt
    ? alt.description
      ? alt.description
      : meta.description
      ? meta.description
      : ghostSettings
      ? ghostSettings.meta_description
        ? ghostSettings.meta_description
        : ghostSettings.description
        ? ghostSettings.description
        : site.siteMetadata.description
      : site.siteMetadata.description
    : site.siteMetadata.description

  const siteImage = ghostSettings
    ? ghostSettings.coverImageSharp
      ? ghostSettings.coverImageSharp.childImageSharp.resize
      : null
    : null

  const ogSiteImage = ghostSettings
    ? ghostSettings.ogImageSharp
      ? ghostSettings.ogImageSharp.childImageSharp.resize
      : siteImage
    : siteImage

  const twitterSiteImage = ghostSettings
    ? ghostSettings.twitterImageSharp
      ? ghostSettings.twitterImageSharp.childImageSharp.resize
      : siteImage
    : siteImage

  /**
   * Open Graph tag values.
   */
  const ogTitle = og ? (og.title ? og.title : title) : title

  const ogDescription = og
    ? og.description
      ? og.description
      : description
    : description

  const ogType = og ? (og.type ? og.type : "website") : "website"

  const ogImage = og
    ? og.image
      ? og.image
      : meta.image
      ? meta.image
      : ogSiteImage
    : ogSiteImage

  /**
   * Twitter tag values.
   */
  const twitterTitle = twt ? (twt.title ? twt.title : title) : title

  const twitterCreator = meta.author ? meta.author : site.siteMetadata.author

  const twitterDescription = twt
    ? twt.description
      ? twt.description
      : description
    : description

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
      link={[{ rel: "canonical", href: canonical }]}
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
   * meta.title and meta.path.
   */
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  }).isRequired,
  alt: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    canonical_url: PropTypes.string,
  }),
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
  twt: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  }),
}

export default SEO
