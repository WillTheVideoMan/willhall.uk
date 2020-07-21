import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Pre = styled.pre`
  background: #eee;
  padding: var(--main-spacing-major) var(--main-spacing-major);
  overflow-x: scroll;

  code {
    font-family: var(--monospace-font-family);
    font-size: var(--small-body-size);
  }
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
