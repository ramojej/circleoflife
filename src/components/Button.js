import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "../context/theme/ThemeContext"
import styles from "../css/button.module.css"

const Button = ({ type, className, title, disabled, arialabel }) => {
  const { isDarkMode } = useContext(ThemeContext)
  //console.log(typeof className)

  return (
    <button
      type={type}
      className={`${className} ${styles.btn} ${
        isDarkMode ? styles.btnDark : styles.btnPrimary
      } ${className.includes("btn-services") ? styles.btnServices : ""}`}
      disabled={disabled}
      aria-label={arialabel}
    >
      {title}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  arialabel: PropTypes.string,
}

Button.defaultProps = {
  type: "button",
  disabled: false,
  className: "",
}

export default Button
