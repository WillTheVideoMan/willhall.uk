import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Code = styled.code`
  color: ${props => props.theme.colours.primary};
  background: ${props => props.theme.colours.accent};
  font-family: ${props => props.theme.typography.fontFamily.monospace};
`

/**
 * Returns a code block which is scroll-able when overflowing on the x-axis.
 *
 * This block is a drop-in replacement for `<pre>`, and so it accepts children of `<code>`.
 */
const InlineCode = ({ children }) => <Code>{children}</Code>

export default InlineCode

InlineCode.propTypes = {
  children: PropTypes.array,
}
