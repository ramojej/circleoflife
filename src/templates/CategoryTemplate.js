import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../sections/Banner"

const CategoryTemplate = props => {
  console.log(props)

  const { pathContext, data } = props

  return (
    <Layout>
      <Banner
        title={
          pathContext.category === "General"
            ? "Anything under the sun"
            : "Articles about " + pathContext.category
        }
        img={data.bannerImg.childImageSharp.fluid}
      />
      <div>
        <div>
          {data.blogPosts.edges.map(({ node }, index) => {
            return (
              <div key={index}>
                <h2>{node.title}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
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
          shortDesc {
            shortDesc
          }
        }
      }
    }
    bannerImg: file(relativePath: { eq: "blog-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default CategoryTemplate
