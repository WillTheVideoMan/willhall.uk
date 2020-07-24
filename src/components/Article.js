import React from "react"
import rehypeReact from "rehype-react"
import styled from "styled-components"
import PropTypes from "prop-types"
import InlineSharpImage from "../components/InlineSharpImage"
import CodeBlock from "./CodeBlock"
import InlineCode from "./InlineCode"

const Container = styled.article`
  max-width: 36rem;

  * {
    max-width: 100%;
  }

  p:first-child {
    margin-top: ${props => props.theme.spacing.accent.major};
  }

  p,
  ul,
  ol,
  blockquote,
  figure,
  pre,
  .gatsby-image-wrapper {
    margin-top: ${props => props.theme.spacing.main.minor};
    margin-bottom: ${props => props.theme.spacing.main.major};
    line-height: ${props => props.theme.typography.lineHeight.body};
    font-family: ${props => props.theme.typography.fontFamily.body};
  }

  p,
  a,
  h2,
  h3,
  ul,
  ol,
  blockquote,
  figure {
    color: ${props => props.theme.colours.primary};
  }

  h2,
  h3 {
    margin-top: ${props => props.theme.spacing.accent.major};
    margin-bottom: ${props => props.theme.spacing.accent.minor};
    line-height: ${props => props.theme.typography.lineHeight.heading};
    font-family: ${props => props.theme.typography.fontFamily.heading};
    font-weight: 600;
  }

  h2 {
    font-size: ${props => props.theme.typography.fontSize.heading.secondary};
  }

  h3 {
    font-size: ${props => props.theme.typography.fontSize.heading.tertiary};
  }

  ul,
  ol {
    padding-left: ${props => props.theme.spacing.main.major};
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
    margin: ${props => props.theme.spacing.accent.major} 0;
    font-size: ${props => props.theme.typography.fontSize.body.small};
    text-align: center;
  }
`

const renderAst = new rehypeReact({
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: {
    "img-sharp-inline": InlineSharpImage,
    pre: CodeBlock,
    code: InlineCode,
  },
}).Compiler

/**
 * The body of an article rendered from an object containing rehyped HTML elements.
 *
 * This components accepts a HTMLAst object, which can be generated through the use of `gatsby-transformer-rehype`.
 *
 * Check the `gatsby-config.js` to see how to configure Gatsby and Ghost for article re-hyping.
 */
const Article = ({ htmlAst }) => {
  return (
    <Container>
      {htmlAst ? renderAst(htmlAst) : "Nothing to see here."}
    </Container>
  )
}

export default Article

Article.propTypes = {
  /**
   * The HTMLAst tree to traverse, containing all elements from the rehyped HTML.
   */
  htmlAst: PropTypes.object.isRequired,
}
