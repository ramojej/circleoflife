import React, { useContext } from "react"
import { graphql } from "gatsby"
import { ThemeContext } from "../context/theme/ThemeContext"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import Banner from "../sections/Banner"
import Sidebar from "../components/Blog/Sidebar"
import BlogInfo from "../components/Blog/BlogInfo"
import styles from "../css/singleblog.module.css"

const SingleBlog = ({ data }) => {
  const { isDarkMode } = useContext(ThemeContext)

  const {
    createdAt,
    timeCreated,
    title,
    category,
    blogContent: { json },
    featureImage,
  } = data.getPost

  //get images from richtext
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            <img
              width="400"
              src={node.data.target.fields.file["en-US"].url}
              alt={title}
            />
          </div>
        )
      },
      "embedded-entry-block": node => {
        const { title, image, text } = node.data.target.fields

        return (
          <div>
            <h1>This is other post: {title["en-US"]}</h1>
            <img
              width="400"
              src={image["en-US"].fields.file["en-US"].url}
              alt={title}
            />
            {documentToReactComponents(text["en-US"])}
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <Banner singleblog img={featureImage.fluid} />
      <div
        className={`${styles.singleblogContainer} ${
          isDarkMode ? styles.singleblogDark : ""
        }`}
      >
        <div className={styles.mainContent}>
          <div>
            <BlogInfo
              title={title}
              createdAt={createdAt}
              timeCreated={timeCreated}
              category={category}
            />
          </div>
          <article>{documentToReactComponents(json, options)}</article>
        </div>
        <Sidebar className={styles.side} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    getPost: contentfulBlog(slug: { eq: $slug }) {
      createdAt(formatString: "MMM DD, YYYY")
      timeCreated: createdAt(formatString: "hh:mm a")
      title
      category
      blogContent {
        json
      }
      featureImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default SingleBlog
