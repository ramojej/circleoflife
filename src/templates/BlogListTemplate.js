import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import BlogCard from "../components/Blog/BlogCard"
import Banner from "../sections/Banner"

const BlogListTemplate = props => {
  const { currentPage, numPages } = props.pageContext

  const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const nextPage = `/blog/${currentPage + 1}`

  const { data } = props

  console.log(data)

  return (
    <Layout>
      <Banner title="Blog" img={data.bannerImg.childImageSharp.fluid} />
      <section>
        <div className="container">
          <h2>Blog</h2>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulBlog(
      skip: $skip
      limit: $limit
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
    bannerImg: file(relativePath: { eq: "blog-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default BlogListTemplate
