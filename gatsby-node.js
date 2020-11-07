const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const postTemplate = path.resolve(`./src/templates/post.js`)
  /*
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const tagTemplate = path.resolve(`./src/templates/tag.js`)
  */

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error whilst running GraphQL query.`)
  }

  if (result.data.allMdx && result.data.allMdx.edges.length > 0) {
    const posts = result.data.allMdx.edges

    posts.forEach(({ node }) => {
      actions.createPage({
        path: `/${node.slug}/`,
        component: postTemplate,
        context: {
          id: node.id,
          //primary_tag_slug: node.primary_tag ? node.primary_tag.slug : null,
        },
      })
    })
  }

  /* 
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
  */
}
