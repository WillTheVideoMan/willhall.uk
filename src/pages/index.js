import React from "react"
import Layout from "../components/Layout"
import PostCardContainer from "../components/PostCardContainer"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

const Index = ({ data: { allMdx } }) => {
  const posts =
    allMdx.edges.length > 0 ? allMdx.edges.map(({ node }) => node) : null

  return (
    <Layout route="/">
      <SEO
        meta={{
          title: "Welcome",
          path: "/",
        }}
      />
      <PostCardContainer postcards={posts} />
    </Layout>
  )
}

export default Index

export const indexQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___featured, order: DESC }) {
      edges {
        node {
          slug
          frontmatter {
            title
            excerpt
            published_at
            featured
            reading_time
            tags {
              name
              slug
            }
          }
        }
      }
    }
  }
`
