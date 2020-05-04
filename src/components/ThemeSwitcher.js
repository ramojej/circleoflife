import React from "react"
import PropTypes from "prop-types"
import { BsMoon, BsSun } from "react-icons/bs"

const ThemeSwitcher = props => {
  //console.log(props)
  return (
    <button
      type="button"
      onClick={props.toggle}
      className={`focus:outline-none sm:ml-5 mr-4 ${props.className}`}
    >
      {props.isDarkMode ? <BsMoon /> : <BsSun className="text-yellow-500" />}
    </button>
  )
}

ThemeSwitcher.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default ThemeSwitcher
