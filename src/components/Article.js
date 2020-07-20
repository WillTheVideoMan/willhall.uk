import React from "react"
import rehypeReact from "rehype-react"
import styled from "styled-components"
import PropTypes from "prop-types"
import InlineSharpImage from "../components/InlineSharpImage"

const Container = styled.div`
  max-width: 36rem;

  img {
    max-width: 36rem;
  }

  @media only screen and (min-width: 768px) {
    margin-left: 8.333%;
  }

  p,
  ul,
  ol,
  blockquote,
  figure,
  pre,
  .gatsby-image-wrapper {
    margin-top: 0;
    margin-bottom: 1.15rem;
    line-height: 1.65em;
    font-family: "Lora", serif;
  }

  h2,
  h3 {
    margin-top: 2.75rem;
    margin-bottom: 1.05rem;
    line-height: 1.35em;
    font-family: "Playfair Display", serif;
  }

  h2 {
    font-size: 1.44em;
  }

  h3 {
    font-size: 1.2em;
  }

  ul,
  ol {
    padding-left: 0;
    list-style-position: outside;
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
    margin-left: 0;
    margin-right: 0;
    font-size: 0.8rem;
  }

  pre,
  code {
    background: #eee;
    font-family: "IBM Plex Mono", monospace;
  }

  pre {
    padding: 1.15rem 1.05rem;
    overflow-x: scroll;
  }
`
const renderAst = new rehypeReact({
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: {
    "img-sharp-inline": InlineSharpImage,
  },
}).Compiler

const Article = ({ htmlAst }) => {
  return <Container>{renderAst(htmlAst)}</Container>
}

export default Article

Article.propTypes = {
  htmlAst: PropTypes.object,
}

Article.defaultProps = {}
