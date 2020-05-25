import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { BsArrowRight } from "react-icons/bs"

const ArrowRightLink = ({ className, to, title, blogcard, arialabel }) => {
  if (blogcard) {
    return (
      <h3 className={className}>
        {title} <BsArrowRight className="inline-block text-2xl" />
      </h3>
    )
  } else {
    return (
      <Link className={className} to={to} aria-label={arialabel}>
        {title} <BsArrowRight className="inline-block text-2xl" />
      </Link>
    )
  }
}

ArrowRightLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  arialabel: PropTypes.string,
}

ArrowRightLink.defaultProps = {
  className:
    "text-primary-500 font-bold text-xl hover:underline mt-5 inline-block",
}

export default ArrowRightLink
