import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
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
      <section className="container mt-5 sm:mt-24">
        <div>
          <h1 className="text-primary-500 text-4xl sm:text-5xl font-extrabold leading-none">
            Healing and Loving your pets
          </h1>
          <p className="text-gray-600 text-lg mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eum repellat ad exercitationem eligendi corrupti modi quam
            praesentium architecto quia!
          </p>
          <Button title="Learn More" className="mt-3 mb-8" />
        </div>
        <div className="w-6/12 mx-auto">
          <GatsbyImage fluid={hero.childImageSharp.fluid} />
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
