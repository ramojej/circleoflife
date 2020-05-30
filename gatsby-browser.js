import React from "react"
import Wrapper from "./src/context/theme/ThemeContextWrapper"
import "typeface-lato"
import "./src/css/tailwind.css"
import "./src/css/global.css"

export const wrapRootElement = ({ element }) => {
  return <Wrapper>{element}</Wrapper>
}
