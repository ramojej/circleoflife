import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import { ThemeContext } from "../context/theme/ThemeContext"
import Layout from "../components/Layout"
import BlogCard from "../components/Blog/BlogCard"
import Banner from "../sections/Banner"
import styles from "../css/bloglist.module.css"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"

const BlogListTemplate = props => {
  const { isDarkMode } = useContext(ThemeContext)

  const { currentPage, numPages } = props.pageContext

  const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const nextPage = `/blog/${currentPage + 1}`

  const { data } = props

  console.log(props)

  return (
    <Layout>
      <Banner title="Blog" img={data.bannerImg.childImageSharp.fluid} />
      <section className={styles.bloglistSection}>
        <div className={`${styles.bloglistContainer} container`}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
        <div
          className={`container ${styles.linkContainer} ${
            isDarkMode ? styles.darklinkContainer : styles.lightlinkContainer
          }`}
        >
          {!isFirst && (
            <Link to={prevPage} className={styles.paginateWord}>
              <FaAngleLeft />
              Prev
            </Link>
          )}

          <div className={styles.numlinksContainer}>
            {Array.from({ length: numPages }, (_, i) => {
              return (
                <Link
                  to={`/blog/${i === 0 ? "" : i + 1}`}
                  key={i}
                  className={`${
                    i + 1 === currentPage ? styles.currentLink : ""
                  } ${styles.linkPages}`}
                >
                  {i + 1}
                </Link>
              )
            })}
          </div>

          {!isLast && (
            <Link
              to={nextPage}
              className={`${styles.paginateWord} ${styles.paginateNext}`}
            >
              Next <FaAngleRight />
            </Link>
          )}
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
