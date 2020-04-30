import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "../context/theme/ThemeContext"
import styles from "../css/button.module.css"

const Button = ({ type, className, title, disabled }) => {
  const { isDarkMode } = useContext(ThemeContext)
  console.log(isDarkMode)
  return (
    <button
      type={type}
      className={`${className} ${styles.btn} ${
        isDarkMode ? styles.btnDark : styles.btnPrimary
      }`}
      disabled={disabled}
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
}

Button.defaultProps = {
  type: "button",
  disabled: false,
}

export default Button
