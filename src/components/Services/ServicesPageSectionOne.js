import React from "react"
import services from "../../constants/services"
import styles from "../../css/servsecone.module.css"

const ServicesPageSectionOne = () => {
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

  console.log(divs)

  return (
    <div>
      <div>
        <h2>The best services for your pet!</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ullam molestias error aliquam eligendi eveniet dolores repellendus
          laborum, ab omnis!
        </p>
        <div>
          {divs.map((items, i) => {
            console.log(items)
            return (
              <div key={i}>
                {items.map((item, i) => {
                  return <li key={i}>{item.service}</li>
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ServicesPageSectionOne
