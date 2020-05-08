import React from "react"
import Layout from "../components/Layout"
import Banner from "../sections/Banner"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <Banner title="About Us" img={data.bannerImg.childImageSharp.fluid} />
    <div className="container px-4 py-12 sm:flex sm:items-center sm:py-16">
      <div className="sm:w-6/12">
        <h2 className="text-2xl font-bold">Welcome to Circle of Life</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eos
          rem unde, saepe nam iusto eveniet quas laboriosam, voluptate doloribus
          deserunt quo accusamus perferendis at, quae dolorum nemo mollitia!
          Tempora itaque, sunt culpa velit, voluptas vero necessitatibus nulla
          enim minus ipsam deserunt. Sunt voluptatibus molestias dolorem maiores
          consectetur, explicabo iusto blanditiis quaerat, iure a atque animi
          soluta nesciunt! Ullam ipsum perspiciatis nam possimus officiis?
          Doloribus dolorem dolores sit laboriosam ipsam nesciunt id fugiat
          eius, dolorum impedit recusandae quibusdam cum reprehenderit!
        </p>
      </div>
      <div className="mt-8 rounded-lg shadow-lg overflow-hidden sm:w-5/12 sm:mx-auto sm:mt-0">
        <GatsbyImage fluid={data.aboutImg.childImageSharp.fluid} />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    bannerImg: file(relativePath: { eq: "black-cat.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aboutImg: file(relativePath: { eq: "about-photo.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
