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

  console.log(isDarkMode)

  //console.log(data.logo.childImageSharp)

  return (
    <header className="container bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
      <div className="flex justify-between items-center px-4 py-3 sm:p-0">
        <div className={styles.imgContainer}>
          <Image fluid={data.logo.childImageSharp.fluid} alt="Circle of Life" />
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
            className="text-gray-500 hover:text-white focus:text-white focus:outline-none block"
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
        className={`px-2 pt-2 pb-4 ${
          isOpen ? "block" : "hidden"
        } sm:flex sm:p-0 sm:ml-auto`}
      >
        {links.map((item, i) => {
          return (
            <Link
              key={i}
              to={item.path}
              className={`text-white block capitalize rounded hover:bg-gray-800 px-2 py-1 tracking-wider sm:mt-0 ${
                i === 0 ? "" : "mt-1 sm:ml-2"
              }`}
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
    logo: file(relativePath: { eq: "logo-circ.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Header
