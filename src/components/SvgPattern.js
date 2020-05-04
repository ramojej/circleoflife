import React from "react"
import PropTypes from "prop-types"
import styles from "../css/svgpattern.module.css"

const SvgPattern = ({ className }) => {
  return (
    <div
      className={`${className} ${styles.svgPattern} ${
        className.includes("doctor-pattern") ? styles.doctorPattern : ""
      }`}
    ></div>
  )
}

SvgPattern.propTypes = {
  className: PropTypes.string,
}

SvgPattern.defaultProps = {
  className: "text-primary-500 h-screen",
}

export default SvgPattern
