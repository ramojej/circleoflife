import React, { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"
import { ThemeContext } from "../../context/theme/ThemeContext"
import cats from "../../constants/categories"
import styles from "../../css/sidebar.module.css"

const Sidebar = () => {
  const { register, handleSubmit, errors } = useForm()

  const { isDarkMode } = useContext(ThemeContext)

  const [visibleForm, clearVisibleForm] = useState(true)

  const onSubmit = (data, e) => {
    console.log(data)
    alert(data.email)
    e.target.reset()
    clearVisibleForm(false)
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
              <span role="img" aria-label="dog and cat" className="text-xl">
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
                <input type="submit" value="Subscribe" />
              </div>
            </form>
          </>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
