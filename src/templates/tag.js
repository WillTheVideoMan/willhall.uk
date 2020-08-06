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
      <SEO
        meta={{
          title: tag.name,
          description: tag.description,
          path: `/tag/${tag.slug}`,
          image: tag.featureImageSharp
            ? tag.featureImageSharp.childImageSharp.resize
            : null,
        }}
        alt={{
          title: tag.meta_title,
          description: tag.meta_description,
        }}
      />
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
      meta_description
      meta_title
      description
      featureImageSharp {
        childImageSharp {
          resize(width: 1080) {
            src
            width
            height
          }
        }
      }
    }
  }
`
