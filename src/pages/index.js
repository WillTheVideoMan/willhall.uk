import React from "react"
import Layout from "../components/Layout"
import Greeting from "../components/Greeting"
import SEO from "../components/SEO"
import { Link, graphql } from "gatsby"

const Index = ({ data }) => (
  <Layout>
    <SEO title="Welcome" route="/" />
    <Greeting
      headline="willhall.uk"
      message="Under construction and coming soon."
    />
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
