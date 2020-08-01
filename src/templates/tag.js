import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostCardContainer from "../components/PostCardContainer"

const TagTemplate = ({ data }) => {
  const tag = data.ghostTag
  const posts =
    data.allGhostPost.edges.length > 0
      ? data.allGhostPost.edges.map(({ node }) => node)
      : null

  return (
    <Layout route="/" tag={tag.name}>
      <SEO title={tag.name} route={"/tag" + tag.slug} />
      <PostCardContainer postcards={posts} />
    </Layout>
  )
}

export default TagTemplate

export const tagTemplateQuery = graphql`
  query($tag_slug: String!) {
    allGhostPost(
      filter: { tags: { elemMatch: { slug: { eq: $tag_slug } } } }
      sort: { fields: featured, order: DESC }
    ) {
      edges {
        node {
          ...PostCardContent
        }
      }
    }
    ghostTag(slug: { eq: $tag_slug }) {
      slug
      name
    }
  }
`
