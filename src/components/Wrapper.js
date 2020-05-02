import React, { useContext } from "react"
import { ThemeContext } from "../context/theme/ThemeContext"
import styles from "../css/wrapper.module.css"

const Wrapper = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div className={`antialiased ${isDarkMode ? styles.dark : styles.light}`}>
      {children}
    </div>
  )
}

export default Wrapper
