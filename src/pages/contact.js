import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../sections/Banner"
import ContactForm from "../components/Contact/ContactForm"

const contact = props => {
  const { data } = props
  return (
    <Layout>
      <Banner title="Contact Us" img={data.bannerImg.childImageSharp.fluid} />
      <ContactForm />
    </Layout>
  )
}

export const query = graphql`
  {
    bannerImg: file(relativePath: { eq: "contact-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
