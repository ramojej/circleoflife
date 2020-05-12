import React, { useState } from "react"
import { useForm } from "react-hook-form"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styles from "../../css/sidebarform.module.css"

const SidebarForm = () => {
  const { register, handleSubmit, errors, formState, setError } = useForm()

  const { isSubmitting } = formState

  const [visibleForm, clearVisibleForm] = useState(true)

  const onSubmit = async (data, e) => {
    try {
      const result = await addToMailchimp(data.email)
      if (result.result === "error") {
        setError("email", "validate", "Email is already")
        //throw new Error("Email is already subscribed.")
      } else {
        console.log(result)
        clearVisibleForm(false)
      }
    } catch (error) {
      console.log(error)
    }

    // await new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve()
    //     clearVisibleForm(false)
    //   }, 3000)
    // })
  }

  console.log(errors)

  return (
    <div>
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
            Subscribe to our newsletter lorem ipsum dolor sit amet consectetur.
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
              {errors.email && errors.email.type === "required" && (
                <p className={styles.errorP}>Email is required</p>
              )}
              {errors.email && errors.email.type === "validate" && (
                <p className={styles.errorP}>Email is already subscribed.</p>
              )}
              <input
                type="submit"
                value={isSubmitting ? "Submitting..." : "Submit"}
                disabled={isSubmitting}
              />
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default SidebarForm
