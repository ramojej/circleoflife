import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../sections/Banner"
import ContactForm from "../components/Contact/ContactForm"
import styles from "../css/contact.module.css"

const contact = props => {
  const { data } = props
  return (
    <Layout>
      <Banner title="Contact Us" img={data.bannerImg.childImageSharp.fluid} />
      <div className="main-cont">
        <div className={styles.sectionOne}>
          <div className={styles.formContainer}>
            <h2>Send us a message</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="mt-8 text-2xl font-bold">Get in touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ipsum nemo non magni consequatur cupiditate dolor provident ipsam,
              eligendi id?
            </p>
            <p>
              Debitis ducimus voluptas aliquid corrupti, perferendis tenetur
              nesciunt nam neque esse itaque numquam minima, ex aut. Facilis,
              soluta! Culpa, doloribus.
            </p>
          </div>
        </div>
      </div>
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
