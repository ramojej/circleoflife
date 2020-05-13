import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../sections/Banner"

const CategoryTemplate = props => {
  console.log(props)

  const { pathContext, data } = props

  return <div>from {pathContext.category} </div>
}

export const query = graphql`
  query($category: String!) {
    blogPosts: allContentfulBlog(filter: { category: { eq: $category } }) {
      edges {
        node {
          slug
          category
          createdAt(formatString: "MMM DD, YYYY")
          timeCreated: createdAt(formatString: "hh:mm a")
          title
        }
      }
    }
  }
`

export default CategoryTemplate
