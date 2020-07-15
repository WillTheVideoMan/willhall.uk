const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const postTemplate = path.resolve(`./src/templates/post.js`)

  const result = await graphql(`
    {
      allGhostPost {
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

  if (!result.data.allGhostPost) {
    return
  }

  const items = result.data.allGhostPost.edges

  items.forEach(({ node }) => {
    node.url = `/${node.slug}/`

    actions.createPage({
      path: node.url,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
