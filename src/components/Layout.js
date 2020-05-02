import React from "react"
import Wrapper from "../components/Wrapper"
import Header from "./Header/Header"
import ThemeContextWrapper from "../context/theme/ThemeContextWrapper"

const Layout = ({ children }) => {
  return (
    <ThemeContextWrapper>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </ThemeContextWrapper>
  )
}

export default Layout
