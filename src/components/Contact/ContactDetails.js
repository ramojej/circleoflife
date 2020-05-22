import React, { useContext } from "react"
import { ThemeContext } from "../../context/theme/ThemeContext"
import { FaEnvelope, FaPhone, FaMapPin, FaClock } from "react-icons/fa"
import styles from "../../css/contactdetails.module.css"

const ContactDetails = () => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div
      className={`${styles.detailsContainer} ${isDarkMode ? styles.dark : ""}`}
    >
      <a href="mailto:devjejo@gmail.com">
        <div>
          <FaEnvelope />
        </div>
        <h4>Email Us</h4>
        <p>devjejo@gmail.com</p>
      </a>
      <a href="tel:+639999999999">
        <div>
          <FaPhone />
        </div>
        <h4>Call us</h4>
        <p>0999-999-9999</p>
      </a>
      <div>
        <div>
          <FaMapPin />
        </div>
        <h4>Visit Us</h4>
        <p>Tanza, Cavite</p>
      </div>
      <div>
        <div>
          <FaClock />
        </div>
        <h4>Working Hours</h4>
        <p>
          Mon - Sat: 8 AM to 5 PM <br /> Sunday: Closed
        </p>
      </div>
    </div>
  )
}

export default ContactDetails
