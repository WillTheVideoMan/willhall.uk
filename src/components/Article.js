import React from "react"
import rehypeReact from "rehype-react"
import styled from "styled-components"
import PropTypes from "prop-types"
import InlineSharpImage from "../components/InlineSharpImage"
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
  pre,
  .gatsby-image-wrapper {
    margin-top: var(--main-spacing-minor);
    margin-bottom: var(--main-spacing-major);
    line-height: var(--body-line-height);
    font-family: var(--body-font-family);
  }

  h2,
  h3 {
    margin-top: var(--accent-spacing-major);
    margin-bottom: var(--accent-spacing-minor);
    line-height: var(--heading-line-height);
    font-family: var(--heading-font-family);
    font-weight: 600;
  }

  h2 {
    font-size: var(--secondary-heading-size);
  }

  h3 {
    font-size: var(--tertiary-heading-size);
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
    margin: var(--accent-spacing-major) 0;
    font-size: var(--small-body-size);
    text-align: center;
  }

  code {
    background: #eee;
    font-family: var(--monospace-font-family);
  }
`

const renderAst = new rehypeReact({
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: {
    "img-sharp-inline": InlineSharpImage,
    pre: CodeBlock,
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
