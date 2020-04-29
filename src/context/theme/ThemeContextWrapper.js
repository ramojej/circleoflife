import React, { useState, useEffect } from "react"
import { ThemeContext } from "./ThemeContext"

export default props => {
  const [isDarkMode, setDarkMode] = useState()

  //check if browser supports dark scheme
  // const supportsDarkMode = () =>
  //   window.matchMedia("(prefers-color-scheme: dark)").matches === true

  //on load check local storage
  useEffect(() => {
    const isDarkLocal = JSON.parse(localStorage.getItem("isDarkMode"))

    isDarkLocal === false ? setDarkMode(false) : setDarkMode(true)
  }, [])

  //set dark mode and put it in local storage
  function toggleDarkMode() {
    setDarkMode(!isDarkMode)
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode))
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
