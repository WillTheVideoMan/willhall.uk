import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const PageTemplate = ({ data }) => {
  const page = data.ghostPage

  return (
    <Layout route={"/" + page.slug + "/"}>
      <SEO title={page.title} route={"/" + page.slug} />
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
      childHtmlRehype {
        htmlAst
      }
    }
  }
`
