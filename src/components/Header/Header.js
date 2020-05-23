import React, { useState, useContext } from "react"
import { ThemeContext } from "../../context/theme/ThemeContext"
import { Link, graphql, useStaticQuery } from "gatsby"
import ThemeSwitcher from "../ThemeSwitcher"
import Image from "gatsby-image"
import links from "../../constants/links"
import styles from "../../css/header.module.css"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  const data = useStaticQuery(query)

  const onClick = () => {
    setOpen(!isOpen)
  }

  //console.log(data.logo.childImageSharp)

  return (
    <header className="container sm:flex sm:justify-between sm:px-4 sm:py-4 sm:items-center">
      <div className="flex justify-between items-center px-4 py-3 sm:p-0">
        <div className={styles.imgContainer}>
          <Link to="/">
            <Image
              fluid={data.logo.childImageSharp.fluid}
              alt="Circle of Life"
            />
          </Link>
          {/* <img src={logo} alt="Circle of Life" className="h-8" /> */}
        </div>
        <div className="flex sm:hidden items-center">
          <ThemeSwitcher
            isDarkMode={isDarkMode}
            toggle={toggleDarkMode}
            className="sm:hidden"
          />
          <button
            type="button"
            className="text-gray-500 hover:text-white focus:text-gray-500 focus:outline-none active:text-gray-500 block"
            onClick={onClick}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen && (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`px-2 pt-2 pb-4 sm:bg-transparent ${
          isOpen ? "block" : "hidden"
        } sm:flex sm:p-0 sm:ml-auto ${isDarkMode ? "" : "bg-primary-600"}`}
      >
        {links.map((item, i) => {
          return (
            <Link
              key={i}
              to={item.path}
              className={`text-primary-200 block capitalize hover:text-primary-600 px-2 py-1 tracking-wider sm:mt-0 sm:text-gray-700 sm:px-0 ${
                i === 0 ? "" : "mt-1 sm:ml-8"
              }`}
              activeClassName={styles.activeLink}
            >
              {item.text}
            </Link>
          )
        })}
      </div>
      <ThemeSwitcher
        isDarkMode={isDarkMode}
        toggle={toggleDarkMode}
        className="hidden sm:block"
      />
    </header>
  )
}

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "col-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Header
