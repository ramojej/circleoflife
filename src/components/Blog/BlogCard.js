import React, { useContext } from "react"
import { ThemeContext } from "../../context/theme/ThemeContext"
import PropTypes from "prop-types"
import ArrowRightLink from "../../components/ArrowRightLink"
import BackgroundImage from "gatsby-background-image"
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa"
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
    <div className={styles.blogCard}>
      <BackgroundImage
        fluid={featureImage.fluid}
        className={styles.cardImage}
      />
      <div
        className={`${styles.content} ${isDarkMode ? styles.darkContent : ""}`}
      >
        <div className={styles.blogCategory}>{category}</div>
        <h3 className={styles.blogTitle}>{title}</h3>
        <div>
          <div className={styles.dateInfo}>
            <div className="flex items-center mr-3">
              <FaRegCalendarAlt className="mr-1" /> {createdAt}
            </div>
            <div className="flex items-center">
              <FaRegClock className="mr-1" /> {timeCreated}
            </div>
          </div>
        </div>

        {/* truncate to only 80 chars */}
        <p className="mt-4">{`${shortDesc.shortDesc.substring(0, 80)}...`}</p>
        <ArrowRightLink
          title="Read More"
          className="text-primary-500 font-bold text-lg hover:underline mt-5 inline-block"
          to={`/blog/${slug}`}
        />
      </div>
    </div>
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
