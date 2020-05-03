import React from "react"
import { FaSyringe, FaDog } from "react-icons/fa"
import { GiScalpel, GiStethoscope } from "react-icons/gi"

export default [
  {
    service: "consultation",
    icon: <GiStethoscope />,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, eaque.",
  },
  {
    service: "vaccination",
    icon: <FaSyringe />,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, eaque.",
  },
  {
    service: "hospitalization",
    icon: <FaDog />,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, eaque.",
  },
  {
    service: "surgery",
    icon: <GiScalpel />,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, eaque.",
  },
]
