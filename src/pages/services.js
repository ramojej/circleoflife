import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../sections/Banner"
import SectionOne from "../components/Services/ServicesPageSectionOne"
import SEO from "../components/SEO"

const services = props => {
  const { data } = props
  return (
    <Layout>
      <SEO title="Services" />
      <Banner title="Services" img={data.bannerImg.childImageSharp.fluid} />
      <SectionOne />
    </Layout>
  )
}

export const query = graphql`
  {
    bannerImg: file(relativePath: { eq: "puppy-serv-comp.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default services
