import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { TYPOGRAPHY, SPACING } from "../styles/constants"

const Pre = styled.pre`
  color: var(--colour-primary);
  font-size: ${TYPOGRAPHY.fontSize.body.small};
  background: var(--colour-accent);
  padding: ${SPACING.main.major};
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
