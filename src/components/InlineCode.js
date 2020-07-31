import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { TYPOGRAPHY } from "../styles/constants"

const Code = styled.code`
  color: var(--colour-primary);
  background: var(--colour-accent);
  font-family: ${TYPOGRAPHY.fontFamily.monospace};
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
