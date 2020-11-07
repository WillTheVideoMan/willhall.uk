import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { TYPOGRAPHY, SPACING } from "../styles/constants"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"

const Pre = styled.pre`
  font-size: ${TYPOGRAPHY.fontSize.body.small};
  padding: ${SPACING.main.major};
  overflow-x: scroll;
`

/*
color: var(--colour-primary);
background: var(--colour-accent);
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



*/

console.log(theme)

const CodeBlock = ({ code, language }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
)

export default CodeBlock

CodeBlock.propTypes = {
  children: PropTypes.array,
}
