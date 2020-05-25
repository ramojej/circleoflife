import React, { useContext } from "react"
import { ThemeContext } from "../context/theme/ThemeContext"
import links from "../constants/social-links"
import styles from "../css/footer.module.css"

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <footer className={`${styles.footerSec} ${isDarkMode ? styles.dark : ""}`}>
      <div className={`${styles.footerContainer} container`}>
        <div>
          <p className="text-center">
            Designed and developed by <br className="sm:hidden" /> Jejomar
            Dorongon
          </p>
        </div>
        <div className="mt-5 md:mt-0">
          <div className="flex items-center justify-center">
            {links.map((item, index) => {
              return (
                <a
                  href={item.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`${index === 0 ? "mr-2" : ""} ${
                    styles.footerSocial
                  }`}
                >
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
