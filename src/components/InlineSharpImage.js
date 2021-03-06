import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

/**
 * Returns a sharp image managed by the Gatsby image toolchain. Pass in a fluidImg JSON string and some alternative text, and `gatsby-image` handles the rest!
 *
 * The component also forwards the classname for proper style targets.
 */
const InlineSharpImage = ({ className, fluidImg, alt }) => (
  <Img
    className={className}
    fluid={fluidImg && JSON.parse(fluidImg)}
    alt={alt}
  />
)

export default InlineSharpImage

InlineSharpImage.propTypes = {
  /**
   * A JSON string with the shape of a `gatsby-image` fluid image string.
   */
  fluidImg: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

InlineSharpImage.defaultProps = {
  alt: "Alternative text for an image.",
}
