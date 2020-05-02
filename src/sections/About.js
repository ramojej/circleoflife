import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeContext } from "../context/theme/ThemeContext"
import GatsbyImage from "gatsby-image"

const About = () => {
  const data = useStaticQuery(query)

  const { isDarkMode } = useContext(ThemeContext)
  console.log(isDarkMode)

  return (
    <section
      className={`h-56 pb-12 ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}
    >
      <div className="container grid sm:grid-cols-2 sm:gap-20">
        <div>
          <h2>Welcome</h2>
        </div>
        <div>
          <div>
            <GatsbyImage fluid={data.file.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "black-cat.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default About
