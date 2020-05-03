import React from "react"
import PropTypes from "prop-types"
import styles from "../../css/homeservices.module.css"

const Service = ({ icon, name, description, className }) => {
  return (
    <div className={className}>
      <div
        className={`flex items-center justify-center ${styles.serviceContainer}`}
      >
        <span className="block text-primary-800 text-3xl">{icon}</span>
      </div>
      <h4 className="text-center text-lg capitalize mt-2 font-semibold">
        {name}
      </h4>
      <p className="text-center">{description}</p>
    </div>
  )
}

Service.propTypes = {
  icon: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
}

export default Service
