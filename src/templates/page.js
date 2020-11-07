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
        meta={{
          title: page.title,
          description: page.custom_excerpt,
          path: `/${page.slug}`,
          image: page.featureImageSharp
            ? page.featureImageSharp.childImageSharp.resize
            : null,
        }}
        alt={{
          title: page.meta_title,
          description: page.meta_description,
          canonical_url: page.canonical_url,
        }}
        og={{
          title: page.og_title,
          description: page.og_description,
          type: "article",
          image: page.ogImageSharp
            ? page.ogImageSharp.childImageSharp.resize
            : null,
        }}
        twt={{
          title: page.twitter_title,
          description: page.twitter_description,
          author: page.primary_author.name,
          image: page.twitterImageSharp
            ? page.twitterImageSharp.childImageSharp.resize
            : null,
        }}
      />
      <Post title={page.title} htmlAst={page.childHtmlRehype.htmlAst} />
    </Layout>
  )
}

export default PageTemplate

/*
export const pageTemplateQuery = graphql`
  query($page_slug: String!) {
    ghostPage(slug: { eq: $page_slug }) {
      ...PageContent
    }
  }
`
*/
