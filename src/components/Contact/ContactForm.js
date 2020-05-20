import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styles from "../../css/contactusform.module.css"

const ContactForm = () => {
  const { register, errors, handleSubmit, formState } = useForm({
    mode: "onChange",
  })

  const { isSubmitting } = formState

  console.log(errors)

  const onSubmit = async data => {
    await new Promise(resolve => {
      setTimeout(() => {
        console.log(data)
        console.log(errors)
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Walter White"
          ref={register({ required: true, minLength: 2, maxLength: 100 })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>Name is required</p>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <p>Name must be atleast 2 characters</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>Name must be less than 100 characters</p>
        )}
      </div>
      <div className="mt-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jessepinkman@gmail.com"
          ref={register({
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address.",
            },
          })}
        />
        {errors.email && errors.email.message && <p>{errors.email.message}</p>}
      </div>
      <div className="mt-4">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="I'm the danger!"
          ref={register}
        />
      </div>
      <input
        type="submit"
        value={isSubmitting ? "Submitting..." : "Submit"}
        disabled={isSubmitting}
      />
    </form>
  )
}

export default ContactForm
