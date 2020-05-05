import React from "react"
import BlogCard from "../Blog/BlogCard"
import { useStaticQuery, graphql } from "gatsby"
//import styles from "../../css/blog.module.css"

//query 3 latest blog posts
const queryBlogPosts = graphql`
  {
    homeBlog: allContentfulBlog(
      limit: 3
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          createdAt(formatString: "MMM DD, YYYY")
          timeCreated: createdAt(formatString: "hh:mm a")
          title
          slug
          id: contentful_id
          category
          shortDesc {
            shortDesc
          }
          featureImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const FeaturedBlog = () => {
  const { homeBlog } = useStaticQuery(queryBlogPosts)

  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-10">
      {homeBlog.edges.map(({ node }) => {
        return <BlogCard key={node.id} blog={node} />
      })}
    </div>
  )
}

export default FeaturedBlog
