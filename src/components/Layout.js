import React from "react"
import Header from "./Header/Header"
import ThemeContextWrapper from "../context/theme/ThemeContextWrapper"

const Layout = ({ children }) => {
  return (
    <ThemeContextWrapper className="antialiased">
      <Header />
      {children}
    </ThemeContextWrapper>
  )
}

export default Layout
