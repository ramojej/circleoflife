import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

const About = () => {
  const data = useStaticQuery(query)

  return (
    <section className="h-56 bg-gray-200 pb-12">
      <div className="container flex">
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
