import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import PostCard from "../components/PostCard"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

const CardContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin-left: -${props => props.theme.spacing.main.major};
  margin-bottom: -${props => props.theme.spacing.main.major};
`

const Index = ({ data }) => (
  <Layout route="/">
    <SEO title="Welcome" route="/" />
    <CardContainer>
      {data.allGhostPost.edges.map(({ node }) => (
        <PostCard
          title={node.title}
          excerpt={node.excerpt}
          published_at={new Date(node.published_at)}
          reading_time={node.reading_time}
          featured={node.featured}
          primary_tag={node.primary_tag}
          slug={node.slug}
        />
      ))}
    </CardContainer>
  </Layout>
)

export default Index

export const indexQuery = graphql`
  query {
    allGhostPost(sort: { fields: featured, order: DESC }) {
      edges {
        node {
          title
          slug
          excerpt
          published_at
          reading_time
          featured
          primary_tag {
            name
            slug
          }
        }
      }
    }
  }
`
