import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link, graphql } from "gatsby"

const Index = ({ data }) => (
  <Layout route="/">
    <SEO title="Welcome" route="/" />
    <h2>Under construction and coming soon.</h2>
    <ul>
      {data.allGhostPost.edges.map(({ node }) => (
        <li>
          <Link to={`/${node.slug}/`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default Index

export const indexQuery = graphql`
  query {
    allGhostPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
