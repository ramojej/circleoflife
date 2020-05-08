import React from "react"
import styles from "../css/banner.module.css"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"

const Banner = ({ className, title, img }) => {
  return (
    <BackgroundImage className={`${className} ${styles.banner}`} fluid={img}>
      <div className={styles.overlay}></div>
      <div className="container px-4">
        <h2>{title}</h2>
      </div>
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
