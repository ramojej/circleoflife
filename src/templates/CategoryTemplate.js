import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import { ThemeContext } from "../context/theme/ThemeContext"
import Layout from "../components/Layout"
import Banner from "../sections/Banner"
import Sidebar from "../components/Blog/Sidebar"
import styles from "../css/category.module.css"

const CategoryTemplate = props => {
  const { isDarkMode } = useContext(ThemeContext)

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
      <div
        className={`${styles.mainContainer} ${isDarkMode ? styles.dark : ""}`}
      >
        <div className="lg:col-span-2">
          {data.blogPosts.edges.map(({ node }, index) => {
            return (
              <Link
                key={index}
                to={`/blog/${node.slug}`}
                className={styles.eachArticle}
              >
                <h2>{node.title}</h2>
                <time>{node.createdAt}</time>
                <p>{node.shortDesc.shortDesc}</p>
                <h3>Read full story</h3>
              </Link>
            )
          })}
        </div>
        <Sidebar className="lg:col-span-1" />
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
