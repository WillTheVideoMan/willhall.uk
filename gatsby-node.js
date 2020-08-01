const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const tagTemplate = path.resolve(`./src/templates/tag.js`)

  const result = await graphql(`
    {
      allGhostPost {
        edges {
          node {
            slug
            primary_tag {
              slug
            }
          }
        }
      }
      allGhostPage {
        edges {
          node {
            slug
          }
        }
      }
      allGhostTag {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error whilst running GraphQL query.`)
  }

  if (result.data.allGhostPost && result.data.allGhostPost.edges.length > 0) {
    const posts = result.data.allGhostPost.edges

    posts.forEach(({ node }) => {
      node.url = `/${node.slug}/`

      actions.createPage({
        path: node.url,
        component: postTemplate,
        context: {
          post_slug: node.slug,
          primary_tag_slug: node.primary_tag ? node.primary_tag.slug : null,
        },
      })
    })
  }

  if (result.data.allGhostPage && result.data.allGhostPage.edges.length > 0) {
    const pages = result.data.allGhostPage.edges

    pages.forEach(({ node }) => {
      node.url = `/${node.slug}/`

      actions.createPage({
        path: node.url,
        component: pageTemplate,
        context: {
          page_slug: node.slug,
        },
      })
    })
  }

  if (result.data.allGhostTag && result.data.allGhostTag.edges.length > 0) {
    const tags = result.data.allGhostTag.edges

    tags.forEach(({ node }) => {
      node.url = `/tag/${node.slug}/`

      actions.createPage({
        path: node.url,
        component: tagTemplate,
        context: {
          tag_slug: node.slug,
        },
      })
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type GhostPage implements Node {
      childHtmlRehype: HTMLRehype
    }

    type GhostPost implements Node {
      childHtmlRehype: HTMLRehype
    }

    type HTMLRehype implements Node {
      html: String!
      htmlAst: String!
      id: ID!
      tableOfContents: [TableOfContents]
    }

    type TableOfContents {
      id: ID!
      heading: String!
    }
  `)
}
