import React, { useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ThemeContext } from "../context/theme/ThemeContext"
import GatsbyImage from "gatsby-image"
import styles from "../css/hero.module.css"
import Button from "../components/Button"

const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero-full-trimmed.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = () => {
  const { hero } = useStaticQuery(query)

  const { isDarkMode } = useContext(ThemeContext)
  return (
    <>
      <section className="container mt-6 sm:mt-24 sm:flex sm:items-center">
        <div className="sm:w-5/12">
          <h1 className="text-primary-500 text-4xl sm:text-5xl font-extrabold leading-none">
            Because they can't tell you what's wrong.
          </h1>
          <p className="text-gray-600 text-lg mt-3">
            We deliver the highest standard quality and compassion of veterinary
            medicine to your furry friends along with our lovely and caring
            staff.
          </p>
          <Link to="/about">
            <Button title="Learn More" className="mt-3 mb-8" />
          </Link>
        </div>
        <div className="w-5/12 mx-auto sm:w-3/12">
          <GatsbyImage fluid={hero.childImageSharp.fluid} alt="Corgi" />
        </div>
      </section>
      <div className={`${isDarkMode ? styles.dark : styles.light}`}>
        <svg className="fill-current" viewBox="0 0 1440 192">
          <path
            fillOpacity="1"
            d="M0,192L80,176C160,160,320,128,480,128C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  )
}

export default Hero
