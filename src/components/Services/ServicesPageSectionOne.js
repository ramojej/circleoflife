import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { ThemeContext } from "../../context/theme/ThemeContext"
import services from "../../constants/services"
import { FaPaw } from "react-icons/fa"
import styles from "../../css/servsecone.module.css"

const query = graphql`
  query {
    puppies: file(relativePath: { eq: "puppies-comp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const ServicesPageSectionOne = () => {
  const { isDarkMode } = useContext(ThemeContext)

  const { puppies } = useStaticQuery(query)

  const chunk = (array, size) => {
    return array.reduce((chunks, item, i) => {
      if (i % size === 0) {
        chunks.push([item])
      } else {
        chunks[chunks.length - 1].push(item)
      }
      return chunks
    }, [])
  }

  //divide the services to two and push it in two arrays
  const divs = chunk(services, 7)

  return (
    <div className={`${styles.secOne} ${isDarkMode ? styles.dark : ""}`}>
      <div>
        <h2>The best services for your pet!</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ullam molestias error aliquam eligendi eveniet dolores repellendus
          laborum, ab omnis!
        </p>
        <div className={styles.listContainer}>
          {divs.map((items, i) => {
            //console.log(items)
            return (
              <div key={i}>
                {items.map((item, i) => {
                  return (
                    <div key={i} className={styles.serviceItem}>
                      <FaPaw /> {item.service}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <Image fluid={puppies.childImageSharp.fluid} alt="Two Puppies" />
      </div>
    </div>
  )
}

export default ServicesPageSectionOne
