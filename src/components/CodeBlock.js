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

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.punctuation,
  .token.operator,
  .token.keyword {
    color: var(--colour-burst);
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
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
