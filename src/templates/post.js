import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostCardContainer from "../components/PostCardContainer"

const PostTemplate = ({ data }) => {
  const post = data.ghostPost
  const next =
    data.next_of_tag.edges.length > 0
      ? data.next_of_tag.edges.map(({ node }) => node)
      : data.next_of_all.edges.length > 0
      ? data.next_of_all.edges.map(({ node }) => node)
      : null

  return (
    <Layout route="/">
      <SEO
        route={{ title: post.title, path: "/" + post.slug }}
        meta={{
          title: post.meta_title,
          description: post.meta_description,
          primary_author: post.primary_author.name,
        }}
        og={{ title: post.og_title, description: post.og_description }}
        twitter={{
          title: post.twitter_title,
          description: post.twitter_description,
        }}
      />
      <Post
        title={post.title}
        published_at={new Date(post.published_at)}
        reading_time={post.reading_time}
        featured={post.featured}
        primary_tag={post.primary_tag}
        tags={post.tags}
        htmlAst={post.childHtmlRehype.htmlAst}
      />
      {next ? (
        <PostCardContainer title={"you might like"} postcards={next} />
      ) : null}
    </Layout>
  )
}

export default PostTemplate

export const postTemplateQuery = graphql`
  query($post_slug: String!, $primary_tag_slug: String) {
    ghostPost(slug: { eq: $post_slug }) {
      ...PostContent
    }
    next_of_tag: allGhostPost(
      filter: {
        primary_tag: { slug: { eq: $primary_tag_slug } }
        slug: { ne: $post_slug }
      }
      sort: { fields: featured, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          ...PostCardContent
        }
      }
    }
    next_of_all: allGhostPost(
      filter: { slug: { ne: $post_slug } }
      limit: 3
      sort: { order: DESC, fields: featured }
    ) {
      edges {
        node {
          ...PostCardContent
        }
      }
    }
  }
`
