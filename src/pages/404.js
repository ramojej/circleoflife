import React from "react"
import Layout from "../components/Layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import Button from "../components/Button"
import GatsbyImage from "gatsby-image"
import SEO from "../components/SEO"

const query = graphql`
  query {
    cat: file(relativePath: { eq: "halfcat-trimmed.png" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Error = () => {
  const { cat } = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="404 Page not found" />
      <section
        className="container flex flex-col pt-8 md:pt-16"
        style={{ minHeight: "calc(100vh - 197px)" }}
      >
        <div className=" text-center">
          <h2 className="text-primary-800 text-2xl font-bold leading-tight">
            Sorry. The page you were looking for doesn't exist.
          </h2>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            delectus qui.
          </p>
          <Link to="/" className="bg-primary">
            <Button title="Back to Home" className="mt-3 mb-8 inline-block" />
          </Link>
        </div>
        <div className="mt-auto w-full">
          <GatsbyImage
            fluid={cat.childImageSharp.fluid}
            alt="Chubby cat"
            className="mx-auto max-w-xl"
          />
        </div>
      </section>
    </Layout>
  )
}

export default Error
