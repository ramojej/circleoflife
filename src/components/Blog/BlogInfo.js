import React, { useContext } from "react"
import { ThemeContext } from "../../context/theme/ThemeContext"
import PropTypes from "prop-types"
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa"
import styles from "../../css/bloginfo.module.css"

const BlogInfo = ({ title, createdAt, timeCreated, category }) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div className={isDarkMode ? styles.darkContent : ""}>
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
    </div>
  )
}

BlogInfo.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  timeCreated: PropTypes.string,
  category: PropTypes.string,
}

export default BlogInfo
