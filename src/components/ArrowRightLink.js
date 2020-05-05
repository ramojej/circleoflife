import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { BsArrowRight } from "react-icons/bs"

const ArrowRightLink = ({ className, to, title }) => {
  return (
    <Link className={className} to={to}>
      {title} <BsArrowRight className="inline-block text-2xl" />
    </Link>
  )
}

ArrowRightLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

ArrowRightLink.defaultProps = {
  className:
    "text-primary-500 font-bold text-xl hover:underline mt-5 inline-block",
}

export default ArrowRightLink
