const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      blogPosts: allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.blogPosts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/SingleBlog.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  //for blogs pagination
  // amount of posts
  const posts = data.blogPosts.edges
  //posts per page
  const postsPerPage = 6
  //how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/BlogListTemplate.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
