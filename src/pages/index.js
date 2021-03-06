import React from "react"
import Layout from "../components/Layout"
import PostCardContainer from "../components/PostCardContainer"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  const posts =
    data.allGhostPost.edges.length > 0
      ? data.allGhostPost.edges.map(({ node }) => node)
      : null

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
    allGhostPost(sort: { fields: featured, order: DESC }) {
      edges {
        node {
          ...PostCardContent
        }
      }
    }
  }
`
