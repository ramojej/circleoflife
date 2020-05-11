import React from "react"
import Wrapper from "../components/Wrapper"
import Header from "./Header/Header"
//import ThemeContextWrapper from "../context/theme/ThemeContextWrapper"
import Footer from "../sections/Footer"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout
