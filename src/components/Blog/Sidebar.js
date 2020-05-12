import React, { useContext } from "react"
import { Link } from "gatsby"
import { ThemeContext } from "../../context/theme/ThemeContext"
import SidebarForm from "./SidebarForm"
import cats from "../../constants/categories"
import styles from "../../css/sidebar.module.css"

const Sidebar = () => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <aside className={styles.sidebarContainer}>
      <h2>Hot Topics</h2>
      <div className={styles.tags}>
        {cats.map((item, i) => {
          return (
            <Link key={i} to={`/category${item.path}`}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div
        className={`${styles.newsletter} ${isDarkMode ? styles.darkform : ""}`}
      >
        <h2>Newsletter</h2>
        <SidebarForm />
      </div>
    </aside>
  )
}

export default Sidebar
