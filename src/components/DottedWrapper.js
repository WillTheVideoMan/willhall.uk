import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
/**
 * Use an SVG to generate a custom spaced dotted wrapper.
 */
const Wrapper = styled.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='grey' stroke-width='3' stroke-dasharray='1.5 16' stroke-dashoffset='4' stroke-linecap='butt'/%3e%3c/svg%3e");
`

/**
 * Adds a dotted border around any child element(s).
 *
 * Passes the className prop so it itself is stylable. Useful for adding padding ect.
 */
const DottedWrapper = ({ length, spacing, className, children }) => (
  <Wrapper length={length} spacing={spacing} className={className}>
    {children}
  </Wrapper>
)

export default DottedWrapper

DottedWrapper.propTypes = {
  spacing: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.element,
}

DottedWrapper.defaultProps = {
  spacing: 10,
  length: 10,
}
