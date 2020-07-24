import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const PostPage = ({ data }) => {
  const post = data.ghostPost
  return (
    <Layout route="/">
      <SEO title={post.title} route={"/" + post.slug} />
      <Post
        title={post.title}
        published_at={new Date(post.published_at)}
        reading_time={post.reading_time}
        featured={post.featured}
        primary_tag={post.primary_tag}
        htmlAst={post.childHtmlRehype.htmlAst}
      />
    </Layout>
  )
}

export default PostPage

export const postPageQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      published_at
      reading_time
      featured
      primary_tag {
        name
        slug
      }
      childHtmlRehype {
        htmlAst
      }
    }
  }
`
