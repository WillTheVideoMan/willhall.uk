import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import PropTypes from "prop-types"
import { TYPOGRAPHY, SPACING } from "../styles/constants"
import CodeBlock from "./CodeBlock"

const Container = styled.article`
  max-width: 36rem;

  * {
    max-width: 100%;
  }

  p,
  ul,
  ol,
  blockquote,
  figure,
  pre {
    margin-top: ${SPACING.main.minor};
    margin-bottom: ${SPACING.main.major};
    line-height: ${TYPOGRAPHY.lineHeight.body};
    font-family: ${TYPOGRAPHY.fontFamily.body};
  }

  p,
  a,
  h2,
  h3,
  ul,
  ol,
  blockquote,
  figure {
    color: var(--colour-primary);
  }

  h2,
  h3 {
    margin-top: ${SPACING.accent.major};
    margin-bottom: ${SPACING.accent.minor};
    line-height: ${TYPOGRAPHY.lineHeight.heading};
    font-family: ${TYPOGRAPHY.fontFamily.heading};
    font-weight: 600;
  }

  h2 {
    font-size: ${TYPOGRAPHY.fontSize.heading.secondary};
  }

  h3 {
    font-size: ${TYPOGRAPHY.fontSize.heading.tertiary};
  }

  ul,
  ol {
    padding-left: ${SPACING.main.major};
  }

  blockquote {
    margin-left: 0;
    text-indent: -0.4rem;
    font-style: italic;
    ::before {
      content: '"';
    }
  }

  figure {
    margin: ${SPACING.accent.major} 0;
    font-size: ${TYPOGRAPHY.fontSize.body.small};
    text-align: center;
  }
`

const shortcodes = { CodeBlock }

const Article = ({ mdxBody }) => {
  return (
    <Container>
      {mdxBody ? (
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdxBody}</MDXRenderer>
        </MDXProvider>
      ) : (
        "Nothing to see here."
      )}
    </Container>
  )
}

export default Article

Article.propTypes = {
  mdxBody: PropTypes.string.isRequired,
}
