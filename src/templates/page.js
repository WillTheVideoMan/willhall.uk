import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const PageTemplate = ({ data }) => {
  const page = data.ghostPage

  return (
    <Layout route={"/" + page.slug + "/"}>
      <SEO
        route={{ title: page.title, path: "/" + page.slug }}
        meta={{
          title: page.meta_title,
          description: page.meta_description,
          primary_author: page.primary_author.name,
        }}
        og={{ title: page.og_title, description: page.og_description }}
        twitter={{
          title: page.twitter_title,
          description: page.twitter_description,
        }}
      />
      <Post title={page.title} htmlAst={page.childHtmlRehype.htmlAst} />
    </Layout>
  )
}

export default PageTemplate

export const pageTemplateQuery = graphql`
  query($page_slug: String!) {
    ghostPage(slug: { eq: $page_slug }) {
      slug
      title
      meta_title
      meta_description
      og_title
      og_description
      twitter_title
      twitter_description
      primary_author {
        name
      }
      childHtmlRehype {
        htmlAst
      }
    }
  }
`
