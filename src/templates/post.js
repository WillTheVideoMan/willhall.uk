import React from "react"
import { graphql } from "gatsby"
import Article from "../components/Article"
import Layout from "../components/Layout"

const Post = ({ data }) => {
  const post = data.ghostPost
  return (
    <Layout>
      <h1>{post.title}</h1>
      <Article htmlAst={post.childHtmlRehype.htmlAst} />
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      childHtmlRehype {
        htmlAst
      }
    }
  }
`
