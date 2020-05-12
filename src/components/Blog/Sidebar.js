import React, { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"
import { ThemeContext } from "../../context/theme/ThemeContext"
import addToMailchimp from "gatsby-plugin-mailchimp"
import cats from "../../constants/categories"
import styles from "../../css/sidebar.module.css"

const Sidebar = () => {
  const { register, handleSubmit, errors, formState } = useForm()

  const { isSubmitting } = formState

  const { isDarkMode } = useContext(ThemeContext)

  const [visibleForm, clearVisibleForm] = useState(true)

  console.log(isSubmitting)

  const onSubmit = async (data, e) => {
    //const result = await addToMailchimp(data.email)
    //console.log(e)
    await new Promise(resolve => {
      setTimeout(() => {
        resolve()
        clearVisibleForm(false)
      }, 3000)
    })
  }

  return (
    <aside className={styles.sidebarContainer}>
      <h2>Hot Topics</h2>
      <div className={styles.tags}>
        {cats.map((item, i) => {
          return (
            <Link key={i} to={`/category${item.path}`}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div
        className={`${styles.newsletter} ${isDarkMode ? styles.darkform : ""}`}
      >
        <h2>Newsletter</h2>
        {!visibleForm && (
          <>
            <h4>
              You're in! Thanks for subscribing! <br />
              <span role="img" aria-label="dog and cat" className="text-3xl">
                🐶🎊🐱
              </span>
            </h4>
          </>
        )}
        {visibleForm && (
          <>
            <p>
              Subscribe to our newsletter lorem ipsum dolor sit amet
              consectetur.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="lyra@gmail.com"
                  ref={register({ required: true })}
                />
                {errors.email && (
                  <p className={styles.errorP}>Email is required.</p>
                )}
                <input
                  type="submit"
                  value={isSubmitting ? "Submitting..." : "Submit"}
                />
              </div>
            </form>
          </>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
