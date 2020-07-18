import React from "react"
import rehypeReact from "rehype-react"
import styled from "styled-components"
import PropTypes from "prop-types"
import InlineSharpImage from "../components/InlineSharpImage"

const Container = styled.div`
  max-width: 36rem;

  p,
  h2,
  ul,
  ol,
  li,
  blockquote,
  figure {
    margin-top: 0;
    font-family: "Lora", serif;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.563rem;
    font-family: "Playfair Display", serif;
    margin-top: 4.5rem;
  }

  ul,
  ol {
    padding-left: 0;
    list-style-position: outside;
  }

  blockquote {
    margin-left: 0;
    text-indent: -0.45rem;
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
