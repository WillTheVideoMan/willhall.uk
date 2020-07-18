import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const InlineSharpImage = ({ fluidImg, alt }) => (
  <Img fluid={fluidImg && JSON.parse(fluidImg)} alt={alt} />
)

export default InlineSharpImage

InlineSharpImage.propTypes = {
  fluidImg: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

InlineSharpImage.defaultProps = {}
