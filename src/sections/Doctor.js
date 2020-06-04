import React from "react"
import GatsbyImage from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import SvgPattern from "../components/SvgPattern"
import Button from "../components/Button"
import styles from "../css/doctor.module.css"

const query = graphql`
  query {
    doctor: file(relativePath: { eq: "doc-lyra.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Doctor = () => {
  const { doctor } = useStaticQuery(query)

  return (
    <section className="py-16 text-center lg:text-left container lg:w-8/12 lg:py-32">
      <div className="lg:grid lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-bold text-3xl">Meet the Doctor</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            repudiandae asperiores, eius provident deleniti facere adipisci nemo
            temporibus officiis? Unde excepturi eveniet fugiat perspiciatis
            saepe doloremque, asperiores non mollitia sequi voluptatem nam
            ratione provident modi!
          </p>
          <Link to="/about" aria-label="Know more about the doctor">
            <Button
              title="About the team"
              className="mt-3 mb-8 inline-block"
              arialabel="Know more about the Doctor"
            />
          </Link>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className={`relative ${styles.imgContainer}`}>
            <GatsbyImage
              fluid={doctor.childImageSharp.fluid}
              className={`rounded-full w-9/12 mx-auto relative z-20`}
              alt="Doc Lyra Ibong of Circle of Life Veterinary Clinic"
            />
            <SvgPattern
              width="200px"
              height="200px"
              className={`rounded-full absolute doctor-pattern`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctor
