import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Pre = styled.pre`
  color: ${props => props.theme.colours.primary};
  font-size: ${props => props.theme.typography.fontSize.body.small};
  background: ${props => props.theme.colours.accent};
  padding: ${props => props.theme.spacing.main.major};
  overflow-x: scroll;
`

/**
 * Returns a code block which is scroll-able when overflowing on the x-axis.
 *
 * This block is a drop-in replacement for `<pre>`, and so it accepts children of `<code>`.
 */
const CodeBlock = ({ children }) => <Pre tabIndex="0">{children}</Pre>

export default CodeBlock

CodeBlock.propTypes = {
  children: PropTypes.array,
}
