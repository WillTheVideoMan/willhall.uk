import React from "react"
import { graphql } from "gatsby"
import Article from "../components/Article"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Post = ({ data }) => {
  const post = data.ghostPost
  return (
    <Layout>
      <SEO title={post.title} route={"/" + post.slug} />
      <h1>{post.title}</h1>
      <p>{post.custom_excerpt}</p>
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
      custom_excerpt
    }
  }
`
