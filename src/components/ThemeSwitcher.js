import React from "react"
import PropTypes from "prop-types"
import { animated, useTransition } from "react-spring"
import { BsMoon, BsSun } from "react-icons/bs"

const ThemeSwitcher = props => {
  const transitions = useTransition(props.isDarkMode, null, {
    from: item => ({
      position: "absolute",
      opacity: 0,
      transform: item === false ? "translateY(50px)" : "translateY(-50px)",
    }),
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: item => ({
      opacity: 0,
      transform: item === false ? "translateY(50px)" : "translateY(-50px)",
    }),
  })
  //console.log(transitions)
  return (
    <button
      type="button"
      onClick={props.toggle}
      aria-label="Theme Switcher"
      className={`focus:outline-none sm:ml-5 mr-8 inline-flex items-center bg-transparent border-none cursor-pointer relative text-yellow-500 ${props.className}`}
    >
      {/* {props.isDarkMode ? <BsMoon /> : <BsSun className="text-yellow-500" />} */}
      {transitions.map(({ item, key, props }) =>
        item === true ? (
          <animated.span style={props} key={key}>
            <BsMoon />
          </animated.span>
        ) : (
          <animated.span style={props} key={key}>
            <BsSun />
          </animated.span>
        )
      )}
    </button>
  )
}

ThemeSwitcher.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default ThemeSwitcher
