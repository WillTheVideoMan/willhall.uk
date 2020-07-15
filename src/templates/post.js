import React from "react"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  const post = data.ghostPost

  return (
    <>
      <h1>{post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  )
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      html
    }
  }
`
