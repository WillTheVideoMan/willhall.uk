import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  /** Generates a linear gradient on each axis within a background image */
  background-image: linear-gradient(
      to right,
      black ${props => props.length}%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(black ${props => props.length}%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(
      to right,
      black ${props => props.length}%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(black ${props => props.length}%, rgba(255, 255, 255, 0) 0%);

  /** Position each gradient along each edge of the division. */
  background-position: top, right, bottom, left;

  /** The size of the background defines how long each repeated gradient is. */
  background-size: ${props => props.spacing}px 1px,
    1px ${props => props.spacing}px;

  /** Repeat the gradient along each axis. */
  background-repeat: repeat-x, repeat-y;
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
  children: PropTypes.array,
}

DottedWrapper.defaultProps = {
  spacing: 10,
  length: 10,
}
