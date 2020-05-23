import React from "react"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"
import styles from "../css/banner.module.css"

const Banner = ({ className, title, img, singleblog }) => {
  return (
    <BackgroundImage
      className={`${className} ${styles.banner} ${
        singleblog && styles.singleBlog
      }`}
      fluid={img}
    >
      <div className={styles.overlay}></div>
      <div className="container px-4">{title && <h2>{title}</h2>}</div>
    </BackgroundImage>
  )
}

Banner.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.object,
}

Banner.defaultProps = {
  className: "",
}

export default Banner
