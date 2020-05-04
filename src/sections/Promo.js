import React, { useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { ThemeContext } from "../context/theme/ThemeContext"
//import GatsbyImage from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { BsArrowRight } from "react-icons/bs"

const query = graphql`
  query {
    cat: file(relativePath: { eq: "catpromo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Promo = () => {
  const { cat } = useStaticQuery(query)
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <section className="pt-4 pb-16">
      <div className="container">
        <div className="rounded-lg overflow-hidden shadow-2xl lg:flex">
          {/* <div className="w-full xl:w-5/12" style={{ transform: `scaleX(-1)` }}>
            <GatsbyImage fluid={cat.childImageSharp.fluid} />
          </div> */}
          <BackgroundImage
            className="w-full h-40 sm:h-64 lg:h-auto bg-cover xl:w-5/12"
            fluid={cat.childImageSharp.fluid}
            style={{ transform: `scaleX(-1)` }}
          />
          <div
            className={`p-4 lg:pl-8 lg:py-8 ${isDarkMode ? "bg-gray-700" : ""}`}
          >
            <h2 className="text-3xl font-bold">Promotion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              porro praesentium, a asperiores neque culpa tempore quisquam in
              laborum, iste nesciunt veritatis ea laboriosam, suscipit
              repudiandae velit ratione reiciendis totam!
            </p>
            <Link
              to="/"
              className="text-primary-500 font-bold text-xl hover:underline mt-5 inline-block"
            >
              Learn more <BsArrowRight className="inline-block text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo
