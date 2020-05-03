import React, { useContext } from "react"
import { ThemeContext } from "../context/theme/ThemeContext"
import services from "../constants/services"
import Service from "../components/Services/Service"
import Button from "../components/Button"
// import GatsbyImage from "gatsby-image"

const Services = () => {
  //const data = useStaticQuery(query)

  const { isDarkMode } = useContext(ThemeContext)
  //console.log(isDarkMode)

  return (
    <section
      className={`home-services pb-12 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      }`}
    >
      <div className="container">
        <div className="py-12">
          <h2 className="text-center text-3xl mb-2 font-bold text-primary-500">
            Services
          </h2>
          <p className="mb-12 sm:w-6/12 sm:mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            aliquid itaque voluptatem eligendi veniam. Iure corrupti possimus
            quidem qui eius.
          </p>
          <div className="sm:grid sm:grid-cols-2 sm:gap-8 md:grid-cols-4">
            {services.slice(0, 4).map((item, index) => {
              return (
                <Service
                  key={index}
                  icon={item.icon}
                  description={item.description}
                  name={item.service}
                  className="mb-10"
                />
              )
            })}
          </div>
          <Button
            title="View All Services"
            className="mt-6 mx-auto block btn-services"
          />
        </div>
      </div>
    </section>
  )
}

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "black-cat.jpg" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `

export default Services
