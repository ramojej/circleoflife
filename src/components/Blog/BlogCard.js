import React, { useContext } from "react"
import { Link } from "gatsby"
import { ThemeContext } from "../../context/theme/ThemeContext"
import PropTypes from "prop-types"
import BlogInfo from "../../components/Blog/BlogInfo"
import ArrowRightLink from "../../components/ArrowRightLink"
import BackgroundImage from "gatsby-background-image"
import styles from "../../css/blog.module.css"

const BlogCard = ({ blog }) => {
  const { isDarkMode } = useContext(ThemeContext)

  const {
    title,
    slug,
    featureImage,
    createdAt,
    timeCreated,
    shortDesc,
    category,
  } = blog

  return (
    <Link to={`/blog/${slug}`} className={styles.blogCard}>
      <BackgroundImage
        fluid={featureImage.fluid}
        className={styles.cardImage}
      />
      <div
        className={`${styles.content} ${isDarkMode ? styles.darkContent : ""}`}
      >
        <BlogInfo
          title={title}
          createdAt={createdAt}
          timeCreated={timeCreated}
          category={category}
        />

        {/* truncate to only 80 chars */}
        <p className="mt-4">{`${shortDesc.shortDesc.substring(0, 80)}...`}</p>
        <ArrowRightLink
          blogcard
          title="Read More"
          className="text-primary-500 font-bold text-lg hover:underline mt-5 inline-block"
          to={`/blog/${slug}`}
        />
      </div>
    </Link>
  )
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    shortDesc: PropTypes.object.isRequired,
    featureImage: PropTypes.object.isRequired,
  }).isRequired,
}

export default BlogCard
